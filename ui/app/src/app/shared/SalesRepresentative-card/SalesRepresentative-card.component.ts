import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './SalesRepresentative-card.component.html',
  styleUrls: ['./SalesRepresentative-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.SalesRepresentative-card]': 'true'
  }
})

export class SalesRepresentativeCardComponent {


}