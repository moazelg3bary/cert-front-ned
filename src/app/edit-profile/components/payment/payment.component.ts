import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  // init name & type vars
  cards: {}[] | any

  constructor(private route: ActivatedRoute) {

    // init vars
    this.route.data.subscribe((res) => this.cards = res.cards.data);

   }

  ngOnInit() {}

  deleteCard(card_id: string | number) {

  }

}
