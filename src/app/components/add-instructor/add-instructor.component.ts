import { Component, OnInit } from '@angular/core'; 
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DialogAddedElementComponent } from '../dialog-added-element/dialog-added-element.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-instructor',
  templateUrl: './add-instructor.component.html',
  styleUrls: ['./add-instructor.component.scss']
})
export class AddInstructorComponent implements OnInit {

  private URL_NEW_INSTRUCTOR: string = "http://localhost:5289/api/Instructor/Guardar"; 

  public instructorsForm!: FormGroup;

  constructor(private http: HttpClient, private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.buildForm();
    this.submit();
    this.ActiveButton();
  }

  buildForm() {
    this.instructorsForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(40)]),
      id: new FormControl('', [Validators.pattern(new RegExp('^[0-9,$]*$')), Validators.required]),
      dateBirth: new FormControl('', [Validators.required]), 
      typeInstructor: new FormControl('', [Validators.required]),
      typeCurrency: new FormControl('', [Validators.required]),
      priceHour: new FormControl('', [Validators.pattern(new RegExp('^[0-9,$]*$')), Validators.required]),
    })
  }

  ActiveButton(){//si algun campo no cumple no permite enviar
    if (this.instructorsForm.status === "INVALID") {
      return false
    }else{
      return true
    }
  }

  onOpenDialogClick(){
    this.matDialog.open(DialogAddedElementComponent);
  }

  submit(){
    console.log(this.instructorsForm);
    
    this.http.post(this.URL_NEW_INSTRUCTOR, this.instructorsForm.value) //funciona creacion de instructor
    .subscribe((res) => {
      console.log(res);
      this.onOpenDialogClick();
    })

    // this.resetForm();    
  }
}
