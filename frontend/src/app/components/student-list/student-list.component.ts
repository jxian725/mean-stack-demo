import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})

export class StudentListComponent implements OnInit {
  Student: any = [];

  constructor(private apiService: ApiService) {
    this.readStudent();
  }

  ngOnInit() {}

  readStudent() {
    this.apiService.getStudents().subscribe((data) => {
      this.Student = data;
    });
  }

  removeStudent(student, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService.deleteStudent(student._id).subscribe((data) => {
        this.Student.splice(index, 1);
      });
    }
  }
}
