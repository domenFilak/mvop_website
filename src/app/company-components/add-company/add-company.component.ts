import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AddCompanyService } from '../../services/add-company.service';
import { CompaniesDataService } from '../../services/companies-data.service';
import { Company } from '../../models/company';


@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrl: './add-company.component.css'
})
export class AddCompanyComponent {

  getRank(){
    return this.addCompanyForm.get('rank');
  }

  getIme(){
    return this.addCompanyForm.get('ime');
  }

  getPrihodek(){
    return this.addCompanyForm.get('prihodek');
  }

  getDobicek(){
    return this.addCompanyForm.get('dobicek');
  }

  getSredstva(){
    return this.addCompanyForm.get('sredstva');
  }

  getStZaposlenih(){
    return this.addCompanyForm.get('stZaposlenih');
  }

  constructor(private formBuilder: FormBuilder, private _addCompanyService: AddCompanyService, private _companiesDataService: CompaniesDataService){}

  public addCompanyForm = this.formBuilder.group({
    rank: ['', [Validators.required, Validators.min(1), Validators.max(500), Validators.pattern('^[0-9]*$')]],
    ime: ['', [Validators.required, Validators.minLength(2)]],
    prihodek: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
    dobicek: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
    sredstva: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
    stZaposlenih: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
  });

  //za update v tabeli prikaza
  loadApiData(){
    this.addCompanyForm.patchValue({
      rank: "1",
      ime: "Amazon",
      prihodek: "300.2",
      dobicek: "120.1",
      sredstva: "760.3",
      stZaposlenih: "2000001"
    });
  }

  onSubmit(){

    const newCompany: Company = this.addCompanyForm.value as Company;
    
    this._companiesDataService.addCompany(newCompany); //dodaj v un array
    
    this._addCompanyService.add(newCompany)
      .subscribe({
        next: res => console.log('Success!', res),
        error: error => console.error('Error!', error),
        complete: () => console.log('Add company request completed!')
      });
  }


}
