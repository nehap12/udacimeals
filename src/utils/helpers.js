/**
 * Created by NehaP on 9/29/2017.
 */

export function capitalize (str = '') {
    return typeof str !== 'string'
        ? ''
        : str[0].toUpperCase() + str.slice(1)
}