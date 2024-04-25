import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonButtons, IonButton, IonAvatar, IonItem, IonLabel, IonList, IonProgressBar } from '@ionic/angular/standalone';
import { QuotesAPIService } from '../quotes-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonProgressBar, IonList, IonLabel, IonItem, IonAvatar, IonCardTitle, IonCard, IonHeader, IonToolbar, IonTitle, IonContent, IonCardHeader, IonCardContent, IonCardSubtitle, IonButtons, IonButton
  ]
})
export class HomePage implements OnInit {
  constructor(private quotesAPI: QuotesAPIService) {
    this.quotesAPI = quotesAPI;
  }

  dailyQuoteText: any;
  dailyQuoteAuthor: any;

  ngOnInit() {
    // get a quote from the quotes service
    this.quotesAPI.getQuote().subscribe(data => {
      this.dailyQuoteAuthor = data.author;
      this.dailyQuoteText = data.content
    });
  }
}
