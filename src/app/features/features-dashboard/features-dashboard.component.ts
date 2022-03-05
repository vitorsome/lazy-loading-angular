import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features-dashboard',
  templateUrl: './features-dashboard.component.html',
  styleUrls: ['./features-dashboard.component.scss']
})
export class FeaturesDashboardComponent implements OnInit {

  constructor() {
    console.log("Hey! I'm loaded - Feature Dashboard Component");
  }

  ngOnInit(): void {
  }

}
