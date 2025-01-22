// filepath: /c:/Users/joaqu/angular-starter-template/src/app/homepage/homepage.component.ts
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  imports: [MatButtonModule],

  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  constructor(private router: Router) {}

  goToAbout(): void {
    this.router.navigate(['/about']);
  }
}
