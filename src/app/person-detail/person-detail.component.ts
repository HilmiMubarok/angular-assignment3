import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Person } from 'src/person';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css'],
})
export class PersonDetailComponent implements OnInit {
  @Input() person?: Person;
  constructor(private router: Router) {}

  editPerson(person: Person): void {
    this.router.navigate(['person', person?.id]);
  }

  deletePerson(person: Person): void {
    this.router.navigate(['delete', person?.id]);
  }

  ngOnInit(): void {}
}
