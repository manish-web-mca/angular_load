import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Loan Application';
  currentRoute: string = '';
  constructor(private router: Router) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
      this.currentRoute = event['url'].substring(1);
      this.currentRoute = this.currentRoute.charAt(0).toUpperCase() + this.currentRoute.slice(1)
      console.log(this.currentRoute);
    });
  }
}
