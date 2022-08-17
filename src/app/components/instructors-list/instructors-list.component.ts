import { Component, OnInit } from '@angular/core';
import { InstructorsListService } from 'src/app/Services/InstructorsList/instructors-list.service';
import { InstructorLessonsService } from 'src/app/Services/InstructorLessons/instructor-lessons.service'; 

export interface PeriodicElement {
  name: string;
  position: number;
  uin: number;
  type: string;
  currency: string;
  price: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Jhon hernandez', uin: 1.0079, type: 'Local', currency:'COP', price: 25000},
  {position: 2, name: 'Ana Gomez', uin: 4.0026, type: 'Local', currency:'COP', price: 35000},
  {position: 3, name: 'Diego Zamudio', uin: 6.941, type: 'Local', currency:'COP', price: 27000},
];

// id, name, typeInstructor, typeCurrency, priceHour

@Component({
  selector: 'app-instructors-list',
  templateUrl: './instructors-list.component.html',
  styleUrls: ['./instructors-list.component.scss']
})
export class InstructorsListComponent implements OnInit {

  allInstructors: any = [];
  allInstructorsLessons: any = [];

  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-uin', 'demo-type', 'demo-currency', 'demo-price', 'demo-honorario'];
  dataSource = this.allInstructors;

  constructor(private service: InstructorsListService, private serviceLessons: InstructorLessonsService) { }

  ngOnInit(): void {
    this.service.getAllInstructors().subscribe(instructors => {
      this.allInstructors = instructors.response;
      console.log(this.allInstructors);
    })
    console.log(this.allInstructors);
  }

}
