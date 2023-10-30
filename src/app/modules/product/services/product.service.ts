import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environments } from 'src/environment/environment.prod';
import { ProductInterface } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = environments.baseUrl;
  private groupName = 'user';
  
  public productList$ = new Subject<void>();
  public selectedProduct$ = new Subject<ProductInterface>();

  constructor(private httpClient:HttpClient) { }


}
