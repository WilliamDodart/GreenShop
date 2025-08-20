import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-purchase-modal',
  imports: [],
  templateUrl: './purchase-modal.html',
  styleUrl: './purchase-modal.scss'
})
export class PurchaseModal {
  @Input() isVisible = false;
  @Output() closeModal = new EventEmitter<void>();
}
