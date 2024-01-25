import { LightningElement, api } from 'lwc';

export default class CreateRelatedContact extends LightningElement {
    @api selectedAccountId;

    handleSave() {
        // Handle save logic and fire custom event to notify parent
        const saveEvent = new CustomEvent('save');
        this.dispatchEvent(saveEvent);
    }

    handleCancel() {
        // Fire custom event to notify parent about cancel
        const cancelEvent = new CustomEvent('cancel');
        this.dispatchEvent(cancelEvent);
    }
}