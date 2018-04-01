import * as companyActions from './../actions/company.actions';

export function companyReducer(state = [], action: companyActions.Action) {

    switch (action.type) {
        case companyActions.LOAD_COMPANIES_SUCCESS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}