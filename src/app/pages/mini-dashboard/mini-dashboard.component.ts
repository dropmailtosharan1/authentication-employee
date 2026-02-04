import { Component } from '@angular/core';
import { CdkDropListGroup, CdkDrag, CdkDropList, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-mini-dashboard',
  imports: [CdkDropListGroup, CdkDrag, CdkDropList],
  templateUrl: './mini-dashboard.component.html',
  styleUrl: './mini-dashboard.component.scss'
})
export class MiniDashboardComponent {
  
 todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
  ];

  inProgress = [
    'Fall asleep'
  ]

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
