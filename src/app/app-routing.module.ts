import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyComponent } from './company-components/add-company/add-company.component';
import { ShowCompaniesComponent } from './company-components/show-companies/show-companies.component';
import { WelcomeComponent } from './general-components/welcome/welcome.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'add', component: AddCompanyComponent},
  {path: 'show', component: ShowCompaniesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [AddCompanyComponent, ShowCompaniesComponent, WelcomeComponent];
