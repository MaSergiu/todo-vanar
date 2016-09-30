import { Component } from '@angular/core';

@Component({
    selector: 'tasklist', //used as <tasklist></tasklist>
    templateUrl: '/app/task/task-list-widget.html'
})
export class TaskListComponent {
    title = "List of tasks";

    tasksDatabase = [
        {title: 'Task 1', managers: ['Manager 1']},
        {title: 'Task 2', managers: ['Manager 2', "Manager 22"]},
        {title: 'Task 3', managers: ['Manager 3', "Manager 33", 'Manager 333']}
    ];
}
