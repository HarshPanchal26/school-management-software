import { Component } from '@angular/core';
import { FormFieldComponent } from '../../../../core/components/form-field/form-field.component';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common'

@Component({
  selector: 'app-general-settings',
  imports: [FormFieldComponent , FormsModule , NgClass],
  templateUrl: './general-settings.component.html',
  styleUrl: './general-settings.component.css'
})
export class GeneralSettingsComponent {

  usernameRegex: RegExp = /^[a-zA-Z0-9]{3,10}$/;
  numberRegex: RegExp = /^\d+$/;


  areFormDetailValid : boolean = true

  formData = {
    username: '',
    age: null,
    country: '',
  };

  onValueChange(value : string | number, field_name : string){
    console.log(value, field_name);
  }

  validateInput(value : boolean , field_name : string){
    this.areFormDetailValid = value
  }

  submitForm() {
    console.log('Form Data:', this.formData);
  }

  schoolName: string = '';
  establishedYear: number | null = null;
  schoolType: string = '';
  studentCapacity: number | null = null;
  schoolDescription: string = '';

  // Add User
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  role: string = '';

  // Course Registration
  courseName: string = '';
  courseCode: string = '';
  instructor: string = '';
  maxStudents: number | null = null;
  courseDescription: string = '';

  
  onSubmitSchoolDetails() {
    console.log('School Details:', {
      schoolName: this.schoolName,
      establishedYear: this.establishedYear,
      schoolType: this.schoolType,
      studentCapacity: this.studentCapacity,
      schoolDescription: this.schoolDescription,
    });
    // Add logic to submit school details
  }

  // Add User methods

  onSubmitAddUser() {
    console.log('Add User:', {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      role: this.role,
    });
    // Add logic to submit new user
  }

  // Course Registration methods

  onSubmitCourseRegistration() {
    console.log('Course Registration:', {
      courseName: this.courseName,
      courseCode: this.courseCode,
      instructor: this.instructor,
      maxStudents: this.maxStudents,
      courseDescription: this.courseDescription,
    });
    // Add logic to submit course registration
  }
}
