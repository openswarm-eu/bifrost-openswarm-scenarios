# ProSeCO-scenarios

## Start the Scenarios

(Optional) Reset the demo repository (clean up old data from former demo starts and prune the docker environment):
```sh
python ./tools/reset_for_demo.py
```

Zip the BSX:
```sh
python ./tools/zero_bsx_zip.py --story_label="ProSeCO-Szenarios"
```

Start BIFROST ZERO.
```sh
docker-compose -f ./docker/docker-compose-scenarios.yml --env-file ./env/docker.env pull
docker-compose -f ./docker/docker-compose-scenarios.yml --env-file ./env/docker.env up -d
```
and open http://127.0.0.1:9091/ 

Open the DC-DEMO environment
https://launch.dcdemo.ngm-demo.grid-software.siemens.cloud/coreui/

Start interacting with BIFROST and DC-DEMO.

## Save your work

Add the changes to this repo via
```sh
python ./tools/zero_bsx_get.py --story_label="ProSeCO-Szenarios" --operating_system="windows"
```

After you are finished, shut down BIFROST with
```sh
docker-compose -f ./docker/docker-compose-scenarios.yml --env-file ./env/docker.env down
```

## Tools

Within the folder `tools` are some helper scripts (using python). For more information please use the [README](./tools/README.md) there...
