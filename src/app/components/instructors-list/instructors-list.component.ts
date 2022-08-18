import { Component, OnInit } from '@angular/core';
import { InstructorsListService } from 'src/app/Services/InstructorsList/instructors-list.service';

@Component({
  selector: 'app-instructors-list',
  templateUrl: './instructors-list.component.html',
  styleUrls: ['./instructors-list.component.scss']
})
export class InstructorsListComponent implements OnInit {

  allInstructors: any = [];
  allInstructorsLessons: any;

  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-uin', 'demo-type', 'demo-currency', 'demo-price', 'demo-honorario'];
  dataSource = this.allInstructors;

  constructor(private service: InstructorsListService) { }

  // convertToCOP(toConvert: string, totalValue: number){
  //   this.service.convertToCOP(toConvert, totalValue).subscribe(value => {
  //     return value.conversion_result;
  //   })
  // }

  convertToCOP(){
    for (let i = 0; i < this.allInstructors.length; i++) {
      this.service.convertToCOP(this.allInstructors[i].typeCurrency, this.allInstructors[i].priceHour).subscribe(value => {
        //calculo el pago del mes segun horas trabajadas y conversion de su moneda a la colombiana
        this.allInstructors[i].monthlyPayment = value.conversion_result.toFixed(2)
        return value.conversion_result;
      })
    }
  }  

  ngOnInit(): void {
    this.service.getAllInstructors().subscribe(instructors => {
      this.allInstructors = instructors.response;
      this.convertToCOP();
      console.log(this.allInstructors);
    })
  }

}
