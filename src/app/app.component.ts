import { Component, OnInit, VERSION } from '@angular/core';
import { map } from 'rxjs';
import { StoreService } from './store.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  //name = 'Angular ' + VERSION.major;
  name: any;
  complexObject: any;

  constructor(public store: StoreService) {}

  ngOnInit() {
    //store is persisted. I will not go away if you refresh.
    this.name = this.store.getItem('APP_TITLE'); // this is a simple string. This item gets modified from child components.
    this.complexObject = this.store.getItem('complexObject', true); // this is a complex json object. This object is also getting modified in child component.
  }
}
