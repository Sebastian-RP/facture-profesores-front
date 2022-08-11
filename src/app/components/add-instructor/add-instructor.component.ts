import { Component, OnInit } from '@angular/core'; 
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-instructor',
  templateUrl: './add-instructor.component.html',
  styleUrls: ['./add-instructor.component.scss']
})
export class AddInstructorComponent implements OnInit {

  public instructorsForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.instructorsForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      uin: new FormControl('', [Validators.required]),
      birth: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      currency: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
    })
  }

  submit(){
    console.log(this.instructorsForm.value);
  }

}
