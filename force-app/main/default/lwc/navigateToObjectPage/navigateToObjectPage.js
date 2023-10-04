import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils'
export default class NavigateToNewRecordPage extends NavigationMixin(LightningElement) {

    navigateToAccRecPage(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName :'Account',
                actionName:'new'
            }
        })
    }
    navigateToAccRecPageWithDefault(){
        const defaultValues = encodeDefaultFieldValues({
            Name:'Tj',
            Rating:'Hot'

        })
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName : 'Account',
                actionName:'new'
            },
            state:{
                defaultFieldValues :defaultValues
            }
        })
    }
    navigateToAccListView(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName :'Account',
                actionName:'list'
            },
            state:{
                filterName : 'Recent'
            }
        })
    }
    navigateToFile(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes:{
                objectApiName:'ContentDocument',
                actionName: 'home'
            }
        })
    }
}