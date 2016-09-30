import { Component } from '@angular/core';

@Component({
    selector: 'taskform', //used as <taskform></taskform>
    templateUrl: '/app/task/task-form-widget.html'
})

export class TaskFormComponent {
    checkLength ( string ) {
        return string.length >= 3;
    }
}

/*
HOME WORK
1. With #AngularId to rewrite logic for icons of the task
2. From an array to display values with checkboxes in a div.
    Display checked values alongside in other div and remove them from previous
*/
