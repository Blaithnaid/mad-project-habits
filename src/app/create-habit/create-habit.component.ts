import { Component, OnInit } from '@angular/core';
import { IonInput, IonItem, IonList, IonLabel } from "@ionic/angular/standalone";

@Component({
  selector: 'app-create-habit',
  templateUrl: './create-habit.component.html',
  styleUrls: ['./create-habit.component.scss'],
  imports: [IonInput, IonItem, IonList, IonLabel],
  standalone: true
})
export class CreateHabitComponent  implements OnInit {
  
  constructor() { }

  ngOnInit() {}

}
