import { LightningElement,api } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import NAME_FIELD from '@salesforce/schema/Contact.Name'
import TITLE_FIELD from '@salesforce/schema/Contact.Title'
import PHONE_FIELD from '@salesforce/schema/Contact.Phone'
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import ACCOUNT_FIELD from '@salesforce/schema/Contact.AccountId';
export default class RecordEditForm extends LightningElement {
    @api objectName
    @api recordId
    objectName = CONTACT_OBJECT
    fields={ 
        accountField:ACCOUNT_FIELD,
        nameField:NAME_FIELD,
        titleField:TITLE_FIELD,
        phoneField:PHONE_FIELD,
        emailField:EMAIL_FIELD
    }
    handleReset(){ 
        const inputFields = this.template.querySelectorAll('lightning-input-field')
        if(inputFields){ 
            Array.from(inputFields).forEach(field=>{ 
                field.reset()
            })
        }
    }
    successHandler(event){
        console.log(event.detail.id)
        const toastEvent = new ShowToastEvent({
            title: 'Contact Created',
            message:'Record Id :'+event.detail.id,
            variant: 'success'
        });
        this.dispatchEvent(toastEvent);
    }
}