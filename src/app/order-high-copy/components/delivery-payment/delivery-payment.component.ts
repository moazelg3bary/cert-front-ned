import { EditProfileService } from 'src/app/services/edit-profile.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-delivery-payment',
  templateUrl: './delivery-payment.component.html',
  styleUrls: ['./delivery-payment.component.scss']
})
export class DeliveryPaymentComponent implements OnInit {


  // init name & type vars
  cards: {}[] | any
  isloading: boolean
  getIdAddress: string | number

  constructor(private route: ActivatedRoute, private Profile:  ProfileService, private ProcesPrice: EditProfileService) {

    // init vars
    this.Profile.getCardsUser().subscribe((res: any) => this.cards = res.data);

    this.route.queryParamMap.subscribe((res: any) => this.getIdAddress = res.params.addresId);

    this.isloading = false

   }

  ngOnInit() {}

  // send price to delivery order high copy
  sendPrice(price: string | number) {
    
    // wait to response
    this.isloading = true

    this.ProcesPrice.procesPrice({ price: price, address_id: this.getIdAddress }).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        this.isloading = false;
        console.log(err);
      },
      complete: () => {
        this.isloading = false;
        console.log('done')
      }
    })
  }

}
