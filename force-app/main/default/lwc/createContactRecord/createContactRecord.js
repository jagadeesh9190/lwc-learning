import { LightningElement, track} from 'lwc';
import createContact from '@salesforce/apex/ContactFormController.createContact';
import { NavigationMixin } from 'lightning/navigation';
export default class CreateRecordWithFieldIntigrity extends NavigationMixin(LightningElement){
   
    @track firstNameValue;
    @track lastNameValue;
    @track emailvalue;
    @track mobilevalue;
    @track isValidMobile;

     handlefirstNameChange(event){
        this.firstNameValue = event.target.value;
    } 

    handleLastNameChange(event){
        this.lastNameValue = event.target.value;
    } 

    handleEmailChange(event){
        this.emailvalue = event.target.value;
    } 

    handleMobileChange(event){
        this.mobilevalue = event.target.value;
        this.isValidMobile = undefined; // Reset the value when the mobile number changes
    } 
   handleSave()
   {
       
        createContact({
            firstName: this.firstNameValue,
            lastName: this.lastNameValue,
            email: this.emailvalue,
            mobileNumber: this.mobilevalue
        })
        .then(result => {
            // Handle the result of the Apex method
            console.log('Apex method result:', result);
             console.log('recordId ::', result.Id);
             const recordId = result.Id;
          this[NavigationMixin.Navigate]({
                    type: 'standard__recordPage',
                    attributes: {
                        recordId:result,
                        objectApiName: 'Contact', 
                        actionName: 'view'
                    }
                });
        })
        .catch(error => {
            // Handle errors from the Apex method
            console.error('Error invoking Apex method:', error);

            // Show an error toast
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error',
                    message: 'An error occurred while creating the contact',
                    variant: 'error'
                })
            );
        });
   }

}