import { Component, OnInit } from '@angular/core';

import { Customer } from '../customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  nationalities=['', 'US', 'UK', 'Iceland', 'South Korea'];
  customer = new Customer(1, '', '', 23);

  submitted = false;

  onSubmit(){
    this.submitted = true;
  }
  constructor() { }

  ngOnInit() {
  }

}
