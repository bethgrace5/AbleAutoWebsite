import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent implements OnInit {
  public googleUrl = "https://www.google.com/maps/dir/?api=1&saddr=My%20Location&destination=Able+Auto+and+Truck+Repair,+Fruitvale+Avenue+%231,+Bakersfield,+CA&daddr=ChIJzRQ-WEFC6oARnf-v_gT18YA&travelmode=driving"
  public telephoneLink = "tel:+16616370669"
  public appointmentUrl = "http://www.mitchell1crm.com/crmutilities/RequestAppointment.aspx?v=SureCritic&w=959133"

  constructor() { }

  ngOnInit() {
  }

}
