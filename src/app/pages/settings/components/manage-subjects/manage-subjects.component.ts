import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor  , NgIf} from '@angular/common';
import { SaralModalComponent } from "../../../../core/components/saral-modal/saral-modal.component";


// interface ClassDivision {
//   class: string;
//   divisions: string[];
// }

// interface Subject {
//   name: string;
// }

// interface ClassDivisionSubjects {
//   class: string;
//   division: string;
//   subjects: Subject[];
// }

interface Subject {
  id: number;
  name: string;
  color: string;
}

@Component({
  selector: 'app-manage-subjects',
  imports: [FormsModule, NgFor, SaralModalComponent],
  templateUrl: './manage-subjects.component.html',
  styleUrl: './manage-subjects.component.css'
})

export class ManageSubjectsComponent {
  selectedClass: string = '';
  selectedDivision: string = '';
  isAddModalOpen: boolean = false;
  newSubjectName: string = '';

  subjects: Subject[] = [
    { id: 1, name: 'Mathematics', color: 'bg-blue-200' },
    { id: 2, name: 'Science', color: 'bg-green-200' },
    { id: 3, name: 'English', color: 'bg-yellow-200' },
    { id: 4, name: 'History', color: 'bg-red-200' },
    { id: 5, name: 'Geography', color: 'bg-purple-200' },
    { id: 6, name: 'Art', color: 'bg-pink-200' },
  ];

  openAddSubjectModal() {
    this.isAddModalOpen = true;
  }

  closeAddSubjectModal() {
    this.isAddModalOpen = false;
    this.newSubjectName = '';
  }

  addSubject() {
    if (this.newSubjectName.trim()) {
      const newSubject: Subject = {
        id: this.subjects.length + 1,
        name: this.newSubjectName.trim(),
        color: `bg-${this.getRandomColor()}-200`
      };
      this.subjects.push(newSubject);
      this.closeAddSubjectModal();
    }
  }

  private getRandomColor(): string {
    const colors = ['blue', 'green', 'yellow', 'red', 'purple', 'pink', 'indigo', 'teal'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
}
