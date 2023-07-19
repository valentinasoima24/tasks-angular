import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public isDisplayed: boolean = false;
  public label: string = 'Show';
  public names: string[] = ["Valentina", "Elisei", "Sami", "Darian"];

  constructor() { }

  ngOnInit(): void {
  }

  toggleList() {
    this.isDisplayed = !this.isDisplayed;
    this.label = this.isDisplayed ? 'Hide' : 'Show';
  }


}
