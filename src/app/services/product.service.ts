import { Injectable } from "@angular/core";
import { ProductModel } from "../models/product.model";

@Injectable({
    providedIn: 'root'
})

export class ProductsService {
    private products: ProductModel[] = [
        {
            id: 1,
            name: "Gourde en inox",
            description: "Gourde réutilisable en acier inoxydable, 750ml.",
            price: 19.99,
            stock: 12,
            category: "cuisine",
            imageUrl: "https://via.placeholder.com/300x200?text=Gourde+inox"
        },
        {
            id: 2,
            name: "Sac en coton bio",
            description: "Sac cabas résistant et lavable, 100% coton biologique.",
            price: 12.50,
            stock: 25,
            category: "maison",
            imageUrl: "https://via.placeholder.com/300x200?text=Sac+coton+bio"
        },
        {
            id: 3,
            name: "Savon artisanal lavande",
            description: "Savon fabriqué à la main à base d'huile d'olive et de lavande.",
            price: 5.99,
            stock: 0,
            category: "bien-être",
            imageUrl: "https://via.placeholder.com/300x200?text=Savon+lavande"
        },
        {
            id: 4,
            name: "Brosse à dents bambou",
            description: "Brosse à dents écologique avec manche en bambou.",
            price: 3.50,
            stock: 40,
            category: "bien-être",
            imageUrl: "https://via.placeholder.com/300x200?text=Brosse+bambou"
        },
        {
            id: 5,
            name: "Boîte à lunch en verre",
            description: "Boîte hermétique en verre, idéale pour transporter vos repas.",
            price: 14.90,
            stock: 18,
            category: "cuisine",
            imageUrl: "https://via.placeholder.com/300x200?text=Lunch+box+verre"
        },
        {
            id: 6,
            name: "Tote bag réversible",
            description: "Sac réversible en tissu recyclé, motifs imprimés à l'encre écologique.",
            price: 16.00,
            stock: 5,
            category: "maison",
            imageUrl: "https://via.placeholder.com/300x200?text=Tote+bag"
        },
        {
            id: 7,
            name: "Huile essentielle d'orange douce",
            description: "Huile essentielle bio aux vertus apaisantes.",
            price: 8.90,
            stock: 9,
            category: "bien-être",
            imageUrl: "https://via.placeholder.com/300x200?text=Huile+orange"
        },
        {
            id: 8,
            name: "Couverts en bambou",
            description: "Set de couverts réutilisables en bambou avec pochette.",
            price: 6.50,
            stock: 22,
            category: "cuisine",
            imageUrl: "https://via.placeholder.com/300x200?text=Couverts+bambou"
        },
        {
            id: 9,
            name: "Bougie soja parfum vanille",
            description: "Bougie parfumée à la cire de soja et parfum naturel de vanille.",
            price: 9.90,
            stock: 15,
            category: "maison",
            imageUrl: "https://via.placeholder.com/300x200?text=Bougie+vanille"
        },
        {
            id: 10,
            name: "Infuseur à thé en inox",
            description: "Infuseur réutilisable pour feuilles de thé en vrac.",
            price: 4.99,
            stock: 30,
            category: "cuisine",
            imageUrl: "https://via.placeholder.com/300x200?text=Infuseur+th%C3%A9"
        }
    ];

    getAllProducts(): ProductModel[] {
        return[...this.products];
    }

}