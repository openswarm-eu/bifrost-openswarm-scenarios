# ProSeCO-scenarios

## Start the Scenarios

(Optional) Reset the demo repository (clean up old data from former demo starts and prune the docker environment):
```sh
python ./tools/reset_for_demo.py
```

Zip the BSX:
```sh
python ./tools/zero_bsx_zip.py --story_label="ProSeCO-Scenarios"
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
python ./tools/zero_bsx_get.py --story_label="ProSeCO-Scenarios" --operating_system="windows"
```

After you are finished, shut down BIFROST with
```sh
docker-compose -f ./docker/docker-compose-scenarios.yml --env-file ./env/docker.env down
```

## Tools

Within the folder `tools` are some helper scripts (using python). For more information please use the [README](./tools/README.md) there...

## Altering Core Fragments / Structures

In this repository it is possible to start BIFROST with alternative structure fragments. The fragments in form of Typescript code can be found in [`./fragments/core`](./fragments/core/). 

To work with the full potential of these Typescript files, you can import the `bifrost-zero-common` node modules & Typescript language support with the provided `package.json`. Just install all required Node modules with (after installing [Node.JS](https://nodejs.org/en), tested with version 20.13.1, npm 10.5.2):

```sh
npm install
```