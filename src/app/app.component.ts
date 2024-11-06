import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common'
import { ChildComponent } from "./child/child.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Task List';
  list:any[] = [];
  data:number = 10;
  parentChild:string = 'Data transfer from Parent to Child component'

  addtask(task:string){
    this.list.push({id:this.list.length,name:task})
    console.warn(task,"added")
  }

  removeTask(id:number){
    this.list = this.list.filter(task=>task.id !== id)
  }

  updateChild(){
    this.data = Math.floor(Math.random() * 10)
    console.warn(this.data,"generated")
  }
}