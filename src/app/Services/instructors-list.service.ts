import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InstructorsListService {

  private API_INSTRUCTORES = 'http://localhost:5289/api/Instructor/Lista';

  constructor(private http: HttpClient) { }

  public getAllInstructors(): Observable<any>{
    return this.http.get(this.API_INSTRUCTORES);
  }
}
