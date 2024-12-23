import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass, NgSwitch , NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css'],
  imports : [NgSwitch , NgClass ,NgIf, FormsModule ]
})

export class FormFieldComponent {

  @Input() fieldType: 'text' | 'number' | 'select' | 'textarea' = 'text'; // Field type
  @Input() label: string = ''; // Field label
  @Input() placeholder: string = ''; // Placeholder text
  @Input() options: string[] | number[] = []; // Options for select dropdown
  @Input() regex: RegExp | null = null; // Regex for validation
  @Input() errorMessage: string = 'Invalid input'; // Error message
  @Input() customStyles: string = ''; // Custom CSS classes
  @Input() defaultValue: any = ''; // Field value

  @Output() valueChange = new EventEmitter<string | number>(); // Output event for value change
  @Output() isValid = new EventEmitter<boolean>(); // Output event for validation status                                    

  error: boolean = false;

  validateInput() {
    if (this.regex) {
      this.error = !this.regex.test(this.defaultValue);
      this.isValid.emit(!this.error);
    }
  }

  onValueChange() {
    this.validateInput();
    this.valueChange.emit(this.defaultValue);
    // this.defaultValue = newValue;
  }
}
