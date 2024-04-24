import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonButtons, IonButton } from '@ionic/angular/standalone';
import { QuotesAPIService } from '../quotes-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonCardTitle, IonCard, IonHeader, IonToolbar, IonTitle, IonContent, IonCardHeader, IonCardContent, IonCardSubtitle, IonButtons, IonButton
  ]
})
export class HomePage {
  constructor(private quotesAPI: QuotesAPIService) {
    this.quotesAPI = quotesAPI;
  }


  dailyQuoteText: any;
  dailyQuoteAuthor: any;

  ngOnInit() {
    this.quotesAPI.getQuote().subscribe(data => {
      // this API is down at the moment
      // this.dailyQuoteText = data.q;
      this.dailyQuoteAuthor = data.author;
      this.dailyQuoteText = data.content
    });
  }
}
