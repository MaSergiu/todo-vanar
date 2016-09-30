import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

//personal components
//import { TaskComponent } from './task/task.component';
//import { TaskListComponent } from './task/task-list.component';
import { TaskFormComponent } from './task/task-form.component';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent, /*TaskListComponent, TaskComponent, */ TaskFormComponent ],
    bootstrap: [ AppComponent, /*TaskListComponent, TaskComponent, */ TaskFormComponent ]
})
export class AppModule { }
