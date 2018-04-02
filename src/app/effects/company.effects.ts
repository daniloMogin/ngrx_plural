import { Injectable } from '@angular/core';
import { CompanyService } from '../company/company.service';
import { Effect, Actions } from '@ngrx/effects';
import * as companyActions from './../actions/company.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Injectable()
export class CompanyEffects {
    constructor(
        private companyService: CompanyService,
        private actions$: Actions
    ) { }

    @Effect() loadCompanies$ = this.actions$
        .ofType(companyActions.LOAD_COMPANIES)
        .switchMap(() => {
            return this.companyService.loadCompanies()
                .map(companies => new companyActions.LoadCompaniesSuccessAction(companies));
        });

    @Effect() deleteCompany$ = this.actions$
        .ofType(companyActions.DELETE_COMPANY)
        .switchMap((action: companyActions.DeleteCompanyAction) => {
            return this.companyService.deleteCompany(action.payload)
                .map(company => new companyActions.DeleteCompanySuccessAction(company.id));
        });
}