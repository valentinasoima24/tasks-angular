import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../Task';

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
  @Input() text!: Task;
  @Output() item = new EventEmitter<number>();

  public removeItem() {
    this.item.emit(this.text.id);
  }
}


