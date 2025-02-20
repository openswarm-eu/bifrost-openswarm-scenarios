import { TFragment } from "bifrost-zero-common";

const mvgridFragment: TFragment = {
    type: 'DIRECTORY-FRAGMENT',
    name: 'mvgrid',
    structures: {
        'MV-POWERGRID-CONNECTOR': {
            domain: 'mvgrid',
            memberOf: ['electrical', 'connectors'],
            placeOn: ['generators'],
            name: 'Powergrid Connector (MV)',
            description: 'A connection point to the MV powergrid',
            size: 1,
            replace: false,
            defaultPairing: [],
            requiredPairing: [],
            forbiddenPairing: [],
            dynamics: [],
            flavors: ['117_SBC_mv-symbol'],
            renderData: {
                file: 'buildings/',
                image: {
                    base: 'objects/inactive/buildings/',
                    hover: 'objects/active/buildings/',
                    active: 'objects/active/buildings/'
                },
                scale: 'default',
                rotationY: 0.75,
                category: 'ELECTRICAL',
                sorting: 750,
                nightmode: false,
                emissiveOnConnection: true
            }
        },
        'MV-GENERATOR-CONNECTOR': {
            domain: 'mvgrid',
            memberOf: ['electrical', 'connectors'],
            placeOn: ['generators'],
            name: 'Generator Connector (MV)',
            description: 'A connection point to the MV powergrid in form of a synchronous machine',
            size: 1,
            replace: false,
            defaultPairing: [],
            requiredPairing: [],
            forbiddenPairing: [],
            dynamics: [],
            flavors: ['117_SBC_mv-symbol'],
            renderData: {
                file: 'buildings/',
                image: {
                    base: 'objects/inactive/buildings/',
                    hover: 'objects/active/buildings/',
                    active: 'objects/active/buildings/'
                },
                scale: 'default',
                rotationY: 0.75,
                category: 'ELECTRICAL',
                sorting: 751,
                nightmode: false,
                emissiveOnConnection: true
            }
        },
        'MV-GRID-NODE': {
            domain: 'mvgrid',
            memberOf: ['electrical', 'nodes'],
            placeOn: ['canvas'],
            name: 'Grid Node (MV)',
            description: 'A floating node in the MV powergrid',
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
        'MV-CABLE-UNDERGROUND': {
            domain: 'mvgrid',
            memberOf: ['electrical', 'connections'],
            placeOn: ['canvas'],
            name: 'Underground Cable (MV)',
            description: 'MV underground cable',
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
                sorting: 601,
                sounds: {
                    build: 'BUILD_POWERLINE'
                },
                reselectAfterPlace: true
            }
        },
        'MV-CABLE-OVERHEAD': {
            domain: 'mvgrid',
            memberOf: ['electrical', 'connections'],
            placeOn: ['canvas'],
            name: 'Overhead Line (MV)',
            description: 'Grid representation of an MV overhead line',
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
                sorting: 601,
                sounds: {
                    build: 'BUILD_POWERLINE'
                },
                reselectAfterPlace: true
            }
        },
        'MV-TRANSFORMER': {
            domain: 'mvgrid',
            memberOf: ['electrical', 'sources'],
            placeOn: [
                'MV-TRAFO-BUILDING',
                'MV-PRIMARYSUBSTATION'
            ],
            name: 'MV Transformer',
            description: 'Medium Voltage Transformer',
            size: 1,
            replace: false,
            defaultPairing: [],
            requiredPairing: [],
            forbiddenPairing: [],
            dynamics: [],
            flavors: ['117_SBC_mv-symbol'],
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
        'MV-TRAFO-BUILDING': {
            domain: 'landscape',
            memberOf: ['buildings', 'electrical', 'generators'],
            placeOn: ['canvas'],
            name: 'Transformer Building (MV)',
            description: 'The transformer building of a MV transformer',
            size: 1,
            replace: false,
            defaultPairing: [],
            requiredPairing: ['MV-TRANSFORMER'],
            forbiddenPairing: ['MV-POWERGRID-CONNECTOR', 'POWERGRID-CONNECTOR'],
            dynamics: [],
            flavors: ['111_SBC_mv-transformer'],
            renderData: {
                file: 'buildings/',
                image: {
                    base: 'objects/inactive/buildings/',
                    hover: 'objects/active/buildings/',
                    active: 'objects/active/buildings/'
                },
                rotationY: 0,
                scale: 'default',
                hideInPanel: false,
                category: 'ELECTRICAL',
                sorting: 602,
                nightmode: true,
                geoObject: true,
                widgetPosition: {
                    '25_SBC_transformer': [0, 1.3, 0]
                },
                showPlaceholder: true
            },
            tags: ['base']
        },
        'MV-PRIMARYSUBSTATION': {
            domain: 'landscape',
            memberOf: ['buildings', 'electrical', 'generators'],
            placeOn: ['canvas'],
            name: 'Primary Substation',
            description: 'A primary substation',
            size: 8,
            replace: false,
            defaultPairing: [],
            requiredPairing: ['MV-TRANSFORMER'],
            forbiddenPairing: ['MV-POWERGRID-CONNECTOR', 'POWERGRID-CONNECTOR'],
            dynamics: [],
            flavors: ['114_SBC_primary-substation'],
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
                sorting: 602,
                nightmode: true,
                geoObject: true,
                widgetPosition: {
                    '25_SBC_transformer': [0, 1.3, 0]
                },
                showPlaceholder: true
            },
            tags: ['base']
        },
        'MV-POWERSWITCH': {
            domain: 'mvgrid',
            memberOf: ['electrical','taps'],
            placeOn: ['canvas'],
            name: 'Power Switch (MV)',
            description: 'MV Power Switch',
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
                sorting: 701
            }
        }
    },
    dynamics: {},
    mappings: {}
}

export default mvgridFragment
