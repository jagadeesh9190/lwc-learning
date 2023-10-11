import { LightningElement, wire } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi'
import ID from '@salesforce/user/Id'
import NAME_FIELD from '@salesforce/schema/User.Name'
import EMAIL_FIELD from '@salesforce/schema/User.Email'
const fieldsList = [NAME_FIELD, EMAIL_FIELD]
export default class WireDemoUserDetail extends LightningElement {
    userId = ID
    userDetail
    @wire(getRecord, {recordId:'$userId' , fields:fieldsList})
    userDetailHandler({data, error}){
        if(data){
            this.userDetail = data.fields
        }
        if(error){
            console.error(error)
        }
    }

    @wire(getRecord, {recordId:'$userId', fields:fieldsList})
    userDetailProperty
}