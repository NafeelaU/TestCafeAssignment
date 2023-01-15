import { Selector, t } from "testcafe";

class CartPage{
    
    Checkout: Selector;

    constructor(){
       
        this.Checkout=Selector('#checkout');

    }
    async Cart(){
        await t
        .click(this.Checkout);
    }
   
}
export default new CartPage();
