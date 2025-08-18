import { Component, OnInit } from '@angular/core';
import { ButtonBack } from '../../components/button-back/button-back';
import { ProductModel } from '../../models/product.model';
import { CartCard } from '../../components/cart-card/cart-card';
import { CartSummary } from '../../components/cart-summary/cart-summary';

@Component({
  selector: 'app-cart-page',
  imports: [ ButtonBack,
             CartCard,
             CartSummary
  ],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.scss'
})

export class CartPage implements OnInit {
  products!: ProductModel[];

  ngOnInit(): void {
    this.products = [
      {
            id: 6,
            name: "Tote bag réversible",
            description: "Sac réversible en tissu recyclé, motifs imprimés à l'encre écologique.",
            price: 16.00,
            stock: 5,
            category: "maison",
            imageUrl: "https://himalayan-made.fr/wp-content/uploads/2021/07/tote-bag-reversible-chanvre-upcycling-latika-ecru-3.jpg"
        },
        {
            id: 7,
            name: "Huile essentielle d'orange douce",
            description: "Huile essentielle bio aux vertus apaisantes.",
            price: 8.90,
            stock: 9,
            category: "bien-être",
            imageUrl: "https://www.mielcretet.com/img/cms/huile%20essentielle/ORANGE_douce.png"
        }
    ]
  }
}
