import { Injectable } from '@angular/core';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class CompaniesDataService {

  private companies: Company[] = [
    { rank: "1", ime: "Walmart", prihodek: "648125", dobicek: "15511", sredstva: "252399", stZaposlenih: "2100000" }
  ];

  getCompanies(): Company[] {
    return this.companies;
  }

  addCompany(company: Company) {
    this.companies.push(company);
  }
}
