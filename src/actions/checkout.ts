'use server'

import { Product } from "@/providers/product"

import Stripe from 'stripe'

export const createCheckout = async (products: Product[]) => {

    const stripe = new Stripe("sk_test_51O5HGiB6KTaqaB4KQfupQYsSouu8vLfSBHIdKxNqIdB0eepxa37syqtpGEULEQAjQFLVKxWSsPk2YirJxnNpKleP00P7agXvUN", {
        apiVersion: '2024-04-10',
    })

    const checkout = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        success_url: "https://marriagedouglastatiane.com",
        cancel_url: "https://marriagedouglastatiane.com",
        line_items: products.map((product) => ({
            price_data: {
                currency: 'brl',
                product_data: {
                    name: product.nome,
                    description: product.descricao
                },
                unit_amount: product.valor * 100,
            },  
            quantity: product.quantidade,
        })),
    });
    
    return checkout.id;
}