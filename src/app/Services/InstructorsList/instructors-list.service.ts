import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InstructorsListService {

  private PERSONAL_KEY = "5f5c0bc22c0e6c805f6f02c3";

  private urlConvertCurrency: string = "https://v6.exchangerate-api.com/v6/"+this.PERSONAL_KEY+"/pair/";

  private API_INSTRUCTORES = 'http://localhost:5289/api/Instructor/Lista';
  private INSTRUCTORES_HORASxMES = 'http://localhost:5289/api/MonthlyHours/lista';

  constructor(private http: HttpClient) { }

  public getAllInstructors(): Observable<any>{
    return this.http.get(this.INSTRUCTORES_HORASxMES);
  }

  // convertir la moneda extranjera a pesos  colombianos y el monto a convertir
  public convertToCOP(toConvert: string, totalValue: number):  Observable<any>{
    return this.http.get(this.urlConvertCurrency+toConvert+"/COP/"+totalValue);
  }
}
