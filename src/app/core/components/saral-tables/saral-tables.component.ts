import { Component } from '@angular/core';
// import { Customer } from '@domain/customer';
// import { CustomerService } from '@service/customerservice';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';

type Customer ={name : string , country : {name : string} , company  : string , representative : {name : string}}

@Component({
  selector: 'app-saral-tables',
  imports: [TableModule, CommonModule, ButtonModule],
  templateUrl: './saral-tables.component.html',
  styleUrl: './saral-tables.component.css',
})


export class SaralTablesComponent {
    customers!: Customer[];

    first = 0;

    rows = 10;

    constructor() {}

    ngOnInit() {
        // this.customerService.getCustomersLarge().then((customers) => (this.customers = customers));
        this.customers = [
            {name : 'James Butt' , country : {name : "India"} , company  : 'ShilpMIS Technologies' , representative : {name : 'USA'}},
            {name : 'James Butt' , country : {name : "India"} , company  : 'ShilpMIS Technologies' , representative : {name : 'USA'}},
            {name : 'James Butt' , country : {name : "India"} , company  : 'ShilpMIS Technologies' , representative : {name : 'USA'}},
            {name : 'James Butt' , country : {name : "India"} , company  : 'ShilpMIS Technologies' , representative : {name : 'USA'}},
            {name : 'James Butt' , country : {name : "India"} , company  : 'ShilpMIS Technologies' , representative : {name : 'USA'}},
            {name : 'James Butt' , country : {name : "India"} , company  : 'ShilpMIS Technologies' , representative : {name : 'USA'}},
            {name : 'James Butt' , country : {name : "India"} , company  : 'ShilpMIS Technologies' , representative : {name : 'USA'}},
            {name : 'James Butt' , country : {name : "India"} , company  : 'ShilpMIS Technologies' , representative : {name : 'USA'}},
            {name : 'James Butt' , country : {name : "India"} , company  : 'ShilpMIS Technologies' , representative : {name : 'USA'}},
            {name : 'James Butt' , country : {name : "India"} , company  : 'ShilpMIS Technologies' , representative : {name : 'USA'}}
          ] ;
    }

    next() {
        this.first = this.first + this.rows;
    }

    prev() {
        this.first = this.first - this.rows;
    }

    reset() {
        this.first = 0;
    }

    pageChange(event : any) {
        this.first = event.first;
        this.rows = event.rows;
    }

    isLastPage(): boolean {
        return this.customers ? this.first === this.customers.length - this.rows : true;
    }

    isFirstPage(): boolean {
        return this.customers ? this.first === 0 : true;
    }
}
