import { Component, OnInit, Input } from '@angular/core';
import { Task } from './Task';

@Component({
  selector: 'app-second-list-component',
  templateUrl: './second-list-component.component.html',
  styleUrls: ['./second-list-component.component.css'],
})
export class SecondListComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tasks: Task[] = [{ id: 1, text: 'buy milk' }, { id: 2, text: 'shopping' }, { id: 3, text: 'go to gym' }];

  public recieveItem(id: number) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].id == id) {
        this.tasks.splice(i, 1);
      }
    }
  }
}

