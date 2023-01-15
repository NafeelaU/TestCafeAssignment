import { Selector, t } from "testcafe";

class CompletePage{
    FinishButton: Selector;
    

    constructor(){
        this.FinishButton=Selector('#finish');

    }
    async Complete(){
        await t
        .click(this.FinishButton);
    }
   
}
export default new CompletePage();
