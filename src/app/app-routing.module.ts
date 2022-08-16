import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInstructorComponent } from './components/add-instructor/add-instructor.component';
import { AddLessonComponent } from './components/add-lesson/add-lesson.component';
import { InstructorDetailsComponent } from './components/instructor-details/instructor-details.component';
import { InstructorsListComponent } from './components/instructors-list/instructors-list.component';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'instructores',
    component: InstructorsListComponent
  },
  {
    path: 'agregar-instructor',
    component: AddInstructorComponent,
  },
  {
    path: 'detalles-instructor/:id',
    component: InstructorDetailsComponent
  },
  {
    path: 'agregar-leccion/:idInstructor',
    component: AddLessonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
