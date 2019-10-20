import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ExampleComponent } from './example/example.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ExampleComponent, ChildComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
