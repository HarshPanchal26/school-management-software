import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../types/auth';
import { SaralSidebarComponent } from '../saral-sidebar/saral-sidebar.component';

@Component({
  selector: 'app-saral-header',
  imports: [],
  templateUrl: './saral-header.component.html',
  styleUrl: './saral-header.component.css'
})
export class SaralHeaderComponent {
  @Input() user: User | null = {
    email : "XXXXXXXXXXXXXXX",
    name : "saral",
    role : "admin",
    id : "1" 
  };
}
