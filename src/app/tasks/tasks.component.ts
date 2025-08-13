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
	
	// або якщо ім'я не визначено спочатку, воно
// може містити рядок, але також може бути невизначеним.
// @Input() name: string | undefined;
// отримали від батьківського компонента
	@Input({required: true}) userId!: string;
	@Input({required: true}) name!: string;

	// Властивість від якої буде залежати відображення компонента додавання таски
	isAddingTask = false;

	// 1 варіант
	// private tasksService : TasksServiсe;
	// constructor(tasksService : TasksServiсe) {
	// 	this.tasksService = tasksService;
	// }

	// 2 варіант
	constructor(private tasksService : TasksService) {
		this.tasksService = tasksService;
 }


	// Значення залежить від this.tasks після onCompleteTask (id: string)
	// тобто ми відображаємо ті задачі у випадку якщо значення масиву
	// task.userId === значенню яке ми отримали від батьківського компонента @Input({required: true}) userId!: string;
	get selectedUserTasks () {
		return this.tasksService.getUserTasks (this.userId);
	}

	// this.tasks перезаписується цим новим масивом що містить тільки незавершені задачі, замінюючи старий.
	// Перезапис this.tasks: Оскільки this.tasks — це властивість класу TasksComponent, її зміна сигналізує Angular про оновлення стану.
// Change Detection: Angular автоматично запускає цикл виявлення змін, коли this.tasks змінюється. Він:
//Помічає, що this.tasks оновлено.
//Перераховує геттер get selectedUserTasks(), який залежить від this.tasks.
//Оновлює шаблон tasks.component.html, де @for (task of selectedUserTasks; track task.id) перерендерить <ul>, відображаючи лише залишені завдання.
	// onCompleteTask (id: string) { видаляємо
		
	// }

	onStartAddTask() {
		this.isAddingTask = true;
	}
// скасування (закриття форми по кліку Cancel та backdrop)
	onCloseAddTask() {
		this.isAddingTask = false;
	}

	// onAddtask (taskData: NewTaskData) { // видаляємо бо більше не запускаємо його
		
	// 	this.isAddingTask = false;
	// }

}
