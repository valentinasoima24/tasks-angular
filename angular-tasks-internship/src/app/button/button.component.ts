import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  title: string = 'task1-angular-project';
  greeting: string = "SALUT";

  constructor() { }

  ngOnInit(): void {
  }
}
