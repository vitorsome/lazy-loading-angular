import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor() {
    console.log("Hey! I'm loaded - Details (Home) Component");
  }

  ngOnInit(): void {
  }

}
