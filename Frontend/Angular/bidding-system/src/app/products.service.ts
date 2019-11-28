import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Settings} from './settings';

@Injectable()
export class ProductsService {
  settings;
  http;
  constructor(http: HttpClient) {
    this.http = http;
    this.settings = new Settings();
  }

  public requestProducts(): Observable<any> {
    const url: string = 'http://' + this.settings.defaultUrl + '/api/products';
    return this.http.get(url);
  }
}
