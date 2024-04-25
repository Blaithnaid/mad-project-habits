import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonToggle, IonSelect, IonSelectOption, IonButton, IonAlert, IonNote } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { Habit } from '../habits/habit.model';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
  standalone: true,
  imports: [IonNote, IonAlert, IonButton, IonToggle, IonLabel, IonItem, IonList, IonHeader, IonToolbar, IonTitle, IonContent, IonSelect, IonSelectOption, FormsModule],
})
export class SettingsPage {
  
  constructor() {}

  clearHabitsAlertButtons = [ // Alert buttons with handlers
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        // Handle cancel action (optional)
        console.log('Clear habits canceled');
      },
    },
    {
      text: 'Confirm',
      handler: () => {
        this.clearAllData(); // Call your function to clear data
      },
    },
  ];

  importDummyHabitsAlertButtons = [ // Alert buttons with handlers
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        // Handle cancel action (optional)
        console.log('Import dummy habits canceled');
      },
    },
    {
      text: 'Confirm',
      handler: () => {
        this.importDummyHabits(); // Call your function to import data
      },
    },
  ];

  clearAllData() {
    // clear the habits
    localStorage.removeItem('habits');
  }

  importDummyHabits() {
    // create dummy habits
    let dummyHabits: Habit[] = [
      new Habit(1, "Go to paris", "it's in france!", 10, 0, new Date(), 'Other'),
      new Habit(2, "Grow, personally!!!", "in a personal sense of meaning", 5, 0, new Date(), 'Personal Growth'),
      new Habit(3, "Play Subway Surfers", "gotta get those daily rewards", 365, 0, new Date(), 'Relationships'),
      new Habit(4, "produce counterfeits", "game the system", 100, 0, new Date(), 'Finance'),
      new Habit(5, "job search", "where did they go", 100, 0 , new Date(), 'Career'),
      new Habit(6, "beat saber 10 minutes", "on the hardest difficulty", 14, 0, new Date(), 'Health')
    ];
    // save the habits to local storage
    localStorage.setItem('habits', JSON.stringify(dummyHabits));
  }

  toggleDarkMode() {
    document.body.classList.toggle('dark');
  }
}
