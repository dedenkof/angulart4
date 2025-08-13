import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user', // говорить Angular, що тег <app-user> у шаблоні (app.component.html) відповідає компоненту UserComponent.
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

// @Input говорить Angular, що компонент UserComponent може приймати дані
// від батьківського компонента (AppComponent) через прив’язки в шаблоні.

	@Input({required: true}) user!: User;

// Тому, щоб реалізувати цю функцію підсвічування, і додайте сюди ще однe вхідну властивість, selected і тип якої має бути boolean - true або false

@Input({required: true}) selected!: boolean;

// v1 - @Output
// частиною механізму обробки подій у Angular для передачі даних від дочірнього компонента до батьківського
// @Output() позначає, що компонент UserComponent може надсилати дані (події) до батьківського компонента (наприклад, AppComponent).
// select — це назва події, яку компонент може "випромінювати".
// new EventEmitter() — це об’єкт, який дозволяє надсилати події з використанням методу .emit().
// дозволяє надсилати подію select до батьківського компонента.
	@Output() select = new EventEmitter<string>();



// v2 - output function
//select = output<string>(); замінює @Output() select = new EventEmitter<string>();.
//output<string>() - створює Signal-based вихідний канал, який надсилає значення типу string.
//Метод emit усе ще використовується для надсилання даних, але тепер він інтегрований у реактивну систему Signals.
//
//	select = output<string>();

	// Обробка в user.component.ts
// Геттер, який бере значення avatar (наприклад, 'user1.jpg') і додає префікс 'assets/users/', повертаючи повний шлях (наприклад, 'assets/users/user1.jpg').
// this.avatar — це змінна, яка отримала значення через @Input від AppComponent.
get imagePath () {
		return 'assets/users/' + this.user.avatar;
	}

	// метод, який викликає this.select.emit(this.id) для надсилання значення id як події.
// onSelectUser() надсилає id через подію select при натисканні кнопки.
	onSelectUser () {
		this.select.emit(this.user.id);
	}
}
