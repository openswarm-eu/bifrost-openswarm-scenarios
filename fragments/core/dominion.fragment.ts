import { TFragment } from 'bifrost-zero-common'

const dominionFragment: TFragment = {
    type: 'DIRECTORY-FRAGMENT',
    name: 'dominion',
    structures: {
        AIRSHIP: {
            domain: 'dominion',
            memberOf: ['singletons'],
            placeOn: ['canvas'],
            name: 'City council',
            description: 'City council',
            size: 1,
            replace: false,
            defaultPairing: [],
            requiredPairing: [],
            forbiddenPairing: [],
            dynamics: [],
            flavors: [],
            renderData: {
                hideInPanel: true,
                hideInOverlay: true,
                nightmode: true,
                image: {
                    base: 'objects/inactive/buildings/',
                    hover: 'objects/active/buildings/',
                    active: 'objects/active/buildings/'
                }
            },
        }
    },
    dynamics: {},
    mappings: {}
}

export default dominionFragment
