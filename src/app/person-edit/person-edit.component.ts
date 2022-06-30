import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Person } from 'src/person';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css'],
})
export class PersonEditComponent implements OnInit {
  person?: Person;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private personService: PersonService
  ) {}

  getPerson(): void {
    const id = +Number(this.route.snapshot.paramMap.get('id'));
    this.person = this.personService.getPersonById(id);
  }

  back(): void {
    this.location.back();
  }

  save(): void {
    const person: Person = this.person as Person;
    this.personService.updatePerson(person);
    this.back();
  }

  ngOnInit(): void {
    this.getPerson();
  }
}
