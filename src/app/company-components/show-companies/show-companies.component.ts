import { Component, OnInit } from '@angular/core';
import { CompaniesDataService } from '../../services/companies-data.service';
import { Company } from '../../models/company';

@Component({
  selector: 'app-show-companies',
  templateUrl: './show-companies.component.html',
  styleUrl: './show-companies.component.css'
})
export class ShowCompaniesComponent implements OnInit{

  public companies: Company[] = [];

  constructor(private _companiesDataService: CompaniesDataService){}

  ngOnInit(): void {
    this.companies = this._companiesDataService.getCompanies();
  }



}
