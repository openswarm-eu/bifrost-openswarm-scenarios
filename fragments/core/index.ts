import { TFragment } from 'bifrost-zero-common'
import datagridFragment from './datagrid.fragment.js'
import dominionFragment from './dominion.fragment.js'
import landscapeFragment from './landscape.fragment.js'
import mvgridFragment from './mvgrid.fragment.js'
import powergridFragment from './powergrid.fragment.js'
import thermogridFragment from './thermogrid.fragment.js'

/**
 * Returns all the base fragments that should be added to the story on creation. Use this for all the needed structures. Don´t add any dynamics to it.
 * @returns a list of base fragments
 */
export function getBaseFragments(): TFragment[] {
    return [
        datagridFragment,
        dominionFragment,
        landscapeFragment,
        mvgridFragment,
        powergridFragment,
        thermogridFragment
    ]
}
