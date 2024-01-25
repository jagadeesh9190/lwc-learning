import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList'

export default class ApexWireDemo extends LightningElement {
    accountList
    @wire(getAccountList)
    accounts

    @wire(getAccountList)
    accountHandler({data, error}){
        if(data){
            this.accountList= data.map(item=>{
                let newType = item.Type === 'Customer - Channel' ? 'Channel':
                item.Type === 'Customer - Direct' ? 'Direct':
                item.Type === 'Prospect' ? 'Prospect': '-----'
                return {...item, newType }

            })

        }
        if(error){

        }
    }
}