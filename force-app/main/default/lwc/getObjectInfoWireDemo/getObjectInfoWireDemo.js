import { LightningElement, wire } from 'lwc';
import { getObjectInfos,getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity'
export default class GetObjectInfoWireDemo extends LightningElement {
    //defaultRecordTypeId
    //apiName
    objectDetails
    @wire(getObjectInfo, {objectApiName: ACCOUNT_OBJECT})
    objectInfo({data,error}){
        if(data){
            this.objectDetails =data;
            //this.defaultRecordTypeId = data.defaultRecordTypeId;
            //this.apiName = data.apiName;
        }
        if(error){
            console.log(error);
        }
    }
    @wire(getObjectInfo,{objectApiName: ACCOUNT_OBJECT})
    objectInfoProperty

    objectApiNames = [ACCOUNT_OBJECT, OPPORTUNITY_OBJECT]

    objectInfos
    @wire(getObjectInfos, { objectApiNames: '$objectApiNames' })
    objectInfosHandler({data,error}){
        if(data){
            console.log(data);
            this.objectInfos = data;
        }
        if(error){
            console.log(error);
        }
    }
}