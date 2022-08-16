import { Component, OnInit } from '@angular/core';
import { InstructorsListService } from 'src/app/Services/InstructorsList/instructors-list.service';

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
  {position: 4, name: 'Jackson Smith', uin: 9.0122, type: 'Extranjero', currency:'US', price: 10.5},
  {position: 5, name: 'Diego Morales', uin: 10.811, type: 'Local', currency:'COP', price: 22000},
  {position: 6, name: 'Liam Brown', uin: 12.0107, type: 'Extranjero', currency:'US', price: 9.5},
  {position: 7, name: 'Harry Rossi', uin: 14.0067, type: 'Extranjero', currency:'EUR', price: 8.6},
  {position: 8, name: 'Tatiana Romero', uin: 15.9994, type: 'Local', currency:'COP', price: 28000},
  {position: 9, name: 'Brayan Garcia', uin: 18.9984, type: 'Local', currency:'COP', price: 31000},
  {position: 10, name: 'Lucas Miller', uin: 20.1797, type: 'Extranjero', currency:'US', price: 8.3},
];

// id, name, typeInstructor, typeCurrency, priceHour

@Component({
  selector: 'app-instructors-list',
  templateUrl: './instructors-list.component.html',
  styleUrls: ['./instructors-list.component.scss']
})
export class InstructorsListComponent implements OnInit {

  allInstructors: any = [];

  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-uin', 'demo-type', 'demo-currency', 'demo-price'];
  dataSource = this.allInstructors;

  constructor(private service: InstructorsListService) { }

  ngOnInit(): void {
    this.service.getAllInstructors().subscribe(instructors => {
      this.allInstructors = instructors.response;
      console.log(this.allInstructors);
    })
  }

}
