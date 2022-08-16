import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InstructorLessonsService {

  constructor(private http: HttpClient) { }

  public getInstructorLessons(idInstructor: number): Observable<any>{
    return this.http.get("http://localhost:5289/api/Lesson/InstructorLecciones/"+idInstructor);
  }
}
