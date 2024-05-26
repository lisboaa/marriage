/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
        STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY
    }
}

module.exports = nextConfig
