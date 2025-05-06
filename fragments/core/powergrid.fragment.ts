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
        'POWERSWITCH': {
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
    },
    dynamics: {},
    mappings: {}
}

export default powergridFragment
