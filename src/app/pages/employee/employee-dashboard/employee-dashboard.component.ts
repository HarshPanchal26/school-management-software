import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { SaralTablesComponent } from '../../../core/components/saral-tables/saral-tables.component';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-employee-dashboard',
  imports: [FormsModule ,ToolbarModule, ButtonModule, SplitButtonModule, InputTextModule, DropdownModule ,SaralTablesComponent],
  templateUrl: './employee-dashboard.component.html',
  styleUrl: './employee-dashboard.component.css'
})
export class EmployeeDashboardComponent {
  items: MenuItem[] | undefined;

  cities: City[] | undefined;

  selectedCity: City | undefined ;

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
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }
}
