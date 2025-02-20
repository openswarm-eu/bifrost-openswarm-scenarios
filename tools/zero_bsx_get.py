import requests
import os, sys
import logging
import json
from   zipfile  import ZipFile
from   pathlib  import Path
import argparse

###########################################
# Create an argparse object  
parser = argparse.ArgumentParser(
    prog='zero_bsx_get',
    description='This scripts gets an export of a BIFROST story specified by STORY_LABEL, unzips this export and stores the data into the defined BSX_TARGET_DIR folder.',
    epilog=""
    ) 
# Create arguments
parser.add_argument('-bu', '--bifrost_url', 
                    type=str, default="http://localhost:9091", 
                    help='Bifrost URL. Defaults to "http://localhost:9091"')  
parser.add_argument('-sl', '--story_label', 
                    type=str, required = True, 
                    help='Story to export (defined by label, if label exists multiple time, the "first" occurence is used!)')  
parser.add_argument('-td', '--bsx_target_dir', 
                    type=str, default="./data/bsx_raw", 
                    help='target directory to store the zipped bsx, from viewpoint of the repository folder. Defaults to "./data/bsx_raw"')  
parser.add_argument('-os', '--operating_system', 
                    type=str, default="unix", 
                    help='Specification of the operating system executing the script for correct line endings. Defaults to a UNIX system, if script is used on a Windows os, use the string "windows"')  
# Parse the arguments  
args = parser.parse_args()  
story_label = args.story_label
bifrost_url = args.bifrost_url
bsx_target_dir = args.bsx_target_dir
os_system = args.operating_system

###########################################
# Start the logger
logger = logging.getLogger(__name__)
logformat  = '[BSX-Exporter]: %(asctime)s : %(message)s'
logdatefmt = '%m/%d/%Y %H:%M:%S'
logging.basicConfig(level=logging.INFO, format=logformat, datefmt=logdatefmt)

###########################################
# prepare everything for unzipping
os.chdir(os.path.dirname(sys.argv[0]))
dir_script = Path(__file__).cwd()
logger.info("Script folder: '"+str(dir_script)+"'")
dir_raw    = Path(dir_script.parent,bsx_target_dir,story_label)
logger.info("BSX-RAW folder: '"+str(dir_raw)+"'")

if not os.path.exists(dir_raw):
    os.makedirs(dir_raw)

###########################################
# get the BSX from BIFROST
bsx_file = story_label+".zip"
try:
    logger.info("Try to get the currently present stories from BIFROST...")
    response = requests.get(bifrost_url+"/rest/v2/stories?user=dr", verify=False)
    stories = response.json()
    
    story_id = "NoStoryFoundForLabel"
    for story in stories:
        id = story['storyId']
        name = story['label']
        if name == story_label:
            story_id = id
            break
    
    logger.info("Try to get export from BIFROST (URL '%s') of story '%s' with id '%s'...",bifrost_url, story_label, story_id)
    body = {
        "excludeExperimentIds": ""
    }
    response = requests.post(bifrost_url+"/rest/v2/story/"+story_id+"/export?user=PythonScript&robot=false",json = body, verify=False)
    if(response.status_code !=200):
        logger.error("ERROR: Non 200 from REST call /rest/data/exportBSX")
        logger.error(str(response))
        sys.exit(1)
except Exception as e:
    error_msg = str(e.args[0])
    logger.error("ERROR: An error occured: %s",error_msg)
    sys.exit(1)
logger.info("... Succesfull!")

###########################################
# unzip the data
logger.info("Saving data...")
with open(Path(dir_raw,bsx_file), "wb") as fd:
    for chunk in response.iter_content(chunk_size=128):
        fd.write(chunk)
logger.info("... Succesfull!")

logger.info("Extracting Data...")
with ZipFile(Path(dir_raw,bsx_file), "r") as zip:
    zip.extractall(dir_raw)
logger.info("... Succesfull!")

logger.info("Removing temporary Data...")
os.remove(Path(dir_raw,bsx_file))
logger.info("... Succesfull!")

###########################################
# format the data correctly
logger.info("Formatting .json files...")
# format the .json in the export folder:
for file in os.listdir(dir_raw):
    if file.endswith(".json"):
        fileobject = open(os.path.join(dir_raw,file))
        state = json.load(fileobject)
        with open(os.path.join(dir_raw,file), 'w') as outfile:
            json.dump(state, outfile, indent=4, ensure_ascii=False)
        logger.info("    Formatted: " + os.path.join(file))
# Iterate over all the files in the sub-folders:
for root, dirs, walkfiles in os.walk(dir_raw):
    for walkdir in dirs:
        for file in os.listdir(os.path.join(root,walkdir)):
            if file.endswith(".json"):
                fileobject = open(os.path.join(root,walkdir,file))
                state = json.load(fileobject)
                with open(os.path.join(root,walkdir,file), 'w') as outfile:
                    json.dump(state, outfile, indent=4, ensure_ascii=False)
                logger.info("    Formatted: " + os.path.join(walkdir,file))
logger.info("... Succesfull!")

###########################################
# if needed, remove LF and change to CRLF (needed on windows machines):
WINDOWS_LINE_ENDING = b'\r\n'
UNIX_LINE_ENDING = b'\n'


if os_system == "windows":
    logger.info("Dealing with 'LF' end of lines...")
    # format the files in the export folder:
    for file in os.listdir(dir_raw):
        if file.endswith(".csv"):
            fileobject = open(os.path.join(dir_raw,file),'rb')
            content = fileobject.read()
            content = content.replace(UNIX_LINE_ENDING, WINDOWS_LINE_ENDING)
            with open(os.path.join(dir_raw,file), 'wb') as outfile:
                outfile.write(content)
    # Iterate over all the files in the sub-folders:
    for root, dirs, walkfiles in os.walk(dir_raw):
        for walkdir in dirs:
            for file in os.listdir(os.path.join(root,walkdir)):
                if file.endswith(".csv"):
                    fileobject = open(os.path.join(root,walkdir,file),'rb')
                    content = fileobject.read()
                    content = content.replace(UNIX_LINE_ENDING, WINDOWS_LINE_ENDING)
                    with open(os.path.join(root,walkdir,file), 'wb') as outfile:
                        outfile.write(content)
    logger.info("... Succesfull!")