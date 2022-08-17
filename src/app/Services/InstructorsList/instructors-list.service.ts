import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InstructorsListService {

  private API_INSTRUCTORES = 'http://localhost:5289/api/Instructor/Lista';
  private INSTRUCTORES_HORASxMES = 'http://localhost:5289/api/MonthlyHours/lista';

  constructor(private http: HttpClient) { }

  public getAllInstructors(): Observable<any>{
    return this.http.get(this.INSTRUCTORES_HORASxMES);
  }
}
