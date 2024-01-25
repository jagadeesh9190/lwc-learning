import { LightningElement } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList'

export default class ApexImperativeDemo extends LightningElement {
    accounts
    handelClick(){
        getAccountList().then(result=>{
            this.accounts = result;
        }).catch(error=>{
            console.error(error)
        })
    }
}