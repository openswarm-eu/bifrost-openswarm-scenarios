import os, sys
import shutil
import logging
from pathlib import Path
from zipfile import ZipFile
import argparse  

###########################################  
# Create an argparse object  
parser = argparse.ArgumentParser(
    prog='zero_bsx_zip',
    description='To reimport a story specified by STORY_LABEL into BIFROST the content of BSX_SOURCE_DIR has to be zipped again to be a valid BSX file. This is done within tis script.',
    epilog=""
)  
parser.add_argument('-l', '--story_label', 
                    type=str, required = True, 
                    help='Story to handle (can also be just a partial string, than all matching stories will be zipped)')  
parser.add_argument('-s', '--bsx_source_dir', 
                    type=str, default='./data/bsx_raw', 
                    help='source directory of raw bsx, from viewpoint Repo folder. Defaults to "./data/bsx_raw"')  
parser.add_argument('-t', '--bsx_target_dir', 
                    type=str, default="./data/bsx_volume", 
                    help='target directory to store the zipped bsx, from viewpoint Repo folder. Defaults to "./data/bsx_volume"')  
# Parse the arguments  
args = parser.parse_args()  
story_label = args.story_label
bsx_source_dir = args.bsx_source_dir
bsx_target_dir = args.bsx_target_dir

###########################################
# Start the logger
logger = logging.getLogger(__name__)
logformat  = '[BSX-Zipper]: %(asctime)s : %(message)s'
logdatefmt = '%m/%d/%Y %H:%M:%S'
logging.basicConfig(level=logging.INFO, format=logformat, datefmt=logdatefmt)

logger.info("Starting")

###########################################
# prepare everything
os.chdir(os.path.dirname(sys.argv[0]))
dir_script = Path(__file__).cwd()
logger.info("Script folder: '"+str(dir_script)+"'")
dir_raws    = Path(dir_script.parent,bsx_source_dir)


bsx_folders= []
for raw_bsx_folder in os.listdir(dir_raws):
    if story_label in raw_bsx_folder:
        bsx_folders.append(raw_bsx_folder)


if bsx_folders == []:
    logger.error("ERROR: BSX-RAW folder: '"+str(dir_raws)+"' does not exist!")
    sys.exit(1)

for index,bsx_folder in enumerate(bsx_folders):

    if(len(bsx_folders)>1):
        logger.info("---------------------------------------------------")
        logger.info("- Handling story {}/{}: {}".format(index+1,len(bsx_folders),bsx_folder))
        logger.info("---------------------------------------------------")
    
    dir_raw    = Path(dir_raws,bsx_folder)
    bsx_file = bsx_folder + ".zip"

    logger.info("BSX-RAW folder: '"+str(dir_raw)+"'")
    dir_zip     = Path(dir_script.parent,bsx_target_dir)
    logger.info("ZIP folder: '"+str(dir_zip)+"'")
    dir_zip_tmp = Path(dir_script.parent,bsx_target_dir,"tmp")
    # make zip folder, if not present:
    if not os.path.exists(dir_zip):
        os.makedirs(dir_zip)
    if os.path.exists(dir_zip_tmp):
        shutil.rmtree(dir_zip_tmp)

    shutil.copytree(dir_raw, dir_zip_tmp)

    # ###########################################
    # Remove CRLF and change to LF (needed when using script on windows machines):
    WINDOWS_LINE_ENDING = b'\r\n'
    UNIX_LINE_ENDING = b'\n'
    logger.info("Dealing with 'CRLF' end of lines...")
    # iterate over all files in the dir_raw folder and its subfolders
    for dirpath, dirnames, filenames in os.walk(dir_raw):
        # create the corresponding output subfolder in dir_zip_tmp
        rel_dirpath = os.path.relpath(dirpath, dir_raw)
        output_subfolder = os.path.join(dir_zip_tmp, rel_dirpath)
        os.makedirs(output_subfolder, exist_ok=True)
        for filename in filenames:
            # construct the input and output file paths
            input_file = os.path.join(dirpath, filename)
            output_file = os.path.join(output_subfolder, filename)
            # read the contents of the input file
            with open(input_file, "rb") as f:
                file_contents = f.read()
            # modify the contents of the file, if needed
            if filename.endswith(".csv"):
                modified_contents = file_contents.replace(WINDOWS_LINE_ENDING, UNIX_LINE_ENDING)
            else:
                modified_contents = file_contents
            # write the modified contents to the output file
            with open(output_file, "wb") as f:
                f.write(modified_contents)
    logger.info("... Succesfull!")

    ###########################################
    # zip bsx data
    logger.info("Zipping BSX data...")
    with ZipFile(Path(dir_zip,bsx_file), 'w') as zipObj:
        # Iterate over all the files in directory
        for root, dirs, files in os.walk(dir_zip_tmp):
            for file_or_dir in files + dirs:
                # Add file to zip
                zip_path = os.path.relpath(os.path.join(root, file_or_dir),
                    os.path.join(dir_zip_tmp, os.path.pardir))
                # Remove the root folder in the zip path
                zip_path = os.path.relpath(zip_path, "tmp")
                zipObj.write(
                    os.path.join(root, file_or_dir),
                    zip_path)
    logger.info("Zipping BSX into "+bsx_file+" succesfull!")
    ###########################################

    ###########################################
    # removing tmp folder
    logger.info("Removing temporary Data...")
    shutil.rmtree(Path(dir_zip_tmp))
    logger.info("... Succesfull!")