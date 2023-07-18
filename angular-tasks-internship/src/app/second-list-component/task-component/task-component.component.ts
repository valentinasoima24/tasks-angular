import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-component',
  templateUrl: './task-component.component.html',
  styleUrls: ['./task-component.component.css']
})
export class TaskComponentComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }

  name = "Delete";
  @Input() text: string;
}
