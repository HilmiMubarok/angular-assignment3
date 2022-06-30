import { Injectable } from '@angular/core';

import { Person } from 'src/person';
import { PERSON } from 'src/mock-person';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  public persons: Person[] = [];
  constructor() {}

  getPerson(): Person[] {
    return (this.persons = PERSON);
  }

  getPersonById(id: number): any {
    return this.persons.find((person) => person.id === id);
  }

  updatePerson(person: Person): any {
    const index = this.persons.findIndex((p) => p.id === person.id);
    this.persons[index] = person;
  }

  deletePerson(person: Person): any {
    const index = this.persons.findIndex((p) => p.id === person.id);
    this.persons.splice(index, 1);
  }
}
