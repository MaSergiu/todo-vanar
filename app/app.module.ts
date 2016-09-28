import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

//personal components
import { TaskComponent } from'./task/task.component'

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent, TaskComponent ],
    bootstrap: [ AppComponent, TaskComponent ]
})
export class AppModule { }
