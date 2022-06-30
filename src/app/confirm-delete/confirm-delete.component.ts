import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Person } from 'src/person';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css'],
})
export class ConfirmDeleteComponent implements OnInit {
  person?: Person;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private personService: PersonService
  ) {}

  ngOnInit(): void {
    this.getPerson();
  }

  getPerson(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.person = this.personService.getPersonById(id);
  }

  back(): void {
    this.location.back();
  }

  deletePerson(): void {
    const person: Person = this.person as Person;
    this.personService.deletePerson(person);
    this.router.navigate(['']);
  }
}
