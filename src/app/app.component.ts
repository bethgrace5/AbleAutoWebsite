import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  isMenuCollapsed=true;
  onActivate(e) {
    window.scrollTo(0, 0);
  }
}
