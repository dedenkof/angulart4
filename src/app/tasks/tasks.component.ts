import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { type NewTaskData } from './task/task.model';

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

	tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

	// Значення залежить від this.tasks після onCompleteTask (id: string)
	// тобто ми відображаємо ті задачі у випадку якщо значення масиву
	// task.userId === значенню яке ми отримали від батьківського компонента @Input({required: true}) userId!: string;
	get selectedUserTasks () {
		return this.tasks.filter((task) => task.userId === this.userId);
	}

	// this.tasks перезаписується цим новим масивом що містить тільки незавершені задачі, замінюючи старий.
	// Перезапис this.tasks: Оскільки this.tasks — це властивість класу TasksComponent, її зміна сигналізує Angular про оновлення стану.
// Change Detection: Angular автоматично запускає цикл виявлення змін, коли this.tasks змінюється. Він:
//Помічає, що this.tasks оновлено.
//Перераховує геттер get selectedUserTasks(), який залежить від this.tasks.
//Оновлює шаблон tasks.component.html, де @for (task of selectedUserTasks; track task.id) перерендерить <ul>, відображаючи лише залишені завдання.
	onCompleteTask (id: string) {
		this.tasks = this.tasks.filter((task) => task.id !== id);
	}

	onStartAddTask() {
		this.isAddingTask = true;
	}
// скасування (закриття форми по кліку Cancel та backdrop)
	onCancelAddTask() {
		this.isAddingTask = false;
	}

	onAddtask (taskData: NewTaskData) {
		this.tasks.push({
			id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
		})
		this.isAddingTask = false;
	}

}
