import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonModal, IonItem, IonLabel, IonInput, IonTextarea, IonSelect, IonSelectOption, ModalController, IonList, IonItemSliding } from '@ionic/angular/standalone';
import { HabitComponent } from '../habit/habit.component';
import { Habit } from '../habit/habit.model';

@Component({
  selector: 'app-habits',
  templateUrl: 'habits.page.html',
  styleUrls: ['habits.page.scss'],
  standalone: true,
  imports: [IonItemSliding, IonList, HabitComponent, FormsModule, IonTextarea, IonInput, IonModal, IonButton, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonSelect, IonSelectOption]
})
export class HabitsPage {
  @ViewChild(IonModal) modal: IonModal;

  habits: Array<HabitComponent>;

  // newHabit: Habit;
  newHabit = {
    id: 0,
    name: '',
    description: '',
    frequency: '',
    goal: 0,
    current: 0,
    deadline: new Date(),
    picture: '',
    category: ''
  };

  cancelModal() {
    this.modal.dismiss();
  }

  constructor() {
    // get the habits from local storage, else set to empty array
    // let habits = localStorage.getItem('habits') || '[]';
  }

}
