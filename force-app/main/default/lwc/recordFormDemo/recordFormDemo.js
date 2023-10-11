import { LightningElement, api } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import 	OWNERID_Field from '@salesforce/schema/Account.OwnerId';
import 	ACCOUNTNAME_Field from '@salesforce/schema/Account.Name';
import 	TYPE_Field from '@salesforce/schema/Account.Type';
import 	ACTIVE_Field from '@salesforce/schema/Account.Active__c';
export default class RecordFormDemo extends LightningElement {
    @api objectName
    @api recordId
    objectName= ACCOUNT_OBJECT;
    fieldList= [OWNERID_Field,ACCOUNTNAME_Field,TYPE_Field,ACTIVE_Field];

    successHandler(event){
        console.log(event.detail.id)
        const toastEvent = new ShowToastEvent({
            title: 'Account Created',
            message:'Record Id :'+event.detail.id,
            variant: 'success'
        });
        this.dispatchEvent(toastEvent);
    }
}