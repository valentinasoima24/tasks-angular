import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public isDisplayed: boolean = false;
  public label: string = 'Show';
  public names = ["Valentina", "Elisei", "Sami", "Darian"];

  toggleList() {
    this.isDisplayed = !this.isDisplayed;
    this.label = this.isDisplayed ? 'Hide' : 'Show';
  }

}
