import { Component, OnInit, Input } from '@angular/core';
import { Task } from './Task';

@Component({
  selector: 'app-second-list-component',
  templateUrl: './second-list-component.component.html',
  styleUrls: ['./second-list-component.component.css'],
})
export class SecondListComponentComponent implements OnInit {

  tasks: Task[] = [{ id: 1, text: 'buy milk' }, { id: 2, text: 'shopping' }, { id: 3, text: 'go to gym' }];

  constructor() { }

  ngOnInit(): void {
  }

  public recieveItem(id: number) {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
}
