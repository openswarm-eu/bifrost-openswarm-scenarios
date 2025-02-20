import { TFragment } from 'bifrost-zero-common'

const powergridFragment: TFragment = {
    type: 'DIRECTORY-FRAGMENT',
    name: 'powergrid',
    structures: {
        'POWERGRID-CONNECTOR': {
            domain: 'powergrid',
            memberOf: ['electrical', 'connectors'],
            placeOn: ['buildings', 'generators'],
            name: 'Powergrid Connector',
            description: 'A connection point to the powergrid',
            size: 1,
            replace: false,
            defaultPairing: [],
            requiredPairing: [],
            forbiddenPairing: [],
            dynamics: [],
            flavors: ['71_SBC_house-connector'],
            renderData: {
                file: 'buildings',
                image: {
                    base: 'objects/inactive/buildings/',
                    hover: 'objects/active/buildings/',
                    active: 'objects/active/buildings/'
                },
                scale: 'default',
                rotationY: 0.75,
                category: 'ELECTRICAL',
                sorting: 501,
                nightmode: false,
                emissiveOnConnection: true
            }
        },
        'POWERGRID-NODE': {
            domain: 'powergrid',
            memberOf: ['electrical', 'nodes'],
            placeOn: ['canvas'],
            name: 'Grid Node',
            description: 'A floating node in the powergrid',
            size: 1,
            replace: false,
            defaultPairing: [],
            requiredPairing: [],
            forbiddenPairing: [],
            dynamics: [],
            flavors: [],
            renderData: {
                file: 'buildings/',
                image: {
                    base: 'objects/inactive/buildings/',
                    hover: 'objects/active/buildings/',
                    active: 'objects/active/buildings/'
                },
                rotationY: 0,
                scale: 'default',
                hideInPanel: true,
                category: 'ELECTRICAL'
            }
        },
        'CABLE-UNDERGROUND-SD': {
            domain: 'powergrid',
            memberOf: ['electrical', 'connections'],
            placeOn: ['canvas'],
            name: 'Underground Cable',
            description: 'Underground cable',
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
                category: 'ELECTRICAL',
                sorting: 1,
                sounds: {
                    build: 'BUILD_POWERLINE'
                },
                reselectAfterPlace: true
            }
        },
        'LV-TRANSFORMER': {
            domain: 'powergrid',
            memberOf: ['electrical', 'sources', 'connectors'],
            placeOn: ['TRAFO-BUILDING'],
            name: 'Low Voltage Transformer',
            description: 'Low voltage transformer',
            size: 1,
            replace: false,
            defaultPairing: [],
            requiredPairing: [],
            forbiddenPairing: [],
            dynamics: [],
            flavors: ['71_SBC_house-connector'],
            renderData: {
                file: 'buildings/',
                image: {
                    base: 'objects/inactive/buildings/',
                    hover: 'objects/active/buildings/',
                    active: 'objects/active/buildings/'
                },
                hideInPanel: true,
                nightmode: false,
                emissiveOnConnection: true,
                category: 'ELEMENTS'
            }
        },
        'TRAFO-BUILDING': {
            domain: 'landscape',
            memberOf: ['buildings', 'electrical', 'generators'],
            placeOn: ['canvas'],
            name: 'Transformer Building (LV)',
            description: 'The transformer building',
            size: 1,
            replace: false,
            defaultPairing: [],
            requiredPairing: ['LV-TRANSFORMER'],
            forbiddenPairing: ['POWERGRID-CONNECTOR'],
            dynamics: [],
            flavors: ['25_SBC_transformer'],
            renderData: {
                file: 'buildings/',
                logo: '25_SBC_transformer_text',
                image: {
                    base: 'objects/inactive/buildings/',
                    hover: 'objects/active/buildings/',
                    active: 'objects/active/buildings/'
                },
                rotationY: 0,
                scale: 'default',
                hideInPanel: false,
                category: 'ELECTRICAL',
                sorting: 100,
                nightmode: true,
                geoObject: true,
                widgetPosition: {
                    '25_SBC_transformer': [0, 1.3, 0]
                },
                showPlaceholder: true
            }
        },
        POWERSWITCH: {
            domain: 'powergrid',
            memberOf: ['electrical', 'taps'],
            placeOn: ['canvas'],
            name: 'Power Switch',
            description: 'Power switch',
            size: 1,
            replace: false,
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
                category: 'ELECTRICAL',
                sorting: 401
            }
        },
        FUSE: {
            domain: 'powergrid',
            memberOf: ['electrical', 'taps'],
            placeOn: ['canvas'],
            name: 'Fuse',
            description: 'A three phase fuse',
            size: 1,
            replace: false,
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
                category: 'ELECTRICAL',
                sorting: 402
            }
        },
        'BATTERY-STORAGE-SMALL': {
            domain: 'powergrid',
            memberOf: ['electrical', 'sources'],
            placeOn: ['COMMERCIAL-BATTERY-SMALL'],
            name: 'Battery Storage (Small)',
            description: 'Battery storage element',
            size: 4,
            replace: false,
            defaultPairing: [],
            requiredPairing: [],
            forbiddenPairing: [],
            dynamics: [],
            flavors: ['72_SBC_battery-storage'],
            renderData: {
                file: 'buildings/',
                image: {
                    base: 'objects/inactive/buildings/',
                    hover: 'objects/active/buildings/',
                    active: 'objects/active/buildings/'
                },
                rotationY: 0.75,
                scale: 'default',
                hideInPanel: true,
                nightmode: false,
                emissiveOnConnection: true,
                category: 'ELECTRICAL'
            }
        },
        'BATTERY-STORAGE-LARGE': {
            domain: 'powergrid',
            memberOf: ['electrical', 'sources'],
            placeOn: ['COMMERCIAL-BATTERY-LARGE'],
            name: 'Battery Storage (Large)',
            description: 'Battery storage element',
            size: 8,
            replace: false,
            defaultPairing: [],
            requiredPairing: [],
            forbiddenPairing: [],
            dynamics: [],
            flavors: ['72_SBC_battery-storage'],
            renderData: {
                file: 'buildings/',
                image: {
                    base: 'objects/inactive/buildings/',
                    hover: 'objects/active/buildings/',
                    active: 'objects/active/buildings/'
                },
                rotationY: 0.75,
                scale: 'default',
                hideInPanel: true,
                nightmode: false,
                emissiveOnConnection: true,
                category: 'ELECTRICAL'
            }
        },
        'COMMERCIAL-BATTERY-SMALL': {
            domain: 'landscape',
            memberOf: ['buildings', 'electrical', 'sources'],
            placeOn: ['canvas'],
            name: 'Small Battery',
            description: 'Small battery storage facility',
            size: 4,
            replace: false,
            defaultPairing: [],
            requiredPairing: ['BATTERY-STORAGE-SMALL'],
            forbiddenPairing: ['POWERGRID-CONNECTOR'],
            dynamics: [],
            flavors: ['41_SBC_commercial-storage-small'],
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
                category: 'ELECTRICAL',
                sorting: 302,
                nightmode: true,
                geoObject: true,
                widgetPosition: {
                    '41_SBC_commercial-storage-small': [0.5, 0.5, -0.5]
                },
                showPlaceholder: true
            },
            tags: ['base']
        },
        'COMMERCIAL-BATTERY-LARGE': {
            domain: 'landscape',
            memberOf: ['buildings', 'electrical', 'sources'],
            placeOn: ['canvas'],
            name: 'Large Battery',
            description: 'Large battery storage facility',
            size: 8,
            replace: false,
            defaultPairing: [],
            requiredPairing: ['BATTERY-STORAGE-LARGE'],
            forbiddenPairing: ['POWERGRID-CONNECTOR'],
            dynamics: [],
            flavors: ['42_SBC_commercial-storage-large'],
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
                category: 'ELECTRICAL',
                sorting: 303,
                nightmode: true,
                geoObject: true,
                widgetPosition: {
                    '42_SBC_commercial-storage-large': [-1.5, 0.8, 0.4]
                },
                showPlaceholder: true
            }
        },
        'BIOMASS-POWER-PLANT': {
            domain: 'landscape',
            memberOf: ['buildings', 'generators'],
            placeOn: ['canvas'],
            name: 'Biomass Power Plant',
            description: 'A powerplant which uses biomass',
            size: 4,
            replace: false,
            defaultPairing: [],
            requiredPairing: [],
            forbiddenPairing: [],
            dynamics: [],
            flavors: ['83_SBC_powerplant_biomass'],
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
                category: 'ELECTRICAL',
                sorting: 201,
                nightmode: true,
                showPlaceholder: true,
                geoObject: true,
                widgetPosition: {
                    '83_SBC_powerplant_biomass': [-0.2, 1.75, -0.2]
                },
                decorators: {
                    'SOLAR-PANEL': {
                        link: 'buildings/65_SBC_flat-solar-panel',
                        flavors: {
                            '83_SBC_powerplant_biomass': {
                                position: [-0.57, 0.3, -0.1],
                                rotationY: 0.25,
                                repeatY: 3
                            }
                        }
                    },
                    'CHARGING-POLE': {
                        link: 'buildings/63_SBC_ev-ground-charger',
                        flavors: {
                            '83_SBC_powerplant_biomass': {
                                position: [0.62, 0, 0.3],
                                rotationY: 0.25
                            }
                        }
                    }
                }
            },
            tags: ['base', 'lvgrid', 'mvgrid']
        },
        'BIOGAS-POWER-PLANT': {
            domain: 'landscape',
            memberOf: ['buildings', 'generators'],
            placeOn: ['canvas'],
            name: 'Biogas Power Plant',
            description: 'A powerplant which uses biogas',
            size: 4,
            replace: false,
            defaultPairing: [],
            requiredPairing: [],
            forbiddenPairing: [],
            dynamics: [],
            flavors: ['84_SBC_powerplant_biogas'],
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
                category: 'ELECTRICAL',
                sorting: 202,
                nightmode: true,
                showPlaceholder: true,
                geoObject: true,
                widgetPosition: {
                    '84_SBC_powerplant_biogas': [-0.3, 1.1, -0.3]
                },
                decorators: {
                    'SOLAR-PANEL': {
                        link: 'buildings/47_SBC_solar-panel',
                        flavors: {
                            '84_SBC_powerplant_biogas': {
                                position: [-0.4, 0.68, 0]
                            }
                        }
                    },
                    'CHARGING-POLE': {
                        link: 'buildings/63_SBC_ev-ground-charger',
                        flavors: {
                            '84_SBC_powerplant_biogas': {
                                position: [0.3, 0, 0.62]
                            }
                        }
                    }
                }
            },
            tags: ['base', 'lvgrid', 'mvgrid']
        },
        'HYDRO-POWER-PLANT': {
            domain: 'landscape',
            memberOf: ['buildings', 'generators'],
            placeOn: ['canvas'],
            name: 'Hydro Power Plant',
            description: 'A hydro power plant',
            size: 8,
            replace: false,
            defaultPairing: [],
            requiredPairing: [],
            forbiddenPairing: [],
            dynamics: [],
            flavors: ['87_SBC_hydropower-plant'],
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
                category: 'ELECTRICAL',
                sorting: 203,
                nightmode: true,
                showPlaceholder: true,
                geoObject: true,
                widgetPosition: {
                    '87_SBC_hydropower-plant': [0, 1.1, 0]
                },
                decorators: {
                    'SOLAR-PANEL': {
                        link: 'buildings/47_SBC_solar-panel',
                        flavors: {
                            '87_SBC_hydropower-plant': {
                                position: [-0.7, 0.035, 0.7],
                                rotationY: 0,
                                rotationX: 0,
                                scale: 1,
                                repeatX: 3
                            }
                        }
                    },
                    'CHARGING-POLE': {
                        link: 'buildings/63_SBC_ev-ground-charger',
                        flavors: {
                            '87_SBC_hydropower-plant': {
                                position: [0.5, 0, 0.8],
                                rotationY: 0.25
                            }
                        }
                    }
                }
            },
            tags: ['base', 'lvgrid', 'mvgrid']
        },
        'SOLAR-FARM': {
            domain: 'landscape',
            memberOf: ['buildings', 'generators'],
            placeOn: ['canvas'],
            name: 'Solar Farm',
            description: '',
            size: 4,
            replace: false,
            defaultPairing: [],
            requiredPairing: [],
            forbiddenPairing: [],
            dynamics: [],
            flavors: ['68_SBC_powergrid'],
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
                category: 'ELECTRICAL',
                sorting: 204,
                nightmode: true,
                geoObject: true,
                widgetPosition: {
                    '68_SBC_powergrid': [0, 0.5, 0.3]
                },
                showPlaceholder: true
            },
            tags: ['base', 'lvgrid', 'mvgrid']
        },
        'WIND-TURBINE': {
            domain: 'landscape',
            memberOf: ['buildings', 'generators'],
            placeOn: ['canvas'],
            name: 'Wind Turbine',
            description: 'A ground based wind turbine',
            size: 4,
            replace: false,
            defaultPairing: [],
            requiredPairing: [],
            forbiddenPairing: [],
            dynamics: [],
            flavors: ['85_SBC_wind_turbin'],
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
                category: 'ELECTRICAL',
                sorting: 205,
                nightmode: true,
                showPlaceholder: true,
                geoObject: true,
                widgetPosition: {
                    '85_SBC_wind_turbin': [0, 1.8, 0]
                },
                decorators: {
                    'SOLAR-PANEL': {
                        link: 'buildings/47_SBC_solar-panel',
                        flavors: {
                            '85_SBC_wind_turbin': {
                                position: [0.5, 0.11, 0.5]
                            }
                        }
                    }
                }
            },
            tags: ['base', 'lvgrid', 'mvgrid']
        },
        'BACKUP-POWER-SUPPLY': {
            domain: 'landscape',
            memberOf: ['buildings', 'generators'],
            placeOn: ['canvas'],
            name: 'Backup Power Supply',
            description: 'A backup power supply',
            size: 1,
            replace: false,
            defaultPairing: [],
            requiredPairing: [],
            forbiddenPairing: [],
            dynamics: [],
            flavors: ['88_SBC_backup-power-supply'],
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
                category: 'ELECTRICAL',
                sorting: 206,
                nightmode: true,
                showPlaceholder: true,
                geoObject: true,
                widgetPosition: {
                    '88_SBC_backup-power-supply': [-0.35, 0.48, -0.35]
                }
            },
            tags: ['base', 'lvgrid', 'mvgrid']
        },
        'EV-STATION': {
            domain: 'landscape',
            memberOf: ['buildings', 'electrical', 'sources'],
            placeOn: ['canvas'],
            name: 'E-Car Charging Station',
            description: 'E-charging station',
            size: 4,
            replace: false,
            defaultPairing: [],
            requiredPairing: ['POWERGRID-CONNECTOR'],
            forbiddenPairing: ['MV-POWERGRID-CONNECTOR'],
            dynamics: [],
            flavors: ['38_SBC_ev-station'],
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
                category: 'ELECTRICAL',
                sorting: 301,
                nightmode: true,
                showPlaceholder: true,
                geoObject: true,
                widgetPosition: {
                    '38_SBC_ev-station': [-0.7, 0.5, 0]
                },
                decorators: {
                    'SOLAR-PANEL': {
                        link: 'buildings/47_SBC_solar-panel',
                        flavors: {
                            '38_SBC_ev-station': {
                                position: [-0.8, 0.027, 0.9],
                                repeatX: 4
                            }
                        }
                    }
                }
            }
        },
        'SOLAR-PANEL': {
            domain: 'powergrid',
            memberOf: ['electrical', 'sources'],
            placeOn: ['POWERGRID-CONNECTOR'],
            name: 'Solar Panel',
            description: 'Photovoltaic installation',
            size: 1,
            replace: false,
            defaultPairing: [],
            requiredPairing: [],
            forbiddenPairing: [],
            dynamics: [],
            flavors: ['76_SBC_plugin'],
            renderData: {
                file: 'buildings/',
                image: {
                    base: 'objects/inactive/buildings/',
                    hover: 'objects/active/buildings/',
                    active: 'objects/active/buildings/'
                },
                rotationY: 0.75,
                hideObjectOnCanvas: true,
                scale: 'default',
                hideInPanel: false,
                nightmode: false,
                emissiveOnConnection: true,
                category: 'ELECTRICAL',
                sorting: 502
            }
        },
        'CHARGING-POLE': {
            domain: 'powergrid',
            memberOf: ['electrical'],
            placeOn: ['POWERGRID-CONNECTOR'],
            name: 'E-Car Charging Pole',
            description: 'E-car charging pole',
            size: 1,
            replace: false,
            defaultPairing: [],
            requiredPairing: [],
            forbiddenPairing: [],
            dynamics: [],
            flavors: ['76_SBC_plugin'],
            renderData: {
                file: 'buildings/',
                image: {
                    base: 'objects/inactive/buildings/',
                    hover: 'objects/active/buildings/',
                    active: 'objects/active/buildings/'
                },
                rotationY: 0.75,
                hideObjectOnCanvas: true,
                scale: 'default',
                hideInPanel: false,
                nightmode: false,
                emissiveOnConnection: true,
                category: 'ELECTRICAL',
                sorting: 503
            }
        },
        'HOUSEHOLD-BATTERY': {
            domain: 'powergrid',
            memberOf: ['electrical'],
            placeOn: ['POWERGRID-CONNECTOR'],
            name: 'Household Battery',
            description: 'Household battery',
            size: 1,
            replace: false,
            defaultPairing: [],
            requiredPairing: [],
            forbiddenPairing: [],
            dynamics: [],
            flavors: ['72_SBC_battery-storage'],
            renderData: {
                file: 'buildings/',
                image: {
                    base: 'objects/inactive/buildings/',
                    hover: 'objects/active/buildings/',
                    active: 'objects/active/buildings/'
                },
                rotationY: 0.75,
                hideObjectOnCanvas: true,
                scale: 'default',
                hideInPanel: false,
                nightmode: false,
                emissiveOnConnection: true,
                category: 'ELECTRICAL',
                sorting: 504
            }
        },
        'TAP-CHANGER': {
            domain: 'powergrid',
            memberOf: ['electrical'],
            placeOn: ['LV-TRANSFORMER'],
            name: 'Tap Changer',
            description: 'Tap changer',
            size: 1,
            replace: false,
            defaultPairing: [],
            requiredPairing: [],
            forbiddenPairing: [],
            dynamics: [],
            flavors: ['75_SBC_upgrade'],
            renderData: {
                file: 'buildings/',
                image: {
                    base: 'objects/inactive/buildings/',
                    hover: 'objects/active/buildings/',
                    active: 'objects/active/buildings/'
                },
                rotationY: 0.75,
                hideObjectOnCanvas: true,
                scale: 'default',
                hideInPanel: false,
                nightmode: false,
                emissiveOnConnection: true,
                category: 'ELECTRICAL',
                sorting: 505
            }
        }
    },
    dynamics: {},
    mappings: {}
}

export default powergridFragment
