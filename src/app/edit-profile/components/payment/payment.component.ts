import { ProfileService } from './../../../services/profile.service';
import { EditProfileService } from 'src/app/services/edit-profile.service';
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

  constructor(private route: ActivatedRoute, private EditProfile:EditProfileService, private Profile:  ProfileService) {

    // init vars
    this.route.data.subscribe((res) => this.cards = res.cards.data);

   }

  ngOnInit() {}

  // func deleteCard run => delete card from profile user
  deleteCard(card_id: string | number) {
    this.EditProfile.deleteCard({card_id}).subscribe((res: any) => {
      //after delete card rom profile user => get list of cards user
      res.success ?  this.Profile.getCardsUser().subscribe((res: any) => this.cards = res.data) : null
    })
  }

}
