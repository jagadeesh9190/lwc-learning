import { LightningElement, track, wire } from 'lwc';
import getAccountOptions from '@salesforce/apex/accConUseCase.getAccountOptions';

export default class AccountContactUseCase extends LightningElement {
    @track accountOptions = [];
    @track selectedAccountId = '';
    @track showModal = false;

    @wire(getAccountOptions)
    wiredAccountOptions({ error, data }) {
        if (data) {
            // Map the response data to the structure expected by lightning-combobox
            this.accountOptions = data.map(account => ({
                label: account.Name,
                value: account.Id
            }));
        } else if (error) {
            console.error(error);
        }
    }

    handleAccountChange(event) {
        this.selectedAccountId = event.detail.value;
    }

    handleCreateClick() {
        this.showModal = true;
    }

    handleSave() {
        // Handle save logic and show toast for successful creation
        this.showModal = false;
    }

    handleCancel() {
        this.showModal = false;
    }

    handleDisplayClick() {
        // Handle logic to display latest modified contacts and related accounts
    }
}