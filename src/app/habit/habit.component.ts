import { Component, OnInit } from '@angular/core';
import { IonTitle, IonContent, IonItem, IonLabel, IonInput, IonTextarea } from "@ionic/angular/standalone";

@Component({
  selector: 'app-habit',
  templateUrl: './habit.component.html',
  styleUrls: ['./habit.component.scss'],
  standalone: true,
  imports: [IonTextarea, IonInput, IonLabel, IonItem, IonContent, IonTitle, ]
})
export class HabitComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
