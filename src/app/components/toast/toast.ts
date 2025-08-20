import { Component, Input, OnInit } from '@angular/core';
import { ToastService } from '../../services/toast.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-toast',
  imports: [NgClass],
  templateUrl: './toast.html',
  styleUrl: './toast.scss'
})

export class Toast implements OnInit{
  message = '';
  type: 'success' | 'error' = 'success';

  constructor(private toastService: ToastService) {}

  ngOnInit() {
    this.toastService.toastState$.subscribe(toast => {
      this.message = toast.message;
      this.type = toast.type;
    });
  }
}
