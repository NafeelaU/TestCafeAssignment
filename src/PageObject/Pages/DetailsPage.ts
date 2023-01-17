import { Selector, t } from "testcafe";
//import faker from '@faker-js/faker';

class DetailsPage {
    FirstName: Selector;
    LastName: Selector;
    ZipCode: Selector;
    ContinueButton: Selector;

    constructor () {
        this.FirstName=Selector('#first-name');
        this.LastName=Selector('#last-name');
        this.ZipCode=Selector('#postal-code');
        this.ContinueButton=Selector('#continue');

        
  
    }
    async Details(firstName: string, lastName: string,zipcode: string){
        await t
        //faker.name.firstName()
        //faker.name.lastName() 
        .typeText(this.FirstName,firstName)
        .typeText(this.LastName,lastName)
        .typeText(this.ZipCode,zipcode)
        .click(this.ContinueButton);

        
    }
}

export default new DetailsPage();