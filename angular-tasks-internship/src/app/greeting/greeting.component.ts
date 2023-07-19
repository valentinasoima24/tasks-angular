import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

  ngOnInit(): void {
  }
  public inputValue: string = "";
  public isDisabled: boolean = true;

  enableInput() {
    this.isDisabled = false;
  }

  constructor() { }
}
