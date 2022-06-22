import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-content',
  templateUrl: './layout-content.component.html',
  styleUrls: ['./layout-content.component.css']
})
export class LayoutContentComponent implements OnInit {
  sideBarOpen = true;
  constructor() { }

  ngOnInit() {
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
