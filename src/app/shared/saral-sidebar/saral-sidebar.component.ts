import { Component, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClassModule } from 'primeng/styleclass';
import { Sidebar } from 'primeng/sidebar';


interface NavItem {
  title: string;
  icon: string;
  href: string;
}

@Component({
  selector: 'app-saral-sidebar',
  imports: [SidebarModule, ButtonModule, RippleModule, AvatarModule, StyleClassModule ,RouterLink],
  templateUrl: './saral-sidebar.component.html',
  styleUrl: './saral-sidebar.component.css'
})
export class SaralSidebarComponent {

  navigation: NavItem[]
  constructor() {
    // const userRole = this.authService.currentUserValue?.role || 'teacher';
    this.navigation = [
      { title: 'Dashboard', icon: 'dashboard', href: '/dashboard' },
      { title: 'Students', icon: 'boy', href: '/dashboard/students' },
      { title: 'Classes', icon: 'slab_serif', href: '/dashboard/classes' },
      { title: 'Employee', icon: 'person_apron', href: '/dashboard/employees' },
      { title: 'Subjects', icon: 'auto_stories', href: '/dashboard/subjects' },
      { title: 'Accounts', icon: 'account_balance_wallet', href: '/dashboard/settings' },
      { title: 'Fees', icon: 'currency_rupee', href: '/dashboard/settings' },
      { title: 'Event/Activity', icon: 'event_note', href: '/dashboard/settings' },
      { title: 'Exam', icon: 'note_alt', href: '/dashboard/settings' },
      { title: 'Reports', icon: 'lab_profile', href: '/dashboard/settings' },
    ];
  }

  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

    closeCallback(e : any): void {
        this.sidebarRef.close(e);
    }

    sidebarVisible: boolean = false;

}
