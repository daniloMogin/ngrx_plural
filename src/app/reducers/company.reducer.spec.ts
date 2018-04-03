import * as companyActions from './../actions/company.actions';
import { companyReducer } from './company.reducer';

describe('companyReducer', () => {
    describe('deleteCompanyAction', () => {
        it('should delete a company', () => {
            const currentState = {
                companies:
                    [
                        { id: 1, name: 'SSW', email: 'email', phone: 123 },
                        { id: 2, name: 'Microsoft', email: 'email', phone: 123 }
                    ]
            }
            const expectedResult = {
                companies: [
                    { id: 2, name: 'Microsoft', email: 'email', phone: 123 }
                ]
            };
            const action = new companyActions.DeleteCompanySuccessAction(2);
            const result = companyReducer(currentState, action);
            expect(result).toEqual(expectedResult);
        });
    });
});