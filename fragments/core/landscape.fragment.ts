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
                '10_SBC_residentialsingle',
                // '11_SBC_residentialsingle',
                // '12_SBC_residentialsingle',
                // '13_SBC_residentialsingle',
                // '14_SBC_residentialsingle',
                // '15_SBC_residentialsingle'
            ],
            renderData: {
                flavorNames: [
                    'Small house',
                    'House with garage',
                    'Multi-floor',
                    'House with pool',
                    'Tree house 2.0',
                    'Private house'
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
                    '10_SBC_residentialsingle': [0.2, 1, -0.3],
                    '11_SBC_residentialsingle': [0.2, 1.2, 0],
                    '12_SBC_residentialsingle': [0.2, 1.4, 0],
                    '13_SBC_residentialsingle': [0, 1.1, 0],
                    '14_SBC_residentialsingle': [-0.55, 1, 0],
                    '15_SBC_residentialsingle': [0, 1.35, 0.4]
                },
                decorators: {
                    'SOLAR-PANEL': {
                        link: 'buildings/47_SBC_solar-panel',
                        flavors: {
                            '10_SBC_residentialsingle': {
                                link: 'buildings/65_SBC_flat-solar-panel',
                                position: [0.04, 0.55, -0.4],
                                rotationY: 0,
                                rotationX: 0.2,
                                scale: 1.4
                            },
                            '11_SBC_residentialsingle': {
                                link: 'buildings/65_SBC_flat-solar-panel',
                                position: [0.25, 0.77, -0.28],
                                rotationX: 0.25,
                                rotationY: 0.04,
                                scale: 1.4
                            },
                            '12_SBC_residentialsingle': {
                                position: [-0.21, 0.71, 0],
                                rotationY: 0,
                                scale: 1.4
                            },
                            '13_SBC_residentialsingle': {
                                link: 'buildings/65_SBC_flat-solar-panel',
                                position: [-0.12, 0.835, -0.19],
                                rotationY: 0,
                                rotationX: 0.312,
                                scale: 1.3
                            },
                            '14_SBC_residentialsingle': {
                                position: [-0.24, 0.6, 0.6],
                                rotationY: 2.25,
                                repeatX: 2,
                                scale: 1.3
                            },
                            '15_SBC_residentialsingle': {
                                link: 'buildings/65_SBC_flat-solar-panel',
                                position: [-0.2, 0.72, -0.072],
                                rotationX: 0.18,
                                repeatY: 1,
                                scale: 1.4
                            }
                        }
                    },
                    'CHARGING-POLE': {
                        link: 'buildings/63_SBC_ev-ground-charger',
                        flavors: {
                            '10_SBC_residentialsingle': {
                                position: [0.2, 0, 0.62],
                                rotationY: 0
                            },
                            '11_SBC_residentialsingle': {
                                position: [0.5, 0, 0.62],
                                rotationY: 0
                            },
                            '12_SBC_residentialsingle': {
                                position: [-0.25, 0, 0.62],
                                rotationY: 0
                            },
                            '13_SBC_residentialsingle': {
                                position: [0.7, 0, 0.41],
                                rotationY: 0.5
                            },
                            '14_SBC_residentialsingle': {
                                position: [0.45, 0, 0.54],
                                rotationY: 0.25
                            },
                            '15_SBC_residentialsingle': {
                                position: [0.79, 0, 0.62],
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
        // 'RESIDENTIAL-MULTI-MEDIUM': {
        //     domain: 'landscape',
        //     memberOf: ['buildings'],
        //     placeOn: ['canvas'],
        //     name: 'Residential building (medium)',
        //     description: 'Medium-size multi-household',
        //     size: 8,
        //     replace: false,
        //     defaultPairing: ['POWERGRID-CONNECTOR'],
        //     requiredPairing: [],
        //     forbiddenPairing: [],
        //     dynamics: [],
        //     flavors: ['07_SBC_residentialmulti', '08_SBC_residentialmulti'],
        //     renderData: {
        //         flavorNames: ['Elevated residence', 'Settlement with footpath'],
        //         file: 'buildings/',
        //         image: {
        //             base: 'objects/inactive/buildings/',
        //             hover: 'objects/active/buildings/',
        //             active: 'objects/active/buildings/'
        //         },
        //         rotationY: 0.75,
        //         scale: 'default',
        //         hideInPanel: false,
        //         category: 'RESIDENTIAL',
        //         sorting: 200,
        //         nightmode: true,
        //         showPlaceholder: true,
        //         geoObject: true,
        //         widgetPosition: {
        //             '07_SBC_residentialmulti': [-0.4, 1.2, 0],
        //             '08_SBC_residentialmulti': [0, 1.1, -0.3]
        //         },
        //         decorators: {
        //             'SOLAR-PANEL': {
        //                 link: 'buildings/47_SBC_solar-panel',
        //                 flavors: {
        //                     '07_SBC_residentialmulti': {
        //                         position: [0, 0.8, -0.02],
        //                         rotationY: 0,
        //                         repeatX: 2,
        //                         scale: 1.4
        //                     },
        //                     '08_SBC_residentialmulti': {
        //                         position: [-1, 0.7, -0.25],
        //                         rotationY: 0,
        //                         repeatX: 1,
        //                         scale: 1.2
        //                     }
        //                 }
        //             },
        //             'CHARGING-POLE': {
        //                 link: 'buildings/63_SBC_ev-ground-charger',
        //                 flavors: {
        //                     '07_SBC_residentialmulti': {
        //                         position: [-1.63, 0, 0.4],
        //                         rotationY: 0.75
        //                     },
        //                     '08_SBC_residentialmulti': {
        //                         position: [-1.6, 0, 0.25],
        //                         rotationY: 0.75
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // },
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
                flavorNames: ['Huge house'],
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
        // 'COMMERCIAL-SINGLE': {
        //     domain: 'landscape',
        //     memberOf: ['buildings'],
        //     placeOn: ['canvas'],
        //     name: 'Small business',
        //     description: 'Small commercial building',
        //     size: 4,
        //     replace: false,
        //     defaultPairing: ['POWERGRID-CONNECTOR'],
        //     requiredPairing: [],
        //     forbiddenPairing: [],
        //     dynamics: [],
        //     flavors: [
        //         '02_SBC_commercialsingle',
        //         '03_SBC_commercialsingle',
        //         '04_SBC_commercialsingle',
        //         '05_SBC_commercialsingle',
        //         '06_SBC_commercialsingle',
        //         '09_SBC_commercialsingle'
        //     ],
        //     renderData: {
        //         flavorNames: [
        //             'Gas station',
        //             'Internet company',
        //             'Insurance firm',
        //             'Investment bank',
        //             'Biotech lab',
        //             'Web agency'
        //         ],
        //         file: 'buildings/',
        //         image: {
        //             base: 'objects/inactive/buildings/',
        //             hover: 'objects/active/buildings/',
        //             active: 'objects/active/buildings/'
        //         },
        //         rotationY: 0.75,
        //         scale: 'default',
        //         hideInPanel: false,
        //         category: 'COMMERCIAL',
        //         sorting: 101,
        //         nightmode: true,
        //         showPlaceholder: true,
        //         geoObject: true,
        //         widgetPosition: {
        //             '02_SBC_commercialsingle': [-0.4, 0.98, 0],
        //             '03_SBC_commercialsingle': [-0.3, 2.11, -0.4],
        //             '04_SBC_commercialsingle': [-0.19, 1.4, -0.4],
        //             '05_SBC_commercialsingle': [0, 2.4, 0],
        //             '06_SBC_commercialsingle': [-0.3, 0.85, 0],
        //             '09_SBC_commercialsingle': [-0.4, 1.5, 0]
        //         },
        //         decorators: {
        //             'SOLAR-PANEL': {
        //                 link: 'buildings/47_SBC_solar-panel',
        //                 flavors: {
        //                     '02_SBC_commercialsingle': {
        //                         position: [0, 0.54, -0.07],
        //                         rotationY: 0.25,
        //                         scale: 1.4
        //                     },
        //                     '03_SBC_commercialsingle': {
        //                         position: [0.75, 0.04, -0.1],
        //                         rotationY: 0.25,
        //                         repeatX: 1,
        //                         scale: 1.4
        //                     },
        //                     '04_SBC_commercialsingle': {
        //                         position: [0.13, 1, -0.34],
        //                         rotationY: 0.25,
        //                         scale: 1.4
        //                     },
        //                     '05_SBC_commercialsingle': {
        //                         link: 'buildings/65_SBC_flat-solar-panel',
        //                         repeatY: 5,
        //                         position: [0.16, 0.04, -0.09],
        //                         rotationY: -0.25,
        //                         scale: 1.4
        //                     },
        //                     '06_SBC_commercialsingle': {
        //                         position: [-0.47, 0.44, -0.2],
        //                         rotationY: 0.25,
        //                         repeatX: 1,
        //                         scale: 1.1
        //                     },
        //                     '09_SBC_commercialsingle': {
        //                         position: [0.1, 1.09, -0.2],
        //                         rotationY: 0.25,
        //                         scale: 1.4
        //                     }
        //                 }
        //             },
        //             'CHARGING-POLE': {
        //                 link: 'buildings/63_SBC_ev-ground-charger',
        //                 flavors: {
        //                     '02_SBC_commercialsingle': {
        //                         position: [-0.13, 0, 0.7],
        //                         rotationY: 0.25
        //                     },
        //                     '03_SBC_commercialsingle': {
        //                         position: [-0.75, 0, 0.6],
        //                         rotationY: 0
        //                     },
        //                     '04_SBC_commercialsingle': {
        //                         position: [-0.5, 0, 0.6],
        //                         rotationY: 0
        //                     },
        //                     '05_SBC_commercialsingle': {
        //                         position: [0.4, 0, 0.6],
        //                         rotationY: 0
        //                     },
        //                     '06_SBC_commercialsingle': {
        //                         position: [0.6, 0, -0.14],
        //                         rotationY: 0.25
        //                     },
        //                     '09_SBC_commercialsingle': {
        //                         position: [0.6, 0.0117, -0.14],
        //                         rotationY: 0.25
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // },
        // 'OFFICE-LARGE': {
        //     domain: 'landscape',
        //     memberOf: ['buildings'],
        //     placeOn: ['canvas'],
        //     name: 'Large office building',
        //     description: 'A office building based on "Siemens City"',
        //     size: 16,
        //     replace: false,
        //     defaultPairing: ['POWERGRID-CONNECTOR'],
        //     requiredPairing: [],
        //     forbiddenPairing: [],
        //     dynamics: [],
        //     flavors: ['78_SBC_commercial_office_building'],
        //     renderData: {
        //         file: 'buildings/',
        //         image: {
        //             base: 'objects/inactive/buildings/',
        //             hover: 'objects/active/buildings/',
        //             active: 'objects/active/buildings/'
        //         },
        //         rotationY: 0.75,
        //         scale: 'default',
        //         hideInPanel: false,
        //         category: 'COMMERCIAL',
        //         sorting: 102,
        //         nightmode: true,
        //         showPlaceholder: true,
        //         geoObject: true,
        //         widgetPosition: {
        //             '78_SBC_commercial_office_building': [-0.08, 2.26, 0.08]
        //         },
        //         decorators: {
        //             'SOLAR-PANEL': {
        //                 link: 'buildings/47_SBC_solar-panel',
        //                 flavors: {
        //                     '78_SBC_commercial_office_building': {
        //                         position: [0.188, 1.4, -0.59],
        //                         rotationY: 0.5
        //                     }
        //                 }
        //             },
        //             'CHARGING-POLE': {
        //                 link: 'buildings/63_SBC_ev-ground-charger',
        //                 flavors: {
        //                     '78_SBC_commercial_office_building': {
        //                         position: [-0.5, 0, 1.6],
        //                         repeatX: 1
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // },
        // 'COMMERCIAL-FACTORY': {
        //     domain: 'landscape',
        //     memberOf: ['buildings', 'industrial'],
        //     placeOn: ['canvas'],
        //     name: 'Large factory',
        //     description: 'Large commercial factory',
        //     size: 16,
        //     replace: false,
        //     defaultPairing: ['POWERGRID-CONNECTOR'],
        //     requiredPairing: [],
        //     forbiddenPairing: [],
        //     dynamics: [],
        //     flavors: ['01_SBC_commercialfactory', '32_SBC_commercialfactory'],
        //     renderData: {
        //         flavorNames: ['Tooling producer', 'Data center'],
        //         file: 'buildings/',
        //         image: {
        //             base: 'objects/inactive/buildings/',
        //             hover: 'objects/active/buildings/',
        //             active: 'objects/active/buildings/'
        //         },
        //         rotationY: 0.75,
        //         scale: 'default',
        //         hideInPanel: false,
        //         category: 'COMMERCIAL',
        //         sorting: 201,
        //         nightmode: true,
        //         showPlaceholder: true,
        //         geoObject: true,
        //         widgetPosition: {
        //             '01_SBC_commercialfactory': [0, 1, 0.4],
        //             '32_SBC_commercialfactory': [0, 1.2, -0.8]
        //         },
        //         decorators: {
        //             'SOLAR-PANEL': {
        //                 link: 'buildings/47_SBC_solar-panel',
        //                 flavors: {
        //                     '01_SBC_commercialfactory': {
        //                         link: 'buildings/65_SBC_flat-solar-panel',
        //                         position: [-1.31, 0.755, -0.01],
        //                         repeatX: 4,
        //                         repeatZ: 2,
        //                         repeatZGap: 0.58,
        //                         scale: 1.08,
        //                         rotationX: 0.5,
        //                         singleRotationX: -0.17
        //                     },
        //                     '32_SBC_commercialfactory': {
        //                         position: [-0.6, 0.78, -0.18],
        //                         repeatX: 1,
        //                         rotationY: 0.25,
        //                         scale: 1.4
        //                     }
        //                 }
        //             },
        //             'CHARGING-POLE': {
        //                 link: 'buildings/63_SBC_ev-ground-charger',
        //                 flavors: {
        //                     '01_SBC_commercialfactory': {
        //                         position: [-0.1, 0, 1.6],
        //                         rotationY: 0
        //                     },
        //                     '32_SBC_commercialfactory': {
        //                         position: [-1.7, 0, -1.6],
        //                         rotationY: 0.5
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // },
        // WAREHOUSE: {
        //     domain: 'landscape',
        //     memberOf: ['buildings'],
        //     placeOn: ['canvas'],
        //     name: 'Warehouse',
        //     description: 'A large warehouse with some trucks',
        //     size: 36,
        //     replace: false,
        //     defaultPairing: ['POWERGRID-CONNECTOR'],
        //     requiredPairing: [],
        //     forbiddenPairing: [],
        //     dynamics: [],
        //     flavors: ['82_SBC_warehouse-nr1', '93_SBC_warehouse-nr2'],
        //     renderData: {
        //         flavorNames: ['Warehouse C', 'Warehouse L'],
        //         file: 'buildings/',
        //         image: {
        //             base: 'objects/inactive/buildings/',
        //             hover: 'objects/active/buildings/',
        //             active: 'objects/active/buildings/'
        //         },
        //         rotationY: 0.75,
        //         scale: 'default',
        //         hideInPanel: false,
        //         category: 'COMMERCIAL',
        //         sorting: 202,
        //         nightmode: true,
        //         showPlaceholder: true,
        //         geoObject: true,
        //         widgetPosition: {
        //             '82_SBC_warehouse-nr1': [-2.1, 0.95, -0.6],
        //             '93_SBC_warehouse-nr2': [1.7, 1.1, 1.9]
        //         },
        //         decorators: {
        //             'SOLAR-PANEL': {
        //                 link: 'buildings/65_SBC_flat-solar-panel',
        //                 flavors: {
        //                     '82_SBC_warehouse-nr1': {
        //                         position: [1.7, 0.541, -1.4],
        //                         repeatX: 2,
        //                         repeatY: 6,
        //                         rotationX: 0.25
        //                     },
        //                     '93_SBC_warehouse-nr2': {
        //                         position: [-2.34, 0.541, -1.4],
        //                         repeatX: 2,
        //                         repeatY: 12,
        //                         rotationX: 0.25
        //                     }
        //                 }
        //             },
        //             'CHARGING-POLE': {
        //                 link: 'buildings/63_SBC_ev-ground-charger',
        //                 flavors: {
        //                     '82_SBC_warehouse-nr1': {
        //                         position: [-1.7, 0, 0.85],
        //                         rotationY: 0.25
        //                     },
        //                     '93_SBC_warehouse-nr2': {
        //                         position: [-2.05, 0, -2.8],
        //                         rotationY: 0.25
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // },
        // 'VERTICAL-FARM-SMALL': {
        //     domain: 'landscape',
        //     memberOf: ['buildings', 'communal'],
        //     placeOn: ['canvas'],
        //     name: 'Vertical farm (small)',
        //     description: 'A small vertical farm',
        //     size: 4,
        //     replace: false,
        //     defaultPairing: ['POWERGRID-CONNECTOR'],
        //     requiredPairing: [],
        //     forbiddenPairing: [],
        //     dynamics: [],
        //     flavors: ['39_SBC_vertical-garden-1'],
        //     renderData: {
        //         flavorNames: ['Greenhouse small'],
        //         file: 'buildings/',
        //         image: {
        //             base: 'objects/inactive/buildings/',
        //             hover: 'objects/active/buildings/',
        //             active: 'objects/active/buildings/'
        //         },
        //         rotationY: 0.75,
        //         scale: 'default',
        //         hideInPanel: false,
        //         category: 'COMMERCIAL',
        //         sorting: 301,
        //         nightmode: true,
        //         showPlaceholder: true,
        //         geoObject: true,
        //         widgetPosition: {
        //             '39_SBC_vertical-garden-1': [0, 1, 0]
        //         },
        //         decorators: {
        //             'CHARGING-POLE': {
        //                 link: 'buildings/63_SBC_ev-ground-charger',
        //                 flavors: {
        //                     '39_SBC_vertical-garden-1': {
        //                         position: [-0.8, 0, 0.6],
        //                         rotationY: 0
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // },
        // 'VERTICAL-FARM-BIG': {
        //     domain: 'landscape',
        //     memberOf: ['buildings', 'communal'],
        //     placeOn: ['canvas'],
        //     name: 'Vertical farm (big)',
        //     description: 'A big vertical farm',
        //     size: 6,
        //     replace: false,
        //     defaultPairing: ['POWERGRID-CONNECTOR'],
        //     requiredPairing: [],
        //     forbiddenPairing: [],
        //     dynamics: [],
        //     flavors: ['39_SBC_vertical-garden-2'],
        //     renderData: {
        //         flavorNames: ['Greenhouse big'],
        //         file: 'buildings/',
        //         image: {
        //             base: 'objects/inactive/buildings/',
        //             hover: 'objects/active/buildings/',
        //             active: 'objects/active/buildings/'
        //         },
        //         rotationY: 0.75,
        //         scale: 'default',
        //         hideInPanel: false,
        //         category: 'COMMERCIAL',
        //         sorting: 302,
        //         nightmode: true,
        //         widgetPosition: {
        //             '39_SBC_vertical-garden-2': [0, 1, 0]
        //         },
        //         showPlaceholder: true,
        //         geoObject: true
        //     }
        // },
        // 'GROCERY-STORE': {
        //     domain: 'landscape',
        //     memberOf: ['buildings'],
        //     placeOn: ['canvas'],
        //     name: 'Grocery store',
        //     description: 'A local grocery store',
        //     size: 4,
        //     replace: false,
        //     defaultPairing: ['POWERGRID-CONNECTOR'],
        //     requiredPairing: [],
        //     forbiddenPairing: [],
        //     dynamics: [],
        //     flavors: ['92_SBC_grocery-store'],
        //     renderData: {
        //         file: 'buildings/',
        //         image: {
        //             base: 'objects/inactive/buildings/',
        //             hover: 'objects/active/buildings/',
        //             active: 'objects/active/buildings/'
        //         },
        //         rotationY: 0.75,
        //         scale: 'default',
        //         hideInPanel: false,
        //         category: 'COMMERCIAL',
        //         sorting: 401,
        //         nightmode: true,
        //         showPlaceholder: true,
        //         geoObject: true,
        //         widgetPosition: {
        //             '92_SBC_grocery-store': [0.2, 1.1, 0.2]
        //         },
        //         decorators: {
        //             'SOLAR-PANEL': {
        //                 link: 'buildings/47_SBC_solar-panel',
        //                 flavors: {
        //                     '92_SBC_grocery-store': {
        //                         position: [-0.1, 0.8, 0],
        //                         rotationY: 0,
        //                         rotationX: 0
        //                     }
        //                 }
        //             },
        //             'CHARGING-POLE': {
        //                 link: 'buildings/63_SBC_ev-ground-charger',
        //                 flavors: {
        //                     '92_SBC_grocery-store': {
        //                         position: [0.5, 0, -0.05]
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // },
        // FIRESTATION: {
        //     domain: 'landscape',
        //     memberOf: ['buildings', 'communal'],
        //     placeOn: ['canvas'],
        //     name: 'Firestation',
        //     description: 'Firestation',
        //     size: 8,
        //     replace: false,
        //     defaultPairing: ['POWERGRID-CONNECTOR'],
        //     requiredPairing: [],
        //     forbiddenPairing: [],
        //     dynamics: [],
        //     flavors: ['61_SBC_firestation'],
        //     renderData: {
        //         file: 'buildings/',
        //         logo: '61_SBC_firestation_symbol',
        //         image: {
        //             base: 'objects/inactive/buildings/',
        //             hover: 'objects/active/buildings/',
        //             active: 'objects/active/buildings/'
        //         },
        //         rotationY: 0.75,
        //         scale: 'default',
        //         hideInPanel: false,
        //         category: 'COMMUNAL',
        //         sorting: 100,
        //         nightmode: true,
        //         geoObject: true,
        //         widgetPosition: {
        //             '61_SBC_firestation': [-1.55, 2.1, -0.2]
        //         },
        //         decorators: {
        //             'CHARGING-POLE': {
        //                 link: 'buildings/63_SBC_ev-ground-charger',
        //                 flavors: {
        //                     '61_SBC_firestation': {
        //                         position: [1.1, 0, 0.6],
        //                         rotationY: 0
        //                     }
        //                 }
        //             },
        //             'SOLAR-PANEL': {
        //                 link: 'buildings/47_SBC_solar-panel',
        //                 flavors: {
        //                     '61_SBC_firestation': {
        //                         position: [-0.76, 0.7, -0.05],
        //                         repeatX: 3,
        //                         scale: 1.4
        //                     }
        //                 }
        //             }
        //         }
        //     },
        //     tags: ['communal']
        // },
        // SCHOOL: {
        //     domain: 'landscape',
        //     memberOf: ['buildings'],
        //     placeOn: ['canvas'],
        //     name: 'School house',
        //     description: 'A community school house',
        //     size: 8,
        //     replace: false,
        //     defaultPairing: ['POWERGRID-CONNECTOR'],
        //     requiredPairing: [],
        //     forbiddenPairing: [],
        //     dynamics: [],
        //     flavors: ['79_SBC_school'],
        //     renderData: {
        //         file: 'buildings/',
        //         image: {
        //             base: 'objects/inactive/buildings/',
        //             hover: 'objects/active/buildings/',
        //             active: 'objects/active/buildings/'
        //         },
        //         rotationY: 0.75,
        //         scale: 'default',
        //         hideInPanel: false,
        //         category: 'COMMUNAL',
        //         sorting: 100,
        //         nightmode: true,
        //         geoObject: true,
        //         showPlaceholder: true,
        //         widgetPosition: {
        //             '79_SBC_school': [0.2, 1.6, -0.4]
        //         },
        //         decorators: {
        //             'SOLAR-PANEL': {
        //                 link: 'buildings/47_SBC_solar-panel',
        //                 flavors: {
        //                     '79_SBC_school': {
        //                         position: [0.2, 1.18, -0.4],
        //                         rotationY: 0,
        //                         rotationX: 0,
        //                         scale: 1
        //                     }
        //                 }
        //             },
        //             'CHARGING-POLE': {
        //                 link: 'buildings/63_SBC_ev-ground-charger',
        //                 flavors: {
        //                     '79_SBC_school': {
        //                         position: [0, 0, 0.62]
        //                     }
        //                 }
        //             }
        //         }
        //     },
        //     tags: ['communal']
        // },
        // HOSPITAL: {
        //     domain: 'landscape',
        //     memberOf: ['buildings'],
        //     placeOn: ['canvas'],
        //     name: 'Hospital',
        //     description: 'A public hospital',
        //     size: 8,
        //     replace: false,
        //     defaultPairing: ['POWERGRID-CONNECTOR'],
        //     requiredPairing: [],
        //     forbiddenPairing: [],
        //     dynamics: [],
        //     flavors: ['80_SBC_hospital'],
        //     renderData: {
        //         file: 'buildings/',
        //         image: {
        //             base: 'objects/inactive/buildings/',
        //             hover: 'objects/active/buildings/',
        //             active: 'objects/active/buildings/'
        //         },
        //         rotationY: 0.75,
        //         scale: 'default',
        //         hideInPanel: false,
        //         category: 'COMMUNAL',
        //         sorting: 100,
        //         nightmode: true,
        //         showPlaceholder: true,
        //         geoObject: true,
        //         widgetPosition: {
        //             '80_SBC_hospital': [-0.785, 1.6, -0.6]
        //         },
        //         decorators: {
        //             'SOLAR-PANEL': {
        //                 link: 'buildings/47_SBC_solar-panel',
        //                 flavors: {
        //                     '80_SBC_hospital': {
        //                         position: [-0.985, 1.18, -0.1],
        //                         rotationY: 0,
        //                         rotationX: 0,
        //                         scale: 1,
        //                         repeatX: 2
        //                     }
        //                 }
        //             },
        //             'CHARGING-POLE': {
        //                 link: 'buildings/63_SBC_ev-ground-charger',
        //                 flavors: {
        //                     '80_SBC_hospital': {
        //                         position: [1.61, 0, -0.8],
        //                         rotationY: 0.25
        //                     }
        //                 }
        //             }
        //         }
        //     },
        //     tags: ['communal']
        // },
        // 'SOCCER-STADIUM': {
        //     domain: 'landscape',
        //     memberOf: ['buildings'],
        //     placeOn: ['canvas'],
        //     name: 'Soccer stadium',
        //     description: 'A soccer field with grandstand',
        //     size: 16,
        //     replace: false,
        //     defaultPairing: ['POWERGRID-CONNECTOR'],
        //     requiredPairing: [],
        //     forbiddenPairing: [],
        //     dynamics: [],
        //     flavors: ['90_SBC_soccer-field'],
        //     renderData: {
        //         file: 'buildings/',
        //         image: {
        //             base: 'objects/inactive/buildings/',
        //             hover: 'objects/active/buildings/',
        //             active: 'objects/active/buildings/'
        //         },
        //         rotationY: 0.75,
        //         scale: 'default',
        //         hideInPanel: false,
        //         category: 'COMMUNAL',
        //         sorting: 100,
        //         nightmode: true,
        //         showPlaceholder: true,
        //         geoObject: true,
        //         widgetPosition: {
        //             '90_SBC_soccer-field': [0, 1.2, -0.8]
        //         },
        //         decorators: {
        //             'SOLAR-PANEL': {
        //                 link: 'buildings/65_SBC_flat-solar-panel',
        //                 flavors: {
        //                     '90_SBC_soccer-field': {
        //                         position: [-0.65, 0.81, -0.9],
        //                         rotationY: 0,
        //                         rotationX: 0.22,
        //                         scale: 1,
        //                         repeatX: 4
        //                     }
        //                 }
        //             },
        //             'CHARGING-POLE': {
        //                 link: 'buildings/63_SBC_ev-ground-charger',
        //                 flavors: {
        //                     '90_SBC_soccer-field': {
        //                         position: [1.6, 0, -1],
        //                         rotationY: 0.25
        //                     }
        //                 }
        //             }
        //         }
        //     },
        //     tags: ['communal']
        // },
        // 'OUTDOOR-POOL': {
        //     domain: 'landscape',
        //     memberOf: ['buildings'],
        //     placeOn: ['canvas'],
        //     name: 'Outdoor pool',
        //     description: 'A outdoor pool',
        //     size: 24,
        //     replace: false,
        //     defaultPairing: ['POWERGRID-CONNECTOR'],
        //     requiredPairing: [],
        //     forbiddenPairing: [],
        //     dynamics: [],
        //     flavors: ['89_SBC_outdoor_pool'],
        //     renderData: {
        //         file: 'buildings/',
        //         image: {
        //             base: 'objects/inactive/buildings/',
        //             hover: 'objects/active/buildings/',
        //             active: 'objects/active/buildings/'
        //         },
        //         rotationY: 0.75,
        //         scale: 'default',
        //         hideInPanel: false,
        //         category: 'COMMUNAL',
        //         sorting: 100,
        //         nightmode: true,
        //         showPlaceholder: true,
        //         geoObject: true,
        //         widgetPosition: {
        //             '89_SBC_outdoor_pool': [-1.25, 1.47, -0.2]
        //         },
        //         decorators: {
        //             'SOLAR-PANEL': {
        //                 link: 'buildings/65_SBC_flat-solar-panel',
        //                 flavors: {
        //                     '89_SBC_outdoor_pool': {
        //                         position: [-2.3, 0.633, -1.25],
        //                         rotationY: 0.06,
        //                         rotationX: 0.25,
        //                         repeatX: 3,
        //                         repeatY: 3
        //                     }
        //                 }
        //             },
        //             'CHARGING-POLE': {
        //                 link: 'buildings/63_SBC_ev-ground-charger',
        //                 flavors: {
        //                     '89_SBC_outdoor_pool': {
        //                         position: [-0.76, 0, 1.62],
        //                         repeatX: 2
        //                     }
        //                 }
        //             }
        //         }
        //     },
        //     tags: ['communal']
        // },
        // FARM: {
        //     domain: 'landscape',
        //     memberOf: ['buildings'],
        //     placeOn: ['canvas'],
        //     name: 'Farm',
        //     description: 'A regular size farm',
        //     size: 24,
        //     replace: false,
        //     defaultPairing: ['POWERGRID-CONNECTOR'],
        //     requiredPairing: [],
        //     forbiddenPairing: [],
        //     dynamics: [],
        //     flavors: ['91_SBC_farm'],
        //     renderData: {
        //         file: 'buildings/',
        //         image: {
        //             base: 'objects/inactive/buildings/',
        //             hover: 'objects/active/buildings/',
        //             active: 'objects/active/buildings/'
        //         },
        //         rotationY: 0.75,
        //         scale: 'default',
        //         hideInPanel: false,
        //         category: 'COMMUNAL',
        //         sorting: 100,
        //         nightmode: true,
        //         showPlaceholder: true,
        //         geoObject: true,
        //         widgetPosition: {
        //             '91_SBC_farm': [-1.5, 1.04, -0.43]
        //         },
        //         decorators: {
        //             'SOLAR-PANEL': {
        //                 link: 'buildings/65_SBC_flat-solar-panel',
        //                 flavors: {
        //                     '91_SBC_farm': {
        //                         position: [-1.9, 0.38, -1.16],
        //                         rotationY: 0,
        //                         rotationX: 0.2,
        //                         repeatX: 1,
        //                         repeatY: 2
        //                     }
        //                 }
        //             },
        //             'CHARGING-POLE': {
        //                 link: 'buildings/63_SBC_ev-ground-charger',
        //                 flavors: {
        //                     '91_SBC_farm': {
        //                         position: [-1.5, 0, 0],
        //                         rotationY: 0.25
        //                     }
        //                 }
        //             }
        //         }
        //     },
        //     tags: ['communal']
        // },
        // 'TREATMENT-PLANT': {
        //     domain: 'landscape',
        //     memberOf: ['buildings'],
        //     placeOn: ['canvas'],
        //     name: 'Treatment plant',
        //     description: 'A small treatment plant',
        //     size: 4,
        //     replace: false,
        //     defaultPairing: ['POWERGRID-CONNECTOR'],
        //     requiredPairing: [],
        //     forbiddenPairing: [],
        //     dynamics: [],
        //     flavors: ['81_SBC_treatment_plant'],
        //     renderData: {
        //         file: 'buildings/',
        //         image: {
        //             base: 'objects/inactive/buildings/',
        //             hover: 'objects/active/buildings/',
        //             active: 'objects/active/buildings/'
        //         },
        //         rotationY: 0.75,
        //         scale: 'default',
        //         hideInPanel: false,
        //         category: 'COMMUNAL',
        //         sorting: 100,
        //         nightmode: true,
        //         showPlaceholder: true,
        //         geoObject: true,
        //         widgetPosition: {
        //             '81_SBC_treatment_plant': [0.1, 1.02, -0.4]
        //         },
        //         decorators: {
        //             'SOLAR-PANEL': {
        //                 link: 'buildings/65_SBC_flat-solar-panel',
        //                 flavors: {
        //                     '81_SBC_treatment_plant': {
        //                         position: [0.3, 0.52, -0.73],
        //                         rotationX: 0.19,
        //                         repeatY: 1
        //                     }
        //                 }
        //             },
        //             'CHARGING-POLE': {
        //                 link: 'buildings/63_SBC_ev-ground-charger',
        //                 flavors: {
        //                     '81_SBC_treatment_plant': {
        //                         position: [-0.62, 0, -0.3],
        //                         rotationY: -0.25
        //                     }
        //                 }
        //             }
        //         }
        //     },
        //     tags: ['communal']
        // },
        FOREST: {
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
        HEDGE: {
            domain: 'landscape',
            memberOf: ['nature'],
            placeOn: ['canvas'],
            name: 'Hedge',
            description: '',
            size: 1,
            replace: true,
            defaultPairing: [],
            requiredPairing: [],
            forbiddenPairing: [],
            dynamics: [],
            flavors: ['21_SBC_hedge'],
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
                sorting: 102,
                drawable: true,
                reselectAfterPlace: true
            }
        },
        GRASS: {
            domain: 'landscape',
            memberOf: ['nature'],
            placeOn: ['canvas'],
            name: 'Grass',
            description: '',
            size: 1,
            replace: true,
            defaultPairing: [],
            requiredPairing: [],
            forbiddenPairing: [],
            dynamics: [],
            flavors: ['53_SBC_grass'],
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
                sorting: 103,
                drawable: true,
                reselectAfterPlace: true
            }
        },
        CONCRETE: {
            domain: 'landscape',
            memberOf: [],
            placeOn: ['canvas'],
            name: 'Concrete',
            description: '',
            size: 1,
            replace: true,
            defaultPairing: [],
            requiredPairing: [],
            forbiddenPairing: [],
            dynamics: [],
            flavors: ['60_SBC_concrete-tile', '60_SBC_green-tile'],
            renderData: {
                flavorNames: ['Concrete', 'Green'],
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
                sorting: 104,
                drawable: true,
                reselectAfterPlace: true
            }
        },
        'WATER-TILE-EDGE': {
            domain: 'landscape',
            memberOf: ['nature'],
            placeOn: ['canvas'],
            name: 'Water edge',
            description: '',
            size: 1,
            replace: true,
            defaultPairing: [],
            requiredPairing: [],
            forbiddenPairing: [],
            dynamics: [],
            flavors: ['56_SBC_water-tile-edge'],
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
                sorting: 105,
                reselectAfterPlace: true
            }
        },
        'WATER-TILE-CORDNER': {
            domain: 'landscape',
            memberOf: ['nature'],
            placeOn: ['canvas'],
            name: 'Water corner',
            description: '',
            size: 1,
            replace: true,
            defaultPairing: [],
            requiredPairing: [],
            forbiddenPairing: [],
            dynamics: [],
            flavors: ['57_SBC_water-tile-corner'],
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
                sorting: 106,
                reselectAfterPlace: true
            }
        },
        'WATER-TILE-MIDDLE': {
            domain: 'landscape',
            memberOf: ['nature'],
            placeOn: ['canvas'],
            name: 'Water',
            description: '',
            size: 1,
            replace: true,
            defaultPairing: [],
            requiredPairing: [],
            forbiddenPairing: [],
            dynamics: [],
            flavors: ['58_SBC_water-tile-middle'],
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
                drawable: true,
                sorting: 107,
                reselectAfterPlace: true
            }
        },
        LAKE: {
            domain: 'landscape',
            memberOf: ['nature'],
            placeOn: ['canvas'],
            name: 'Lake',
            description: '',
            size: 24,
            replace: false,
            defaultPairing: [],
            requiredPairing: [],
            forbiddenPairing: [],
            dynamics: [],
            flavors: ['27_SBC_lake', '28_SBC_lake', '29_SBC_lake'],
            renderData: {
                flavorNames: ['Lake 1', 'Lake 2', 'Lake 3'],
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
                sorting: 201
            }
        },
        BILLBOARD: {
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
        MONUMENT: {
            domain: 'landscape',
            memberOf: ['communal'],
            placeOn: ['canvas'],
            name: 'Monument',
            description: '',
            size: 4,
            replace: true,
            defaultPairing: [],
            requiredPairing: [],
            forbiddenPairing: [],
            dynamics: [],
            flavors: ['105_SBC_statue-2'],
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
                sorting: 302,
                nightmode: true,
                alwaysEmissive: true
            }
        },
        STATUE: {
            domain: 'landscape',
            memberOf: ['communal'],
            placeOn: ['canvas'],
            name: 'Statue',
            description: '',
            size: 1,
            replace: true,
            defaultPairing: [],
            requiredPairing: [],
            forbiddenPairing: [],
            dynamics: [],
            flavors: ['104_SBC_statue-1'],
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
                sorting: 303
            }
        },
        ROAD: {
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
        'PARKING-SPOT': {
            domain: 'landscape',
            memberOf: ['traffic'],
            placeOn: ['canvas'],
            name: 'Parking spot',
            description: '',
            size: 6,
            replace: true,
            defaultPairing: [],
            requiredPairing: [],
            forbiddenPairing: [],
            dynamics: [],
            flavors: ['103_SBC_parking-spot'],
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
                sorting: 200
            }
        },
        BRIDGE: {
            domain: 'landscape',
            memberOf: ['traffic', 'nature'],
            placeOn: ['canvas'],
            name: 'Bridge',
            description: '',
            size: 12,
            replace: true,
            defaultPairing: [],
            requiredPairing: [],
            forbiddenPairing: [],
            dynamics: [],
            flavors: ['102_SBC_bridge'],
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
                sorting: 202,
                nightmode: true,
                alwaysEmissive: true
            }
        }
    },
    dynamics: {},
    mappings: {}
}

export default landscapeFragment
