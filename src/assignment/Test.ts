import {Selector} from 'testcafe';
import LoginPage from '../PageObject/Pages/LoginPage';
import HomePage from '../PageObject/Pages/HomePage';
import CartPage from '../PageObject/Pages/CartPage';
import DetailsPage from '../PageObject/Pages/DetailsPage';
import CompletePage from '../PageObject/Pages/CompletePage';
import { faker } from '@faker-js/faker';
const { userVariables } =require('testcafe');

console.log(userVariables)

fixture ('login test').page`https://www.saucedemo.com`;


var randomFirstName = faker.name.firstName( 'female' );
var randomLasttName = faker.name.lastName('female');



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

 await t
.typeText('#first-name',randomFirstName)
.typeText('#last-name',randomLasttName)
.typeText('#postal-code','1258')
.click('#continue').wait(3000)



//--Finish 

.click('#finish').wait(2000)

});



function newFunction() {
  faker.name.firstName(); // => "Katharina"
  faker.name.firstName(); // 'Antwan'
  faker.name.firstName('female'); // 'Victoria'
  faker.name.firstName('male');
}
 