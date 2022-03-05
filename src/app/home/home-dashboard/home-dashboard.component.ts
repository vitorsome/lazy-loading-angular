import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.scss']
})
export class HomeDashboardComponent implements OnInit {

  constructor() {
    console.log("Hey! I'm loaded - Home Dashboard Component");
  }

  ngOnInit(): void {
  }

}
