import { LightningElement,api } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class RecordViewFormDemo extends LightningElement {
    @api objectName
    @api recordId

    objectName= ACCOUNT_OBJECT;
}