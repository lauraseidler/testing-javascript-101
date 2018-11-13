/**
 * Get the value of a parameter within a query string.
 *
 * @param {string} queryString
 * @param {string} param
 * @returns {string}
 */
export const getQueryParam = (queryString, param) => {
    const querySplit = queryString.split(/[?&=]/);

    const paramIndex = querySplit.findIndex(p => p === param);

    return querySplit[paramIndex + 1];
};
