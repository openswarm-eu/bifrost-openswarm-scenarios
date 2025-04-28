import { TFragment } from "bifrost-zero-common";

const thermogridFragment: TFragment = {
    type: 'DIRECTORY-FRAGMENT',
    name: 'thermogrid',
    structures: {
        'THERMAL-NODE': {
            domain: 'thermogrid',
            memberOf: ['nodes'],
            placeOn: ['canvas'],
            name: 'Thermal node',
            description: 'A basic thermogrid node',
            size: 1,
            replace: false,
            defaultPairing: [],
            requiredPairing: [],
            forbiddenPairing: [],
            dynamics: [],
            flavors: [],
            renderData: {}
        },
        'HEATING-PIPE': {
            domain: 'thermogrid',
            memberOf: ['connections'],
            placeOn: ['canvas'],
            name: 'Heating pipe',
            description: 'A district heating pipe',
            size: 1,
            replace: true,
            defaultPairing: [],
            requiredPairing: [],
            forbiddenPairing: [],
            dynamics: [],
            flavors: [],
            renderData: {
                file: '',
                image: {
                    base: 'objects/inactive/buildings/',
                    hover: 'objects/active/buildings/',
                    active: 'objects/active/buildings/'
                },
                rotationY: 0,
                scale: 'default',
                hideInPanel: false,
                category: 'THERMAL',
                sorting: 1,
                sounds: {
                    build: 'BUILD_POWERLINE'
                },
                reselectAfterPlace: true
            }
        },
        'COOLING-PIPE': {
            domain: 'thermogrid',
            memberOf: ['connections'],
            placeOn: ['canvas'],
            name: 'Cooling pipe',
            description: 'A district cooling pipe',
            size: 1,
            replace: true,
            defaultPairing: [],
            requiredPairing: [],
            forbiddenPairing: [],
            dynamics: [],
            flavors: [],
            renderData: {
                file: '',
                image: {
                    base: 'objects/inactive/buildings/',
                    hover: 'objects/active/buildings/',
                    active: 'objects/active/buildings/'
                },
                rotationY: 0,
                scale: 'default',
                hideInPanel: false,
                category: 'THERMAL',
                sorting: 2,
                sounds: {
                    build: 'BUILD_POWERLINE'
                },
                reselectAfterPlace: true
            }
        },
        'THERMOGRID-CONNECTOR': {
            domain: 'thermogrid',
            memberOf: ['sources', 'sinks', 'connectors'],
            placeOn: ['buildings'],
            name: 'Thermogrid connector',
            description: 'A basic element to establish connection to the heating and cooling network',
            size: 1,
            replace: false,
            defaultPairing: [],
            requiredPairing: [],
            forbiddenPairing: [],
            dynamics: [],
            flavors: ['110_SBC_thermal-grid-connector'],
            renderData: {
                file: 'buildings/',
                image: {
                    base: 'objects/inactive/buildings/',
                    hover: 'objects/active/buildings/',
                    active: 'objects/active/buildings/'
                },
                scale: 'default',
                rotationY: 0.75,
                category: 'THERMAL',
                sorting: 201,
                nightmode: false,
                emissiveOnConnection: true
            }
        },
    },
    dynamics: {},
    mappings: {}
}

export default thermogridFragment
