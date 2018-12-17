import { Component, OnInit, Input } from '@angular/core';
 
@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css']
})
export class ServiceCardComponent implements OnInit {

  @Input() title: string
  @Input() subtitle: string
  @Input() description: string[]

  constructor() { }

  ngOnInit() {
  }

}
