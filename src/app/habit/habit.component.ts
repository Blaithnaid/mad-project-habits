import { Component, OnInit } from '@angular/core';
import { IonTitle } from "@ionic/angular/standalone";

@Component({
  selector: 'app-habit',
  templateUrl: './habit.component.html',
  styleUrls: ['./habit.component.scss'],
  standalone: true,
  imports: [IonTitle, ]
})
export class HabitComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
