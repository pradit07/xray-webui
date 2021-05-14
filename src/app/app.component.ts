import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isCollapsed = true;
  theme = false;
  switch = false;

  ngOnInit() {
    console.log("Init")
    let c = window.localStorage.getItem("theme");
    if (c && c === "dark") {
      this.theme = true
    } else {
      this.theme = false
    }
  }
}