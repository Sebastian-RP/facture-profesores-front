import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LandingComponent } from './components/landing/landing.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { InstructorsListComponent } from './components/instructors-list/instructors-list.component';
import { AddInstructorComponent } from './components/add-instructor/add-instructor.component';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { InstructorDetailsComponent } from './components/instructor-details/instructor-details.component';
import { AddLessonComponent } from './components/add-lesson/add-lesson.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogAddedElementComponent } from './components/dialog-added-element/dialog-added-element.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    InstructorsListComponent,
    AddInstructorComponent,
    InstructorDetailsComponent,
    AddLessonComponent,
    DialogAddedElementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatProgressBarModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    MatTableModule,
    MatFormFieldModule,
    FormsModule, 
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
