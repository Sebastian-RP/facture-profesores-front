import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstructorLessonsService } from 'src/app/Services/InstructorLessons/instructor-lessons.service';

export interface PeriodicElement {
  id: number;
  lessonDate: string;
  durationLeson: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, lessonDate: 'Hydrogen', durationLeson: 1.0079},
  {id: 2, lessonDate: 'Helium', durationLeson: 4.0026},
  {id: 3, lessonDate: 'Lithium', durationLeson: 6.941},
  {id: 4, lessonDate: 'Beryllium', durationLeson: 9.0122},
  {id: 5, lessonDate: 'Boron', durationLeson: 10.811},
  {id: 6, lessonDate: 'Carbon', durationLeson: 12.0107},
  {id: 7, lessonDate: 'Nitrogen', durationLeson: 14.0067},
  {id: 8, lessonDate: 'Oxygen', durationLeson: 15.9994},
  {id: 9, lessonDate: 'Fluorine', durationLeson: 18.9984},
  {id: 10, lessonDate: 'Neon', durationLeson: 20.1797},
];


@Component({
  selector: 'app-instructor-details',
  templateUrl: './instructor-details.component.html',
  styleUrls: ['./instructor-details.component.scss']
})
export class InstructorDetailsComponent implements OnInit {

  public idParam: number = 0;
  allLessons: any = [];

  displayedColumns: string[] = ['demo-id', 'demo-lessonDate', 'demo-durationLeson'];
  dataSource = ELEMENT_DATA;

  constructor( private activateRoute: ActivatedRoute, private service: InstructorLessonsService ) { 
    this.activateRoute.params.subscribe(params => {
      this.idParam = params["id"];
      console.log(this.idParam);
    })
  }
  
  ngOnInit(): void {
    this.service.getInstructorLessons(this.idParam).subscribe(lessons => {
      this.allLessons = lessons.response;
      console.log(lessons.response);
    })
  }
}
