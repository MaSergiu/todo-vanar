import { Component } from '@angular/core';

@Component({
    selector: 'task', //used as <task></task>
    templateUrl: '/app/task/task-widget.html'
})
export class TaskComponent {
    title = "Title of my task!";
    // 0 => just created; 1 => started; 2 => finished; 3 => canceled; 4 => deleted
    status = 0;

    deleteTask () {
        this.status = 4;
    }

    /*
        HOME WORK
        if just created - show start and delete buttons
        if started - show finish and cancel buttons
        if finished - show delete button
        if canceled - show start and delete buttons
        if deleted - do not show any buttons
    */
}
