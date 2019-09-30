import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DogListComponentComponent } from './dog-list-component/dog-list-component.component';
import { DogComponent } from './dog-list-component/dog/dog.component';

@NgModule({
  declarations: [
    AppComponent,
    DogListComponentComponent,
    DogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
