import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

  public inputValue: string = "";
  public isDisabled: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  enableInput() {
    this.isDisabled = false;
  }
}
