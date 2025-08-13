import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

// @Component: Визначає компонент із селектором app-tasks, який буде вставлятися в шаблон як <app-tasks>
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
// Дозволяє компоненту приймати властивість name від батьківського компонента (у цьому випадку AppComponent).
// Опція required: true гарантує, що name завжди буде передано, інакше Angular видасть помилку.
// або якщо ім'я не визначено спочатку, воно може містити рядок, але також може бути невизначеним.
// @Input() name: string | undefined;
// отримали від батьківського компонента
	@Input({required: true}) userId!: string;
	@Input({required: true}) name!: string;

	// Властивість від якої буде залежати відображення компонента додавання таски
	isAddingTask = false;

	// 1 варіант інєкції
	// private tasksService : TasksServiсe;
	// constructor(tasksService : TasksServiсe) {
	// 	this.tasksService = tasksService;
	// }

	// 2 варіант інєкції
	constructor(private tasksService : TasksService) {
		this.tasksService = tasksService;
 }

	get selectedUserTasks () {
		return this.tasksService.getUserTasks (this.userId);
	}

	onStartAddTask() {
		this.isAddingTask = true;
	}
	
	onCloseAddTask() {
		this.isAddingTask = false;
	}

}
