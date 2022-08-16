import { Component, OnInit } from '@angular/core'; 
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DialogAddedElementComponent } from '../dialog-added-element/dialog-added-element.component';
import { MatDialog } from '@angular/material/dialog';
import { AddInstructorService } from 'src/app/Services/AddInstructor/add-instructor.service';

@Component({
  selector: 'app-add-instructor',
  templateUrl: './add-instructor.component.html',
  styleUrls: ['./add-instructor.component.scss']
})
export class AddInstructorComponent implements OnInit {

  private URL_NEW_INSTRUCTOR: string = "http://localhost:5289/api/Instructor/Guardar"; 

  public instructorsForm!: FormGroup;

  currencyCodes: any = [];

  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
  ];

  constructor(private http: HttpClient, private matDialog: MatDialog, private service: AddInstructorService) { }

  ngOnInit(): void {
    this.buildForm();
    this.submit();
    this.ActiveButton();

    this.service.getAllCodes().subscribe(codeCountry => {
      this.currencyCodes = codeCountry.supported_codes;
      console.log(this.currencyCodes);
    })
  }

  buildForm() {
    this.instructorsForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(40)]),
      id: new FormControl('', [Validators.pattern(new RegExp('^[0-9,$]*$')), Validators.required]),
      dateBirth: new FormControl('', [Validators.required]), 
      typeInstructor: new FormControl('', [Validators.required]),
      typeCurrency: new FormControl('COP', [Validators.required]),
      priceHour: new FormControl('', [Validators.pattern(new RegExp('^[0-9,$]*$')), Validators.required]),
    })
  }

  //desactiva select con las monedas
  activeSelectCodes(){
    if (this.instructorsForm.value.typeInstructor === 'exranjero') {
      return false
    }else{
      //si es local = moneda colombiana
      this.instructorsForm.value.typeCurrency = "COP";
      console.log(this.instructorsForm.value);
      
      return true
    }
  }

  ActiveButton(){//si algun campo no cumple no permite enviar
    if (this.instructorsForm.status === "INVALID") {
      return true //
    }else{
      return true
    }
  }

  onOpenDialogClick(){
    this.matDialog.open(DialogAddedElementComponent);
  }

  submit(){
    console.log(this.instructorsForm.value);
    this.http.post(this.URL_NEW_INSTRUCTOR, this.instructorsForm.value) //funciona creacion de instructor
    .subscribe((res) => {
      console.log(res);
      this.onOpenDialogClick();
    })
  }
}
