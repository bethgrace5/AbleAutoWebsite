import { Component, OnInit } from '@angular/core';
import { Service } from './service.model';

@Component({
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})


export class ServiceComponent { 
  services: Service[]

  ngOnInit() {
    this.services = [
      {
        title: 'Air Conditioning',
        description: [
          'If you drive in Bakersfield chances are you want your vehicle’s air conditioning system working properly whenever you need it. The best way to ensure that is to let the professionals at Able Auto and Truck Repair service and maintain your air conditioning system on a regular basis. We’ll make sure the compressor is charged with refrigerant and oil, is cooling properly, check the cabin air filter for debris and change it if it’s becoming blocked, recharge the air conditioning refrigerant when necessary...and more.',
          'By having us perform regular maintenance on your air conditioning system you can guard against future malfunctions which will save you money down the road while keeping you comfortable while driving on the road.'
        ]
      },
      {
        title: 'Alignment',
        description: [
          'Does your car pull to the right or left? Do you need to hold your steering wheel at an angle to drive straight? When you turn, does your steering wheel return to its original position or does it feel sluggish or loose? Does your steering wheel shake a lot when driving on a smooth, straight road? Are your tires showing uneven wear? If you’re experiencing any of these conditions, your vehicle may be out of alignment.0',
          'At Able Auto and Truck Repair we have the technology needed to diagnose the cause of the problem and the tools and equipment to perform the work required such as checking your vehicle’s camber, caster and toe specs and if needed adjusting them to the preferred specifications.'
        ]
      },
      {
        title: 'Brake Services',
        description: [
          'Driving a vehicle with brake problems is like jumping out of an airplane without a parachute. Eventually you will stop, but probably not in a good way! So if you hear a screeching, squealing or grinding sound when applying your brakes or if your brake pedal feels soft, vibrates or slowly sinks to the floor, bring it in to us at Able Auto and Truck Repair and be sure to do it right away. We’ll check your braking system and let you know what needs to be done.',
          'You may only need new brake pads or your brake lines might need to be bled. It’s also possible that the brake master cylinder needs to be replaced. Whatever may be required, our A.S.E. Master certified technicians can handle it and we use quality O.E.M. or better replacement parts when performing the work required.'
        ]
      },
      {
        title: 'Oil and Filter Service',
        description: [
          'An oil and filter service is probably the least expensive service your vehicle needs. But if it’s neglected it may well prove to be the most costly. Over time oil breaks down in viscosity becoming thick and building up sludge that can clog your lifters and return ports, as well as losing its ability to lubricate and reduce friction between other engine components. That breakdown affects engine performance and eventually leads to a major engine failure.',
          'We can perform the oil and filter services you need at Able Auto and Truck Repair. you can be sure we’ll use quality oil and oil filters and that we’ll get the job done in a timely manor.'
        ]
      }
    ]

  }
}
