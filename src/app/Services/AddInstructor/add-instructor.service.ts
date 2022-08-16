import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddInstructorService {

  private PERSONAL_KEY = "5f5c0bc22c0e6c805f6f02c3";

  private URL_CURRENCY_CODES = "https://v6.exchangerate-api.com/v6/"+this.PERSONAL_KEY+"/codes"

  constructor(private http: HttpClient) { }

  public getAllCodes(): Observable<any>{
    return this.http.get(this.URL_CURRENCY_CODES)
  }
}
