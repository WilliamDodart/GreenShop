import { Component } from '@angular/core';
import { ToastService } from '../../services/toast.service';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact-page',
  imports: [
    FormsModule
  ],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss'
})
export class ContactPage {

  constructor(private toastService: ToastService) {}

   onSubmit(form: NgForm): void {
    if (form.valid) {
      this.toastService.show('Message envoyé !', 'success');
      form.reset();
    } else {
      this.toastService.show('Veuillez remplir tous les champs.', 'error');
    }
  }

}
