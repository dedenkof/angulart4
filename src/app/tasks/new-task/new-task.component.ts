import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})

export class NewTaskComponent {
	@Input({required: true}) userId!: string;
	@Output() close = new EventEmitter<void>(); // Перейменували з cancel на close
	// @Output() add = new EventEmitter<NewTaskData>(); прибираємо бо ми зробили через новий підхід injection
	enteredTitle = '';
	enteredSummary = '';
	enteredDate = '';

// альтернатива підходу з конструктором
	private tasksService = inject (TasksService);

	onCancel() {
		this.close.emit();
	}

	onSubmit() {
		// this.add.emit({
		// 	title: this.enteredTitle,
		// 	summary: this.enteredSummary,
		// 	date: this.enteredDate,
		// });
		this.tasksService.addTask ({
			title: this.enteredTitle,
		 	summary: this.enteredSummary,
		 	date: this.enteredDate
		}, this.userId);
		this.close.emit();
	}
}
