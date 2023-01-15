import { Selector, t } from "testcafe";

class HomePage{
    Addtocart1: Selector;
    Addtocart2: Selector;
    Shopingcart: Selector;
 

    constructor(){

        this.Addtocart1=Selector('#add-to-cart-sauce-labs-backpack');
        this.Addtocart2=Selector('#add-to-cart-sauce-labs-bike-light');
        this.Shopingcart=Selector('#shopping_cart_container');
     

    }
    async Home(){
        await t
        .click(this.Addtocart1)
        .click(this.Addtocart2)
        .click(this.Shopingcart);
    }
   
}
export default new HomePage();




