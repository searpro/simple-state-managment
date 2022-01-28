import { Component, Input, OnInit } from '@angular/core';
import { StoreService } from './store.service';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name }}!</h1> <code>{{ appName | async }}</code><app-child></app-child>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent implements OnInit {
  constructor(public store: StoreService) {
    this.appName;
  }
  appName: any;
  @Input() name: string;
  ngOnInit() {
    this.appName = this.store.getItem('APP_NAME');
  }
}
