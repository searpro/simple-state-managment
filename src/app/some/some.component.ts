import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-some',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.css'],
})
export class SomeComponent implements OnInit {
  text: any;
appName: any;

  constructor(public store: StoreService) {}

  ngOnInit() {
    this.store.getItem('APP_NAME').subscribe(val=>{
      this.appName = val; 
    })
  }

  update() {
    this.store.setItem('APP_TITLE', this.text);
    let complexObject = {
      products: [
        { title: 'Laerdal' },
        {
          title: this.text,
          meta: ['outside', 'UNITED STATES', 'England'],
        },
        { title: 'American Academy of Pediatrics' },
        { title: 'Canadian Paediatric Society' },
        { title: this.appName },
      ],
    };
    this.store.setItem('complexObject', complexObject, true);
  }
}
