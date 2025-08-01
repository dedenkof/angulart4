import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";
import { DUMMY_USERS } from "./dummy-users";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
	// У класі AppComponent визначено змінну users, яка отримує дані з DUMMY_USERS (масив об’єктів із полями name і avatar).
	// Ця змінна доступна в шаблоні app.component.html, тому що Angular автоматично робить усі публічні властивості компонента
	// доступними для прив’язки в шаблоні.
	// Масив із даними користувачів, доступний у компоненті.
	users = DUMMY_USERS;

// Початкове значення id обраного користувача (наприклад, 'u1' може відповідати першому користувачу в DUMMY_USERS).
	selectedUserID = 'u1';

	// Геттер, який шукає користувача в users за selectedUserID за допомогою find.
	// Оператор ! вказує, що результат завжди буде знайдено (припускаючи, що id унікальний і присутній).
	get selectedUser() {
		return this.users.find((user) => user.id === this.selectedUserID)!;
	} 

	// Оновлює selectedUserID на нове значення id, отримане від події select із UserComponent.
	onSelectUser(id: string) {
		this.selectedUserID = id;
	}
}
