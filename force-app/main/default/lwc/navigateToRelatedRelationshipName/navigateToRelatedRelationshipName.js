import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
export default class NavigateToRelatedRelationshipName extends NavigationMixin(LightningElement) {
    navigateToAccRelatedCons(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordRelationshipPage',
            attributes:{
                objectApiName: 'Account',
                recordId :'0012w00001Pfu5FAAR',
                relationshipApiName:'Contacts',
                actionName:'view'
            }
        })

    }
}