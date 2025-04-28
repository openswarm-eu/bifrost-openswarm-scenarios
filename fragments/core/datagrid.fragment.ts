import { TFragment } from 'bifrost-zero-common'

const datagridFragment: TFragment = {
    type: 'DIRECTORY-FRAGMENT',
    name: 'datagrid',
    structures: {
        'DATA-NODE': {
            domain: 'datagrid',
            memberOf: ['nodes'],
            placeOn: ['canvas'],
            name: 'Data node',
            description: 'A basic datagrid node',
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
                category: 'DATAGRID'
            }
        },
        'DATA-CONNECTION-WIRED': {
            domain: 'datagrid',
            memberOf: ['connections'],
            placeOn: ['canvas'],
            name: 'Wired connection',
            description: 'A wired logical data connection',
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
                category: 'DATAGRID',
                sorting: 101,
                sounds: {
                    build: 'BUILD_POWERLINE'
                },
                reselectAfterPlace: true
            }
        },
        'DATA-CONNECTION-WIRELESS': {
            domain: 'datagrid',
            memberOf: ['connections'],
            placeOn: ['canvas'],
            name: 'Wireless connection',
            description: 'A wireless logical data connection',
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
                category: 'DATAGRID',
                sorting: 102,
                sounds: {
                    build: 'BUILD_POWERLINE'
                },
                reselectAfterPlace: true
            }
        },
        'DATAGRID-CONNECTOR': {
            domain: 'datagrid',
            memberOf: ['sources', 'sinks', 'connectors'],
            placeOn: ['buildings'],
            name: 'Datagrid connector',
            description: 'A basic element to establish connection to the datagrid',
            size: 1,
            replace: false,
            defaultPairing: [],
            requiredPairing: [],
            forbiddenPairing: [],
            dynamics: [],
            flavors: ['74_SBC_transceiver'],
            renderData: {
                file: 'buildings/',
                image: {
                    base: 'objects/inactive/buildings/',
                    hover: 'objects/active/buildings/',
                    active: 'objects/active/buildings/'
                },
                rotationY: 0.75,
                scale: 'default',
                nightmode: false,
                emissiveOnConnection: true,
                category: 'DATAGRID',
                sorting: 201
            }
        },
    },
    dynamics: {},
    mappings: {}
}

export default datagridFragment
