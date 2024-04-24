import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonModal, IonItem, IonLabel, IonInput, IonTextarea, IonSelect, IonSelectOption, ModalController, IonList, IonItemSliding, IonDatetimeButton, IonPopover, IonItemOptions, IonItemOption, IonIcon } from '@ionic/angular/standalone';
import { HabitComponent } from '../habit/habit.component';
import { Habit } from '../habit/habit.model';

@Component({
  selector: 'app-habits',
  templateUrl: 'habits.page.html',
  styleUrls: ['habits.page.scss'],
  standalone: true,
  imports: [IonIcon, IonItemOption, IonItemOptions, IonPopover, IonDatetimeButton, IonItemSliding, IonList, HabitComponent, FormsModule, IonTextarea, IonInput, IonModal, IonButton, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonSelect, IonSelectOption]
})
export class HabitsPage {
  @ViewChild(IonModal) modal: IonModal; // get the modal component

  habits: Habit[] = []; // array of habits

  // categories for the select input
  categories = ['Health', 'Finance', 'Career', 'Personal Growth', 'Relationships', 'Other'];

  // new habit object from model
  habitToBeAdded = new Habit(0, '', '', 0, 0, new Date(), '');

  cancelModal() { // close the modal
    this.modal.dismiss();
  }

  confirmModal() {
    this.addHabit();
    this.modal.dismiss();
  }

  addHabit() {
    // set the id of the new habit
    this.habitToBeAdded.id = this.habits.length;
    // add the new habit to the array
    this.habits.push(this.habitToBeAdded);
    // close the modal
    this.modal.dismiss();
    // save the habits to local storage
    localStorage.setItem('habits', JSON.stringify(this.habits));
    console.log(this.habits);
  }

  deleteHabit(id: number) {
    // filter out the habit with the id to be deleted
    this.habits = this.habits.filter(habit => habit.id !== id);
    // save the habits to local storage
    localStorage.setItem('habits', JSON.stringify(this.habits));
  }

  constructor() {
    // get the habits from local storage, else set to empty array
    // let habits = localStorage.getItem('habits') || '[]';
  }

  ngOnInit() {
    // get the habits from local storage, else set to empty array
    let habits = localStorage.getItem('habits') || '[]';
    // parse the habits to JSON and set to the habits array
    this.habits = JSON.parse(habits);
  }

}
