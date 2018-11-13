import { getQueryParam } from '../helpers';

describe('The getQueryParam helpers', () => {
    it('returns the value of a parameter within a query string', () => {
        const queryString = '?param1=hello&param2=world';

        expect(getQueryParam(queryString, 'param1')).toEqual('hello');
        expect(getQueryParam(queryString, 'param2')).toEqual('world');
    });
});
