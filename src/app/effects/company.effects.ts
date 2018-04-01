import { Injectable } from '@angular/core';
import { CompanyService } from '../company/company.service';
import { Effect, Actions } from '@ngrx/effects';
import * as companyActions from './../actions/company.actions';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class CompanyEffects {
    constructor(
        private companyService: CompanyService,
        private actions$: Actions
    ) { }

    @Effect() LoadCompanies$ = this.actions$
        .ofType(companyActions.LOAD_COMPANIES)
        .switchMap(() => this.companyService.loadCompanies()
            .map(companies => (new companyActions.LoadCompaniesSuccessAction(companies)))
        );
}