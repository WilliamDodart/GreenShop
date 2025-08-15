import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})

export class Header implements OnInit {
  isMenuOpen!: boolean;

  ngOnInit(): void {
    this.isMenuOpen = false;
  }

  toggleMenuBurger() {
      this.isMenuOpen = !this.isMenuOpen
  }

}
