import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-button-back',
  imports: [],
  templateUrl: './button-back.html',
  styleUrl: './button-back.scss'
})
export class ButtonBack {

  constructor(private location: Location) {}

  //navigation arrière
  backToPreviousPage(): void {
    this.location.back();
  }
}
