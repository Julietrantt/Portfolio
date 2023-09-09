import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  constructor() {
    document.getElementById('myStyle')?.setAttribute('class', ' ');
    document.getElementById('myStyle2')?.setAttribute('class', ' ');
    document.getElementById('myStyle3')?.setAttribute('class', ' container');
  }

  ngOnInit(): void { }
}
