import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';
import { QuotesAPIService } from '../quotes-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonCardTitle, IonCard, IonHeader, IonToolbar, IonTitle, IonContent, IonCardHeader, IonCardContent, IonCardSubtitle]
})
export class HomePage {
  constructor(private quotesAPI: QuotesAPIService) {
    this.quotesAPI = quotesAPI;
  }

  // set the initial mode to 'daily'
  mode: string = 'daily';

  dailyQuoteText: any;
  dailyQuoteAuthor: any;

  ngOnInit() {
    this.quotesAPI.getQuote(this.mode).subscribe(data => {
      this.dailyQuoteText = data.q;
      this.dailyQuoteAuthor = data.a;
    });
  }
}
