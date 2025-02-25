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
        'HEATING-ACCUMULATOR': {
            domain: 'landscape',
            memberOf: ['buildings', 'thermal'],
            placeOn: ['canvas'],
            name: 'Heat Pump',
            description: 'A heating accumulator which stores warm and cold water',
            size: 4,
            replace: false,
            defaultPairing: [],
            requiredPairing: ['POWERGRID-CONNECTOR','THERMOGRID-CONNECTOR'],
            forbiddenPairing: [],
            dynamics: [],
            flavors: ['107_SBC_heating-accumulator'],
            renderData: {
                file: 'buildings/',
                image: {
                    base: 'objects/inactive/buildings/',
                    hover: 'objects/active/buildings/',
                    active: 'objects/active/buildings/'
                },
                rotationY: 0.75,
                scale: 'default',
                hideInPanel: false,
                nightmode: true,
                category: 'THERMAL',
                sorting: 200,
                geoObject: true,
                widgetPosition: {
                    '107_SBC_heating-accumulator': [-0.5, 1.4, -0.4]
                },
                decorators: {
                    'SOLAR-PANEL': {
                        link: 'buildings/65_SBC_flat-solar-panel',
                        flavors: {
                            '107_SBC_heating-accumulator': {
                                position: [-0.2, 0.36, 0.4],
                                rotationX: 0.19
                            }
                        }
                    },
                    'CHARGING-POLE': {
                        link: 'buildings/63_SBC_ev-ground-charger',
                        flavors: {
                            '107_SBC_heating-accumulator': {
                                position: [0.6, 0, -0.03],
                                rotationY: 0.25
                            }
                        }
                    }
                }
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
        // 'PRESSURE-VALVE': {
        //     domain: 'thermogrid',
        //     memberOf: ['taps'],
        //     placeOn: ['canvas'],
        //     name: 'Pressure valve',
        //     description: 'A district heating/cooling pressure valve',
        //     size: 1,
        //     replace: true,
        //     defaultPairing: [],
        //     requiredPairing: [],
        //     forbiddenPairing: [],
        //     dynamics: [],
        //     flavors: [],
        //     renderData: {
        //         file: '',
        //         image: {
        //             base: 'objects/inactive/buildings/',
        //             hover: 'objects/active/buildings/',
        //             active: 'objects/active/buildings/'
        //         },
        //         rotationY: 0,
        //         scale: 'default',
        //         hideInPanel: false,
        //         category: 'THERMAL',
        //         sorting: 202
        //     }
        // },
        // 'HEAT-EXCHANGER': {
        //     domain: 'thermogrid',
        //     memberOf: [],
        //     placeOn: ['THERMOGRID-CONNECTOR'],
        //     name: 'Heat exchanger',
        //     description: 'Upgrade for thermogrid connector',
        //     size: 1,
        //     replace: false,
        //     defaultPairing: [],
        //     requiredPairing: [],
        //     forbiddenPairing: [],
        //     dynamics: [],
        //     flavors: ['108_SBC_heat-exchanger'],
        //     renderData: {
        //         file: 'buildings/',
        //         image: {
        //             base: 'objects/inactive/buildings/',
        //             hover: 'objects/active/buildings/',
        //             active: 'objects/active/buildings/'
        //         },
        //         rotationY: 0.75,
        //         hideObjectOnCanvas: true,
        //         scale: 'default',
        //         hideInPanel: false,
        //         nightmode: false,
        //         category: 'THERMAL',
        //         sorting: 203
        //     }
        // },
        // PUMP: {
        //     domain: 'thermogrid',
        //     memberOf: [],
        //     placeOn: ['THERMOGRID-CONNECTOR'],
        //     name: 'Pump',
        //     description: 'A thermo pump',
        //     size: 1,
        //     replace: false,
        //     defaultPairing: [],
        //     requiredPairing: [],
        //     forbiddenPairing: [],
        //     dynamics: [],
        //     flavors: ['109_SBC_pump'],
        //     renderData: {
        //         file: 'buildings/',
        //         image: {
        //             base: 'objects/inactive/buildings/',
        //             hover: 'objects/active/buildings/',
        //             active: 'objects/active/buildings/'
        //         },
        //         rotationY: 0.75,
        //         hideObjectOnCanvas: true,
        //         scale: 'default',
        //         hideInPanel: false,
        //         nightmode: false,
        //         category: 'THERMAL',
        //         sorting: 204
        //     }
        // }
    },
    dynamics: {},
    mappings: {}
}

export default thermogridFragment
