import { Component } from '@angular/core';

@Component({
    selector: 'task', //used as <task></task>
    templateUrl: '/app/task/task-widget.html'
})
export class TaskComponent {
    title = "Title of my task!";
    status = 0; // 0 => just created; 1 => started; 2 => finished; 3 => canceled; 4 => deleted
}
