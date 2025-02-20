# Script to clean up the repository of not needed data for a clean start of a new demo

import os
import shutil
print("---------------------------------")
print("Start cleaning up ...")
print("---------------------------------")
# Remove the contont of the backup folder within the data folder
backup_folder = os.path.join('data', 'story_volume')
# check, if folder exists
if os.path.exists(backup_folder):
    try:
        shutil.rmtree(backup_folder)
    except Exception as e:
        print(e)
else:
    print(f"Folder '{backup_folder}' was already removed.")

# Remove the content of the influxdb folder within the data folder
influxdb_folder = os.path.join('data', 'influxdb')
if os.path.exists(influxdb_folder):
    try:
        shutil.rmtree(influxdb_folder)
    except Exception as e:
        print(e)
else:
    print(f"Folder '{influxdb_folder}' was already removed.")

# make a docker system prune and remove also all volumes
os.system('docker system prune --volumes -f')
os.system('docker volume prune --filter all=True -f')

print("---------------------------------")