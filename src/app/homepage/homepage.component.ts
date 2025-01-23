// filepath: /c:/Users/joaqu/angular-starter-template/src/app/homepage/homepage.component.ts
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-homepage',
  imports: [CommonModule, MatButtonModule, MatIconModule],

  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  constructor(private router: Router) {}

  goToCV(): void {
    this.router.navigate(['/about']);
  }
}
