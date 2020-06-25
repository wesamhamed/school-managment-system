import { StudentsComponent } from './admin/students/students.component';
import { ParentsComponent } from './admin/parents/parents.component';
import { EditStudentComponent } from './admin/edit-student/edit-student.component';
import { EditTeacherComponent } from './admin/edit-teacher/edit-teacher.component';
import { EditParentComponent } from './admin/edit-parent/edit-parent.component';
import { EditCourseComponent } from './admin/edit-course/edit-course.component';
import { AddTeacherComponent } from './admin/add-teacher/add-teacher.component';
import { AddStudentComponent } from './admin/add-student/add-student.component';
import { AddParentComponent } from './admin/add-parent/add-parent.component';
import { AddCourseComponent } from './admin/add-course/add-course.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';

import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeachersComponent } from './admin/teachers/teachers.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"courses",component:CoursesComponent},
  {path:"login",component:LoginComponent},
  {path:"product",component:ProductComponent},
  {path:"profile",component:ProfileComponent},
  {path:"signup",component:SignupComponent},
  {path:"admin/add-course",component:AddCourseComponent},
  {path:"admin/add-parent",component:AddParentComponent},
  {path:"admin/add-student",component:AddStudentComponent},
  {path:"admin/add-teacher",component:AddTeacherComponent},
  {path:"admin/courses",component:CoursesComponent},
  {path:"admin/edit-course",component:EditCourseComponent},
  {path:"admin/edit-parent",component:EditParentComponent},
  {path:"admin/edit-student",component:EditStudentComponent},
  {path:"admin/edit-teacher",component:EditTeacherComponent},
  {path:"admin/parents",component:ParentsComponent},
  {path:"admin/students",component:StudentsComponent},
  {path:"admin/teachers",component:TeachersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
