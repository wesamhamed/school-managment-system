import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CoursesComponent } from './courses/courses.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { AddCourseComponent } from './admin/add-course/add-course.component';
import { AddParentComponent } from './admin/add-parent/add-parent.component';
import { AddStudentComponent } from './admin/add-student/add-student.component';
import { AddTeacherComponent } from './admin/add-teacher/add-teacher.component';
import { EditCourseComponent } from './admin/edit-course/edit-course.component';
import { EditParentComponent } from './admin/edit-parent/edit-parent.component';
import { EditStudentComponent } from './admin/edit-student/edit-student.component';
import { EditTeacherComponent } from './admin/edit-teacher/edit-teacher.component';
import { ParentsComponent } from './admin/parents/parents.component';
import { StudentsComponent } from './admin/students/students.component';
import { TeachersComponent } from './admin/teachers/teachers.component'
@NgModule({
  declarations: [
     AppComponent,
    HomeComponent,
    CoursesComponent,
    LoginComponent,
    ProductComponent,
    ProfileComponent,
    SignupComponent,
    AddCourseComponent,
    AddParentComponent,
    AddStudentComponent,
    AddTeacherComponent,
    EditCourseComponent,
    EditParentComponent,
    EditStudentComponent,
    EditTeacherComponent,
    ParentsComponent,
    StudentsComponent,
    TeachersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
