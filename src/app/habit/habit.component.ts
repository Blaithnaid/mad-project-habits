import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonButtons, IonButton, IonItem, IonLabel, IonInput, IonTextarea } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Habit } from './habit.model';

@Component({
  selector: 'app-habit',
  templateUrl: './habit.component.html',
  styleUrls: ['./habit.component.scss'],
  standalone: true,
  imports: [IonTextarea, IonInput, IonLabel, IonItem, IonCardTitle, IonCard, IonHeader, IonToolbar, IonTitle, IonContent, IonCardHeader, IonCardContent, IonCardSubtitle, IonButtons, IonButton]
})
export class HabitComponent implements OnInit {
  @Input(): habit: Habit;

  constructor() { }

  ngOnInit() {}

}
