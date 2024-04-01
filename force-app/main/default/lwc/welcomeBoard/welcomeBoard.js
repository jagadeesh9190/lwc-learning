import { LightningElement, wire } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi'
import ID from '@salesforce/user/Id'
import NAME_FIELD from '@salesforce/schema/User.Name'
export default class WelcomeBoard extends LightningElement {
    userId = ID
    userDetail
    error
    @wire(getRecord, {recordId:'$ID' , fields:NAME_FIELD})
    userDetailHandler({data, error}){
        if(data){
            this.userDetail = data.fields
        }
        if(error){
            this.error=error;
            
        }
    }
}