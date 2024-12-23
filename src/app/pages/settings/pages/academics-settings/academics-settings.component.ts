import { Component } from '@angular/core';
import { NgIf , NgFor} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ManageSubjectsComponent } from '../../components/manage-subjects/manage-subjects.component';

interface ClassDivision {
  class: string;
  divisions: string[];
}

interface Subject {
  name: string;
}

interface ClassDivisionSubjects {
  class: string;
  division: string;
  subjects: Subject[];
}
interface Subject {
  id: number;
  name: string;
  color: string;
}


@Component({
  selector: 'app-academics-settings',
  imports: [NgIf , NgFor ,FormsModule , ManageSubjectsComponent],
  templateUrl: './academics-settings.component.html',
  styleUrl: './academics-settings.component.css'
})

export class AcademicsSettingsComponent {
  classes = Array.from({ length: 12 }, (_, i) => ({
    value: `class${i + 1}`,
    label: `Class ${i + 1}`,
  }));

  filteredClasses = this.classes;
  selectedClassDivisions: ClassDivision[] = [];
  isDropdownOpen = false;
  subjects: Subject[] = [
    { id: 1, name: 'Mathematics', color: 'bg-blue-200' },
    { id: 2, name: 'Science', color: 'bg-green-200' },
    { id: 3, name: 'English', color: 'bg-yellow-200' },
    { id: 4, name: 'History', color: 'bg-red-200' },
    { id: 5, name: 'Geography', color: 'bg-purple-200' },
    { id: 6, name: 'Art', color: 'bg-pink-200' },
  ];
  isAddModalOpen = false;
  newSubjectName = '';

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  filterClasses(event: Event) {
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredClasses = this.classes.filter(classItem => 
      classItem.label.toLowerCase().includes(searchTerm)
    );
  }

  isClassSelected(value: string): boolean {
    return this.selectedClassDivisions.some(cd => cd.class === value);
  }

  toggleClass(value: string) {
    const index = this.selectedClassDivisions.findIndex(cd => cd.class === value);
    if (index !== -1) {
      this.selectedClassDivisions.splice(index, 1);
    } else {
      this.selectedClassDivisions.push({ class: value, divisions: ['A'] });
    }
    this.selectedClassDivisions.sort((a, b) => a.class.localeCompare(b.class));
  }

  addDivision(classValue: string) {
    const classDivision = this.selectedClassDivisions.find(cd => cd.class === classValue);
    if (classDivision) {
      const lastDivision = classDivision.divisions[classDivision.divisions.length - 1];
      const nextDivision = String.fromCharCode(lastDivision.charCodeAt(0) + 1);
      classDivision.divisions.push(nextDivision);
    }
  }

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
