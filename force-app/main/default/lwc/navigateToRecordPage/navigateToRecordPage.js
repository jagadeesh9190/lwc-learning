import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class NavigateToRecordPage extends NavigationMixin(LightningElement) {
    navigateToViewAccRec(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                objectApiName: 'Account',
                recordId :'0012w00001Pfu5FAAR',
                actionName:'view'
            }
        })
    }
    navigateToEditAccRec(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                objectApiName: 'Account',
                recordId :'0012w00001Pfu5FAAR',
                actionName:'edit'
            }
        })
    }
}