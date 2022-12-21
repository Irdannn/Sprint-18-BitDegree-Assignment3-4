import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  paragraph1 = "This is my first App using Angular";
  paragraph2 = "I fall asleep of confusion";
  paragraph3 = "However, i read again the Step that BitDegree creating for me. And i think i can do this!";
  constructor() {}
  ngOnInit(): void {
    
  }
}