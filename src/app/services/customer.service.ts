import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  getCustomers() {
    let url = environment.CUSTOMER_BASE_URL+environment.CUSTOMER.GET_ALL_CUSTOMER;
    return this.httpClient.get(url);
  }

  viewCustomer(id) {
    let url = environment.CUSTOMER_BASE_URL+environment.CUSTOMER.GET_CUSTOMER+'?id='+id;   
    return this.httpClient.get(url);    
  }

  editCustomer(id, customerObj) {


  }

  deleteCustomerComponent(id) {

  }
}
