import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";

// @Component: Визначає компонент із селектором app-tasks, який буде вставлятися в шаблон як <app-tasks>
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
	// Дозволяє компоненту приймати властивість name від батьківського компонента (у цьому випадку AppComponent).
	// Опція required: true гарантує, що name завжди буде передано, інакше Angular видасть помилку.
	
	// або якщо ім'я не визначено спочатку, воно
// може містити рядок, але також може бути невизначеним.
// @Input() name: string | undefined;

	@Input({required: true}) userId!: string;
	@Input({required: true}) name!: string;

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
      userId: 'u2',
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

	get selectedUserTasks () {
		return this.tasks.filter((task) => task.userId === this.userId);
	}

}
