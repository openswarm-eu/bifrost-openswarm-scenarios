# Scripts for State Handling

Here some scripts are provided to help you with manipulation of BIFROST states...

## Get Current Story via BSX Export and Save Unzipped Data

With the following command a in BIFROST available story (with all experiments) of the defined `STORY_LABEL` will be exported into the folder `BSX_TARGET_DIR`. The downloaded .zip is extracted into a subfolder `STORY_LABEL` and the files are formatted for easier handling within a git repository. For more information use
```sh
python ./tools/zero_bsx_get.py --help
```
E.g. to get the current story and experiments for `Ecosint_Rural` on a Windows operated system, use
```sh
python ./tools/zero_bsx_get.py --story_label="Ecosint_Rural" --operating_system="windows"
```

## Zip Content of BSX_RAW Folder to a Importable BSX

To reimport a story specified by STORY_LABEL into BIFROST the content of BSX_SOURCE_DIR has to be zipped again to be a valid BSX file. This is done within the script `bsx_zip.py`, for more information use
```sh
python ./tools/zero_bsx_zip.py --help
```
E.g. to create a BSX for the story `Ecosint_Rural`, use
```sh
python ./tools/zero_bsx_zip.py --story_label="Ecosint_Rural"
```

## Python Version

Tested with Python v3.12

Use the module best within a virtual environment. To create a new environment use
``` sh
# macOS/Linux
# You may need to run sudo apt-get install python3-venv first
python3 -m venv .venv

# Windows
python -m venv .venv
# You can also use 
py -3.12 -m venv .venv
```

Activate the environment with the script:
``` sh
.venv\Scripts\activate
```

Use the provided `requirements.txt` (if present) to install all needed python packages
```sh
pip install -r ./tools/requirements.txt
```

If packages were added or updated, use 
```sh
pip freeze > ./tools/requirements.txt
```
to save this new dependencies. Commit these changes!

