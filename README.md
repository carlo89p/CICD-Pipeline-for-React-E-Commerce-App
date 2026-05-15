CICD PIPLINE PROJECT
A React e-commerce app built with Vite, TypeScript, Redux Toolkit and React Query. Browse products, filter by category and manage a shopping cart.

How it works
Products are fetched from the FakeStore API using React Query. You can filter by category using the dropdown. Adding products to the cart is managed with Redux and persists across page refreshes using session storage. The cart page shows all items, quantities, a running total and a checkout button that clears the cart.

Features

- Product catalog with category filtering
- Add to cart, update quantity and remove items
- Cart remains in the same use state on refresh with session storage
- Checkout clears the cart and shows a confirmation

Testing
Tests are written with Jest and React Testing Library. The suite covers navbar link rendering, product card rendering and cart integration. Run tests with yarn test.

Built with
React, TypeScript, Vite, Redux Toolkit, React Query, React Bootstrap
