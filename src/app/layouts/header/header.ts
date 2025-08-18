import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})

export class Header implements OnInit, OnDestroy {
  isMenuOpen = false;
  private routerSubscription!: Subscription;

  constructor(private router: Router) {}

  ngOnInit(): void {
    //fermeture au changement de route
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isMenuOpen = false;
      }
    })
  }

  toggleMenuBurger() {
      this.isMenuOpen = !this.isMenuOpen
  }

  //Désabonnement du listener à la suppression du composant
  ngOnDestroy(): void {
    if(this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}
