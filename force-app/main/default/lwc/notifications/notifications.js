import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class Notifications extends LightningElement {
    showToast(title,message,variant){
        const event = new ShowToastEvent({
            title,
            message,
            variant,
            messageData:['Salesforce',{
                url:'https://www.salesforce.com',
                label:'ClickHear'
            }
        ],
            mode: 'sticky'
        });
        this.dispatchEvent(event)
    }
    successHandleClick(){
        this.showToast("Success!!","{0} Account Created....{1}","success");
    }
    errorHandleClick(){
        this.showToast("Error!!","Account Creation Failed....","error");
    }
    warningHandleClick(){
        this.showToast("Warning!!","Password Should Have 15 Characters....","warning");
    }
    informationHandleClick(){
        this.showToast("Information","Summer 20 release is available", "info")
    }
    
}