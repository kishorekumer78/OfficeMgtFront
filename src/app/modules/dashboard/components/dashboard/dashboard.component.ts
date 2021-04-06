import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  open: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  sidebarAction() {
    this.open = !this.open;
    console.log(this.open);
  }

}
