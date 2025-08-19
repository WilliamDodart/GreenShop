// toast.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ToastService {

  private toastSubject = new Subject<{ message: string, type: 'success' | 'error' }>();
  toastState$ = this.toastSubject.asObservable();

  show(message: string, type: 'success' | 'error' = 'success', duration = 2000) {
    this.toastSubject.next({ message, type });
    setTimeout(() => {
      this.toastSubject.next({ message: '', type });
    }, duration);
  }
}