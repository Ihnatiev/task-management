import { NewTaskData, Task } from "../interfaces";
import { DUMMY_TASKS } from "../../shared/dummy-tasks";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks: Task[] = DUMMY_TASKS;

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string): Task[] {
    return this.tasks.filter((task: Task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string): void {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
      userId,
    });
    this.saveTasks();
  }

  removeTask(id: string): void {
    this.tasks = this.tasks.filter((task: Task) => task.id !== id);
    this.saveTasks();
  }

  private saveTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
