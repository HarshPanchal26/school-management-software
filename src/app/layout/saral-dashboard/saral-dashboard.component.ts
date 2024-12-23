import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { SaralHeaderComponent } from '../../shared/saral-header/saral-header.component';
import { SaralSidebarComponent } from '../../shared/saral-sidebar/saral-sidebar.component';

@Component({
  selector: 'app-saral-dashboard',
  imports: [CommonModule , RouterOutlet , SaralHeaderComponent ,  SaralSidebarComponent],
  templateUrl: './saral-dashboard.component.html',
  styleUrl: './saral-dashboard.component.css'
})
export class SaralDashboardComponent {

  currentUserValue ={
    email : "XXXXXXXXXXXXXXX",
    name : "saral",
    role : "admin",
    id : "1"
  }
}
