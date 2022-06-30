import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonListComponent } from './person-list/person-list.component';
import { PersonEditComponent } from './person-edit/person-edit.component';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: PersonListComponent },
  { path: 'person/:id', component: PersonEditComponent },
  { path: 'delete/:id', component: ConfirmDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
