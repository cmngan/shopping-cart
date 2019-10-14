# Overview
This is a web app that show case a shopping cart design.  
Demo: https://cm-shopping-cart-demo.netlify.com/
# Technology
I want to keep this project simply. Therefore, no design framework is used. I tried to use as less library as I can. Simplicity is preferred.  
The setup is from create-react-app. No SEO is required.
- styled-component: To style component
- redux: Manage state of the whole app
- React Hooks: Use functional components and react hooks
- Response Layout: Desktop and mobile friendly

# Development
## Setup
In terminal, type `yarn` or `npm i`
## Start Dev
In terminal, type `yarn start` or `npm start`
## Build
In terminal, type `yarn build` or `npm build`
## Release
This repo is integrated into Netlify. Therefore, it will auto release once pushed to master branch. 

# Assumption
1. Browser: Support latest version of modern browsers only. We don't need to support IE.
2. SEO is not required and important.

# Deliverable
browse through and clear instructions for accessing/installing the app.

What we are looking for:

- All the fields on the right except for Card Type are editable.
- The quantity of the items in the shopping cart can be changed (increased or decreased) by clicking the - or the + sign.
- The price shown on the item row changes accordingly when the quantity changes.  
For example:  
Chicken momo 0 $0.00  
Chicken momo 1 $10.50  
Chicken momo 2 $21.00  
- When the quantity reaches 0, the item row stays.
- The Subtotal at the bottom changes accordingly when the number of items in the shopping cart changes.
- Each row of the shopping cart should be deletable through clicking the cross.
- (Optional, bonus) You may choose to make the page responsive.
- (Optional, bonus) The Check Out button and the Continue Shopping links are not redirecting to other pages, unless you come up with a design on your own.