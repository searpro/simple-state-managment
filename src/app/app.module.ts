import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StoreService } from './store.service';
import { ChildComponent } from './child/child.component';
import { SomeComponent } from './some/some.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, ChildComponent, SomeComponent],
  bootstrap: [AppComponent],
  providers: [StoreService],
})
export class AppModule {}
