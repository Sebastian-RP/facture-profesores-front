import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-lesson',
  templateUrl: './add-lesson.component.html',
  styleUrls: ['./add-lesson.component.scss']
})
export class AddLessonComponent implements OnInit {

  private URL_NEW_LESSON: string = "http://localhost:5289/api/Lesson/Guardar"; 
  
  public idParam: number = 0;

  public sendData = {
    lessonDate: "",
    durationLesson: 0,
    instructorId: 0
  }
  public LessonsForm!: FormGroup;

  constructor(private activateRoute: ActivatedRoute, private http: HttpClient) { 
    this.activateRoute.params.subscribe(params => {
      this.idParam = params["idInstructor"];
      console.log(this.idParam);
    })
  }

  ngOnInit(): void {
    this.buildForm();
    this.ActiveButton();
    this.submit();
  }
  
  buildForm() {
    this.LessonsForm = new FormGroup({
      lessonDate: new FormControl('', [Validators.required]), 
      durationLesson: new FormControl('', [Validators.required]),
    })
  }

  ActiveButton(){//si algun campo no cumple no permite enviar
    if (this.LessonsForm.status === "INVALID") {
      return true // 
    }else{
      return true
    }
  }

  submit(){
    console.log(this.LessonsForm);
    this.LessonsForm.value.instructorId = this.idParam;

    this.sendData.instructorId = this.idParam;
    this.sendData.durationLesson =  this.LessonsForm.value.durationLesson;
    this.sendData.lessonDate = this.LessonsForm.value.lessonDate;
    //this.sendData.lessonDate = "08/10/2022";

    this.http.post(this.URL_NEW_LESSON, this.sendData) //funciona creacion de instructor
    .subscribe((res) => {
      console.log(res);
    })
  }

}
