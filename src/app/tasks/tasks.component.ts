import { Component, Input } from '@angular/core';

// @Component: Визначає компонент із селектором app-tasks, який буде вставлятися в шаблон як <app-tasks>
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
	// Дозволяє компоненту приймати властивість name від батьківського компонента (у цьому випадку AppComponent).
	// Опція required: true гарантує, що name завжди буде передано, інакше Angular видасть помилку.
	
	// або якщо ім'я не визначено спочатку, воно
// може містити рядок, але також може бути невизначеним.
// @Input() name: string | undefined;

	@Input() name?: string;

}
