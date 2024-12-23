import { Component, Input } from '@angular/core';
import { NgIf , NgFor } from '@angular/common';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-saral-modal',
  imports: [NgIf],
  templateUrl: './saral-modal.component.html',
  styleUrl: './saral-modal.component.css'
})

export class SaralModalComponent {

  @Input() isOpen : boolean = false
}
