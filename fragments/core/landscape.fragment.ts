import { TFragment } from 'bifrost-zero-common'

const landscapeFragment: TFragment = {
    type: 'DIRECTORY-FRAGMENT',
    name: 'base',
    structures: {
        'RESIDENTIAL-SINGLE': {
            domain: 'landscape',
            memberOf: ['buildings'],
            placeOn: ['canvas'],
            name: 'Residential building (small)',
            description: 'A single household',
            size: 4,
            replace: false,
            defaultPairing: ['POWERGRID-CONNECTOR'],
            requiredPairing: [],
            forbiddenPairing: [],
            dynamics: [],
            flavors: [
                '13_SBC_residentialsingle'
            ],
            renderData: {
                flavorNames: [
                    'Small house'
                ],
                file: 'buildings/',
                image: {
                    base: 'objects/inactive/buildings/',
                    hover: 'objects/active/buildings/',
                    active: 'objects/active/buildings/'
                },
                rotationY: 0.75,
                scale: 'default',
                hideInPanel: false,
                category: 'RESIDENTIAL',
                sorting: 100,
                nightmode: true,
                showPlaceholder: true,
                geoObject: true,
                widgetPosition: {
                    '13_SBC_residentialsingle': [0, 1.1, 0]
                },
                decorators: {
                    'SOLAR-PANEL': {
                        link: 'buildings/47_SBC_solar-panel',
                        flavors: {
                            '13_SBC_residentialsingle': {
                                link: 'buildings/65_SBC_flat-solar-panel',
                                position: [-0.12, 0.835, -0.19],
                                rotationY: 0,
                                rotationX: 0.312,
                                scale: 1.3
                            }
                        }
                    },
                    'CHARGING-POLE': {
                        link: 'buildings/63_SBC_ev-ground-charger',
                        flavors: {
                            '13_SBC_residentialsingle': {
                                position: [0.7, 0, -0.45],
                                rotationY: 1
                            }
                        }
                    }
                }
            }
        },
        'CONTROL-CENTER': {
            domain: 'landscape',
            memberOf: ['buildings'],
            placeOn: ['canvas'],
            name: 'Control Center',
            description: 'This is a control center',
            size: 4,
            replace: false,
            defaultPairing: ['POWERGRID-CONNECTOR'],
            requiredPairing: [],
            forbiddenPairing: [],
            dynamics: [],
            flavors: [
                '118_SBC_control-center',
            ],
            renderData: {
                flavorNames: [
                    'Control Center',
                ],
                file: 'buildings/',
                image: {
                    base: 'objects/inactive/buildings/',
                    hover: 'objects/active/buildings/',
                    active: 'objects/active/buildings/'
                },
                rotationY: 0.75,
                scale: 'default',
                hideInPanel: false,
                category: 'COMMERCIAL',
                sorting: 100,
                nightmode: false,
                showPlaceholder: true,
                geoObject: true,
                widgetPosition: {
                    '118_SBC_control-center': [0.2, 1, -0.3],
                },
                decorators: {
                }
            }
        },
        'RESIDENTIAL-MULTI-LARGE': {
            domain: 'landscape',
            memberOf: ['buildings'],
            placeOn: ['canvas'],
            name: 'Residential building (large)',
            description: 'Large multi-household',
            size: 12,
            replace: false,
            defaultPairing: ['POWERGRID-CONNECTOR'],
            requiredPairing: [],
            forbiddenPairing: [],
            dynamics: [],
            flavors: ['55_SBC_council-housing'],
            renderData: {
                flavorNames: [
                    'Huge house'
                ],
                file: 'buildings/',
                image: {
                    base: 'objects/inactive/buildings/',
                    hover: 'objects/active/buildings/',
                    active: 'objects/active/buildings/'
                },
                rotationY: 0.75,
                scale: 'default',
                hideInPanel: false,
                category: 'RESIDENTIAL',
                sorting: 300,
                nightmode: true,
                showPlaceholder: true,
                geoObject: true,
                widgetPosition: {
                    '55_SBC_council-housing': [1.2, 2.1, 0]
                },
                decorators: {
                    'CHARGING-POLE': {
                        link: 'buildings/63_SBC_ev-ground-charger',
                        flavors: {
                            '55_SBC_council-housing': {
                                position: [2.75, 0.04, 0],
                                rotationY: 0
                            }
                        }
                    },
                    'SOLAR-PANEL': {
                        link: 'buildings/66_SBC_solar-panel_council_housing',
                        flavors: {
                            '55_SBC_council-housing': {
                                position: [0, 0, 0],
                                rotationY: 0.75
                            }
                        }
                    }
                }
            }
        },
        'FOREST': {
            domain: 'landscape',
            memberOf: ['nature'],
            placeOn: ['canvas'],
            name: 'Forest',
            description: '',
            size: 1,
            replace: true,
            defaultPairing: [],
            requiredPairing: [],
            forbiddenPairing: [],
            dynamics: [],
            flavors: ['20_SBC_forest'],
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
                category: 'LANDSCAPE',
                sorting: 101,
                drawable: true,
                reselectAfterPlace: true
            }
        },
        'BILLBOARD': {
            domain: 'landscape',
            memberOf: ['buildings', 'communal'],
            placeOn: ['canvas'],
            name: 'Billboard',
            description: 'Animated billboard',
            size: 4,
            replace: false,
            defaultPairing: [],
            requiredPairing: [],
            forbiddenPairing: [],
            dynamics: [],
            flavors: ['40_SBC_billboard'],
            renderData: {
                file: 'buildings/',
                logo: '40_SBC_billboard_text',
                image: {
                    base: 'objects/inactive/buildings/',
                    hover: 'objects/active/buildings/',
                    active: 'objects/active/buildings/'
                },
                rotationY: 0.75,
                scale: 'default',
                hideInPanel: false,
                category: 'LANDSCAPE',
                sorting: 301,
                nightmode: true
            }
        },
        'ROAD': {
            domain: 'landscape',
            memberOf: ['traffic', 'transit'],
            placeOn: ['canvas'],
            name: 'Road',
            description: '',
            size: 1,
            replace: true,
            defaultPairing: [],
            requiredPairing: [],
            forbiddenPairing: [],
            dynamics: [],
            flavors: ['16_SBC_road'],
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
                category: 'ROAD',
                sorting: 101,
                drawable: true,
                autoRotateDrawable: true,
                reselectAfterPlace: true
            }
        },
        'ROAD-CURVE': {
            domain: 'landscape',
            memberOf: ['traffic', 'transit'],
            placeOn: ['canvas'],
            name: 'Road curve',
            description: '',
            size: 1,
            replace: true,
            defaultPairing: [],
            requiredPairing: [],
            forbiddenPairing: [],
            dynamics: [],
            flavors: ['17_SBC_road_curve'],
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
                category: 'ROAD',
                sorting: 102,
                reselectAfterPlace: true
            }
        },
        'ROAD-CROSSING-T': {
            domain: 'landscape',
            memberOf: ['traffic', 'transit'],
            placeOn: ['canvas'],
            name: 'Road t-crossing',
            description: '',
            size: 1,
            replace: true,
            defaultPairing: [],
            requiredPairing: [],
            forbiddenPairing: [],
            dynamics: [],
            flavors: ['18_SBC_road_crossing_t'],
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
                category: 'ROAD',
                sorting: 103,
                reselectAfterPlace: true
            }
        },
        'ROAD-CROSSING-4': {
            domain: 'landscape',
            memberOf: ['traffic', 'transit'],
            placeOn: ['canvas'],
            name: 'Road x-crossing',
            description: '',
            size: 1,
            replace: true,
            defaultPairing: [],
            requiredPairing: [],
            forbiddenPairing: [],
            dynamics: [],
            flavors: ['19_SBC_road_crossing_4'],
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
                category: 'ROAD',
                sorting: 104,
                reselectAfterPlace: true
            }
        },
    },
    dynamics: {},
    mappings: {}
}

export default landscapeFragment
