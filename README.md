# OpenSwarm-scenarios

## Start the Scenarios

(Optional) Reset the demo repository (clean up old data from former demo starts and prune the docker environment):
```sh
python ./tools/reset_for_demo.py
```

Zip the BSX:
```sh
python ./tools/zero_bsx_zip.py --story_label="OpenSwarm-Scenarios"
```

Start BIFROST ZERO.
```sh
docker-compose -f ./docker/docker-compose-scenarios.yml --env-file ./env/docker.env pull
docker-compose -f ./docker/docker-compose-scenarios.yml --env-file ./env/docker.env up -d
```
and open http://127.0.0.1:9091/ 

## Save your work

Add the changes to this repo via
```sh
python ./tools/zero_bsx_get.py --story_label="OpenSwarm-Scenarios" --operating_system="windows"
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

## OpenSwarm github Repository
Here some commands which where used to mirror the code.siemens.com repository to the openswarm github repository:
```sh
git remote add openswarmgithub https://github.com/openswarm-eu/bifrost-openswarm-scenarios.git
git push openswarmgithub main
```

## Adding Images

BIFROST core can host your own images (to be integrated in panel cards or notifications). For this the [`./images`](./images/) folder is mapped to the `./custom/` subfolder of the public BIFROST folder. This is done via the [`docker-compose.yml`](./docker/docker-compose-scenarios.yml) file:

```yml
services:
    [...]
    bifrost-core:
        [...]
        volumes:
            - ../images/:/opt/bifrost/server/build/public/custom/
            [...]
```

You can use than a URL like http://127.0.0.1:9091/custom/[`your-image-name`] to integrate the image in present panel cards or notifications

Current available images:
- GridFailure.gif (http://127.0.0.1:9091/custom/GridFailure.gif)