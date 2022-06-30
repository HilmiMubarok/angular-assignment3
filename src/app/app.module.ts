import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonEditComponent } from './person-edit/person-edit.component';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonDetailComponent,
    PersonEditComponent,
    ConfirmDeleteComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
