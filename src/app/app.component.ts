import { Component } from '@angular/core';

export interface Card {
  title:string,
  text?:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'vacations-service';
  PageTitle = 'Hello!';

  changeTitle() {
    this.PageTitle = 'Title was updated';
  }

  cards:Card[] = [
    {title:'Card 1', text:'Text about Card 1'},
    {title:'Card 2', text:'Text about Card 2'},
    {title:'Card 3'}
  ]
  hided: boolean = false
  cardState: string = 'Hide'

  getCardsState(): string {
    if (this.hided) return this.cardState ='Open'
    else return this.cardState = 'Hide'
  }

  toggleCards() {
    this.hided = !this.hided
    this.getCardsState()
  }
}
