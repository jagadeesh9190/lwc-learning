import { LightningElement } from 'lwc';
import hasViewAllData from '@salesforce/userPermission/ViewAllData'
import myCustomPermission from '@salesforce/customPermission/Show_Details'
export default class CheckPermissionDemo extends LightningElement {

    get hasViewAllDataAvialable(){ 
        return hasViewAllData
    }

    get hasCustomPermission(){ 
        return myCustomPermission
    }
}