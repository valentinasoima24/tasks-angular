import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { ButtonComponent } from './button/button.component';
import { ListComponent } from './list/list.component';
import { SecondListComponentComponent } from './second-list-component/second-list-component.component';
import { TaskComponentComponent } from './second-list-component/task-component/task-component.component';
import { ButtonTask2Component } from './button-task2/button-task2.component';
import { GreetingComponent } from './greeting/greeting.component';

@NgModule({
	declarations: [AppComponent, ButtonComponent, ListComponent, SecondListComponentComponent, TaskComponentComponent, ButtonTask2Component, GreetingComponent],
	imports: [BrowserModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
