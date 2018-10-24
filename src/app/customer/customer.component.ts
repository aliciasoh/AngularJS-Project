import { Component, OnInit } from '@angular/core';

import { Customer } from '../customer';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  nationalities=[''];
  customer = new Customer(1, '', '', 23);

  submitted = false;

  onSubmit(){
    this.submitted = true;
  }
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://restcountries.eu/rest/v2/all').subscribe(data => {
      for (var key in data) {
        if (data.hasOwnProperty(key)) {
            this.nationalities.push(data[key].name);
        }
    }
   });
  }

}
