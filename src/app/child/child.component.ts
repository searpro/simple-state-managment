import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  appVersion: any;
  customName: any = 0;

  constructor(public store: StoreService) {}

  ngOnInit() {
    //store will give you and observable. Either subscribe or async it. :)
    this.customName = this.store.getItem('APP_ONLINE');
  }

  updateVersion() {
    //the value will be persisted in localStorage. And will be reactive.
    this.store.setItem('APP_NAME', this.appVersion);
  }
}
