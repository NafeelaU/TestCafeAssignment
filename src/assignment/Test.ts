import {Selector} from 'testcafe';
import LoginPage from '../PageObject/Pages/LoginPage';
import HomePage from '../PageObject/Pages/HomePage';
import CartPage from '../PageObject/Pages/CartPage';
import DetailsPage from '../PageObject/Pages/DetailsPage';
import CompletePage from '../PageObject/Pages/CompletePage';
// import { faker } from '@faker-js/faker';
//var faker = require('@faker-js/faker');


//
fixture ('login test').page`https://www.saucedemo.com`;


test('Login Page', async (t) => {
await t
.typeText('#user-name','performance_glitch_user')
.typeText('#password','secret_sauce')
.click('#login-button')

// -- Add to Cart--

.click('#add-to-cart-sauce-labs-backpack').wait(3000)
.click('#add-to-cart-sauce-labs-bike-light').wait(3000)

//-- Click Shopping Cart--

.click('#shopping_cart_container').wait(3000)


//-- Click Checkout--

.click('#checkout').wait(3000)

//-- Checkout Details--
//const fName= faker.name.firstname();
//const lName=faker.name.lastname();
//await 
//.typeText(faker.name.firstname('#first-name'));
//await element(by.name('#first-name')).sendKeys(faker.name.firstname());
//await element(by.name('#last-name')).sendKeys(faker.name.lastname());
await t
.typeText('#first-name','Harry')
.typeText('#last-name','Potter')
.typeText('#postal-code','1258')
.click('#continue').wait(3000)



//--Finish 

.click('#finish').wait(2000)

});

  // Check Price
   //  .hover(CheckPrice)
   
  /*   
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
    .wait(3000); */
