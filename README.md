# Stripe subscriptions

## 1. Create an .env.local at the root and add the following variables

```bash
# AUTHENTICATION (tuto > https://shipfa.st/docs/features/magic-links)
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=************

# EMAILS (tuto > https://shipfa.st/docs/features/emails)
EMAIL_SERVER=smtp://*********

# DATABASE (tuto > https://shipfa.st/docs/features/database)
MONGODB_URI=mongodb://127.0.0.1:27017/**********

# STRIPE PAYMENTS (tuto: https://shipfa.st/docs/features/payments)
STRIPE_SECRET_KEY=rk_test_**********
STRIPE_WEBHOOK_SECRET=whsec_**********
```

## 2. Run the project

```bash
npm i
npm run dev
```

Enjoy!

PS: Want to ship you SaaS in days, not weeks? Join 3,000+ makers on
[Shipfast](https://shipfa.st)!
