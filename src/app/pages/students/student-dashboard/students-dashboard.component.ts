import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { SaralTablesComponent } from '../../../core/components/saral-tables/saral-tables.component';


@Component({
  selector: 'app-saral-students',
  imports: [FormsModule ,ToolbarModule, ButtonModule, SplitButtonModule, InputTextModule, DropdownModule ,SaralTablesComponent],
  templateUrl: './students-dashboard.component.html',
  styleUrl: './students-dashboard.component.css',
  // standalone: true
})
export class StudentsComponent {
  items: MenuItem[] | undefined;

  classes: any;

  division : any

  selectedClass: string | undefined ;
  selectedDivision: string | undefined ;

  ngOnInit() {
    this.items = [
      {
        label: 'Update',
        icon: 'pi pi-refresh'
      },
      {
        label: 'Delete',
        icon: 'pi pi-times'
      }
    ];
    this.classes = [
      { name: 'Class 1', code: '1' },
      { name: 'Class 2', code: '2' },
      { name: 'Class 3', code: '3' },
      { name: 'Class 4', code: '4' },
      { name: 'Class 5', code: '5' },
      { name: 'Class 6', code: '6' },
      { name: 'Class 7', code: '7' },
      { name: 'Class 8', code: '8' },
      { name: 'Class 9', code: '9' },
      { name: 'Class 10', code: '10' },
    ];
    this.division = [
      { name: 'A', code: 'A' },
      { name: 'B', code: 'C' },
      { name: 'C', code: 'B' },
      { name: 'D', code: 'D' },
    ];
  }
}
