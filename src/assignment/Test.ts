import {Selector} from 'testcafe';

const usernameInput = Selector('input[name=user-name][type=text]');
const passwordInput = Selector('input[name=password][type=password]');
const loginButton = Selector('[type=submit]');
//const CheckPrice = Selector ('.inventory_item_price[id=add-to-cart-sauce-labs-fleece-jacket]');
const AddtoCard1 = Selector('.btn[id=add-to-cart-sauce-labs-backpack]');
const AddtoCard2 = Selector('.btn[id=add-to-cart-sauce-labs-bike-light]');
const ShoppingCart = Selector('.shopping_cart_container');
const Checkout = Selector('.checkout_button');
const RandomFname = Selector('input[name=firstName][type=text]');
const RandomLname = Selector('input[name=lastName][type=text]');
const RandomZipCode = Selector('input[name=postalCode][type=text]');
const Continue = Selector('[type=submit]');
const Finish = Selector('.cart_button');

//
fixture `Login`
    .page`https://www.saucedemo.com`;

test('Q1', async (browser) => {
    await browser
    .typeText(usernameInput,'performance_glitch_user')
    .typeText(passwordInput,'secret_sauce')
     .click(loginButton)

     // Check Price
   //  .hover(CheckPrice)
   
     
     //Add to Cart
     .click(AddtoCard1) 
     .wait(3000)
     .click(AddtoCard2)
     .wait(3000)

     //View Shopping Cart
     .click(ShoppingCart)
     .wait(3000)

     //Check Out 
     .click(Checkout)
     .wait(4000)
    
     //User Details for checkout
    .typeText(RandomFname,'Harry')
    .typeText(RandomLname,'Potter')
    .typeText(RandomZipCode,'1258')
    .wait(3000)
    .click(Continue)
    .wait(3000)

    // Finish
	.click(Finish)
    .wait(3000);
}

);