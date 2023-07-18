import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-list-component',
  templateUrl: './second-list-component.component.html',
  styleUrls: ['./second-list-component.component.css'],
})
export class SecondListComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tasks: string[] = ['clean', 'cook', 'mop', 'iron clothes'];

}
