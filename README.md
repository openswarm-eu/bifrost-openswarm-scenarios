# OpenSwarm-scenarios

## Start the Scenarios

**Step 0:** (Optional) Reset the demo repository (clean up old data from former demo starts and prune the docker environment):
```sh
python ./tools/reset_for_demo.py
```

**Step 1:** zip the BSX for the demos (only the ones you need):
```sh
python ./tools/zero_bsx_zip.py --story_label="OpenSwarm-Scenarios"
python ./tools/zero_bsx_zip.py --story_label="Simple-Test"
python ./tools/zero_bsx_zip.py --story_label="Simple-Test-Load"
```

**Step 1a:** (Optional) Get sure, you have pulled / built the latest versions of the openswarm energy community controller docker images
* cr.siemens.com/openswarm/energy-community-controller/charger 
* cr.siemens.com/openswarm/energy-community-controller/pv
* cr.siemens.com/openswarm/energy-community-controller/sensor
Use
```sh
docker pull cr.siemens.com/openswarm/energy-community-controller/charger
docker pull cr.siemens.com/openswarm/energy-community-controller/pv
docker pull cr.siemens.com/openswarm/energy-community-controller/sensor
```
to pull them from cr.siemens.com.

**Step 2:** Start BIFROST ZERO.
```sh
docker-compose -f ./docker/docker-compose-scenarios.yml --env-file ./env/docker.env pull
docker-compose -f ./docker/docker-compose-scenarios.yml --env-file ./env/docker.env up -d
```
and open http://127.0.0.1:9091/ 

## Save your work

Add the changes to this repo via
```sh
python ./tools/zero_bsx_get.py --story_label="OpenSwarm-Scenarios" --operating_system="windows"
python ./tools/zero_bsx_get.py --story_label="Simple-Test" --operating_system="windows"
python ./tools/zero_bsx_get.py --story_label="Simple-Test-Load" --operating_system="windows"
```

After you are finished, shut down BIFROST with
```sh
docker-compose -f ./docker/docker-compose-scenarios.yml --env-file ./env/docker.env down
```

## How to Set Up a Scenario

This section explains how to build and configure the individual components of the OpenSwarm PoC 1 Use Case Demo if a demo story is being built from scratch. The focus is on enabling the system to work correctly. The configuration of the simulation itself is up to the user. Some of the following information can be found in the documentation of the respective BIFROST simulation modules.

### Grid-Sensor Placement and Correct Allocation

A grid sensor must be connected to a grid node (NODE), which in turn is connected with only two cables. This ensures that the power measurement works correctly, as the sensor randomly selects one of the cables. To do this, it is advisable to insert an ‘intermediate node’ when pulling the cables. Here is an example in which four feeders are to be connected to a transformer:

![GridSensorPlacement_01](./images/GridSensorPlacement_01.JPG)

To do this, draw a cable and double-click on an empty field to actively set a grid node:

![GridSensorPlacement_03](./images/GridSensorPlacement_03.JPG)

In our example, this would result in the following scheme:

![GridSensorPlacement_04](./images/GridSensorPlacement_04.JPG)

Now the individual feeders can be connected to this grid node:

![GridSensorPlacement_06](./images/GridSensorPlacement_06.JPG)

Up next is to add the ‘Grid Sensor’ component to the node. To do this, select it from the Build menu and place it on the previously created ‘intermediate nodes’ in the power grid layer:

![GridSensorPlacement_09](./images/GridSensorPlacement_09.JPG)

BIFROST helps by displaying the nodes in the network where a sensor can be placed (the area around the mouse pointer would otherwise be red if no node is available).

![GridSensorPlacement_11](./images/GridSensorPlacement_11.JPG)

For clarity, it is recommended to store the sensor name as a widget in the BIFROST UI so that it is clear where a sensor is installed. This also makes it easier to configure the remaining components. To do this, simply select the respective grid node and drag the dynamic card ‘Grid Sensor Name’ onto the canvas with the mouse to anchor a widget:

![GridSensorPlacement_12](./images/GridSensorPlacement_12.gif)

The widget now also makes it easier to define sensor names:

![GridSensorPlacement_13](./images/GridSensorPlacement_13.JPG)

Here, you should ensure that each sensor is given a unique name from the list! In our example, this would look like this:

![GridSensorPlacement_14](./images/GridSensorPlacement_14.JPG)

Now the power grid connectors must be assigned to the respective sensors. To do this, enter the name of the sensor for the respective feeder in which the power grid connector is located in the dynamic ‘Grid Sensor Assignment’. This must be done for all power grid connectors.

![GridSensorConfiguration_01](./images/GridSensorConfiguration_02.JPG)

Sensors can also be cascaded. Grid sensors also have the dynamic ‘Grid Sensor Assignment’ for this purpose. In the example below, sensor S5 would therefore have to be assigned the value “S1” as ‘Grid Sensor Assignment’ because sensor S5 is located ‘behind’ sensor S1 in the network. Sensors that measure at the beginning of the feeders retain the value ‘Unassigned’ for dynamic grid sensor assignment.

![GridSensorConfiguration_01](./images/GridSensorConfiguration_03.JPG)

### Grid-Sensor Measurement and Limit Configuration

Since the sensor randomly selects a cable for power measurement and the direction of the cable (in relation to the load flow, i.e. whether the cable was pulled away from or towards the node when it was created) is not known, it is possible to change the measurement direction of the load flow.
 
The dynamic ‘Grid Sensor Flow Direction’ is available for this purpose, which can take the values “UP” and ‘DOWN’. It is therefore advisable to carry out a test simulation and compare the expected load flow with the measured values. For example, if only load is installed in one feeder, the power measurement of the sensor should be positive. If this is not the case (values are negative), adjust the measurement direction with the dynamic ‘Grid Sensor Flow Direction’.

A power limit can also be set for each grid sensor via the dynamic ‘Grid Sensor Power Limit’. This limit corresponds, for example, to the maximum power that the cable can handle. The community controller then ensures that this limit is not exceeded by community operation.

### Energy-Communities and their Components

In der In the energy community, houses with PV systems, houses with e-car charging poles, solar farms and e-car charging stations can be included as components. Only one of these components should be installed per power grid connector. 
Assignment to an energy community is done with the dynamic ‘Energy Community’. Here, it is recommended to anchor this as a widget on the canvas so that the assignment can be changed dynamically during the simulation.

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
