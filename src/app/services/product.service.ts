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
            imageUrl: "https://gaspajoe.fr/wp-content/uploads/2022/02/d31-a-1-scaled.jpg"
        },
        {
            id: 2,
            name: "Sac en coton bio",
            description: "Sac cabas résistant et lavable, 100% coton biologique.",
            price: 12.50,
            stock: 25,
            category: "maison",
            imageUrl: "https://d3b8u2qnhxi7re.cloudfront.net/img/mo6189_coloured_organic_cotton_tote_bags_140g_web_product_a.jpg_copy1.jpg"
        },
        {
            id: 3,
            name: "Savon artisanal lavande",
            description: "Savon fabriqué à la main à base d'huile d'olive et de lavande.",
            price: 5.99,
            stock: 0,
            category: "bien-être",
            imageUrl: "https://chezcelita.fr/wp-content/uploads/2023/11/savon-lavande-2.jpg"
        },
        {
            id: 4,
            name: "Brosse à dents bambou",
            description: "Brosse à dents écologique avec manche en bambou.",
            price: 3.50,
            stock: 40,
            category: "bien-être",
            imageUrl: "https://www.savondujura.fr/wp-content/uploads/2021/06/brosse-a-dent-scaled-jpg.webp"
        },
        {
            id: 5,
            name: "Boîte à lunch en verre",
            description: "Boîte hermétique en verre, idéale pour transporter vos repas.",
            price: 14.90,
            stock: 18,
            category: "cuisine",
            imageUrl: "https://www.garboglass.com/data/upload/ueditor/20250328/67e65ad81f626.jpg"
        },
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
        },
        {
            id: 8,
            name: "Couverts en bambou",
            description: "Set de couverts réutilisables en bambou avec pochette.",
            price: 6.50,
            stock: 22,
            category: "cuisine",
            imageUrl: "https://mybambou.com/cdn/shop/files/couvert.jpg?v=1693910508&width=800"
        },
        {
            id: 9,
            name: "Bougie soja parfum vanille",
            description: "Bougie parfumée à la cire de soja et parfum naturel de vanille.",
            price: 9.90,
            stock: 15,
            category: "maison",
            imageUrl: "https://gemmes-zen.com/10191-large_default/bougie-cire-de-soja-vanille.jpg"
        },
        {
            id: 10,
            name: "Infuseur à thé en inox",
            description: "Infuseur réutilisable pour feuilles de thé en vrac.",
            price: 4.99,
            stock: 30,
            category: "cuisine",
            imageUrl: "https://infuseur-a-the.com/wp-content/uploads/2024/08/Infuseur-a-the-inox.png"
        }
    ];

    getAllProducts(): ProductModel[] {
        return[...this.products];
    }

    getOneProductById(productId: number): ProductModel {
        const curentProduct: ProductModel | undefined = this.products.find(product => product.id === Number(productId));
        if (!curentProduct) {
            throw new Error ('Produit inconnu');
        }
        return curentProduct;
    }

    getThreeRandomProducts(): ProductModel[] {
        let productsCopy = [...this.products]
        let threeRandomsProducts : ProductModel[] = [];

        for (let i = 0; i < 3; i++) {
            const randomIndex = Math.floor(Math.random() * productsCopy.length);
            const randomProduct = productsCopy[randomIndex];
            threeRandomsProducts.push(randomProduct);
            productsCopy.splice(randomIndex, 1)
        }

        return threeRandomsProducts;
    }

}