import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-another',
  template: `
    <h1>Dashboard</h1>
    <hr>
    <h3>Welcome! to the dashboard</h3>
  `,
  styles: []
})
export class AnotherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
