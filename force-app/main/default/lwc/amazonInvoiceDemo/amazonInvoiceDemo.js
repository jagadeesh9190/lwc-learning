import { LightningElement, track } from 'lwc';
import generatePDF from '@salesforce/apex/amazonPdfController.generatePDF'

export default class AmazonInvoiceDemo extends LightningElement {

    imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
    invoiceHeading = {
        line1: 'Tax Invoice/Bill of Supply/Cash Memo',
        line2: '(Original for Recipient)'
    }
    ClientSoldBy = {
        clientName: 'RETAILEZ PRIVATE LIMITED',
        clientAddress1: '*No. 1/B, IndoSpace Logistics Park,',
        clientAddress2: 'Puduvoyal,Durainallur Village, Ponneri Taluk',
        clientAddress3: 'Thiruvalluvar, Tamil Nadu, 601206',
        clientAddress4: 'IN '
    }
    customerBillingAddress = {
        customerName: 'Jagadeesh',
        customerAddress1: '9-41-16/r, Phitapuram colony',
        customerAddress2: 'VISAKHAPATNAM, ANDHRA PRADESH, 530003',
        customerAddress3: 'IN',
        customerStateCode: '37'
    }
    otherDetails = {
        panNo: 'AALCR3173P',
        gstRegNo: '33AALCR3173P1ZU',
        qrCode: '**'
    }
    shippingAddress = {
        firstName: 'Jagadeesh',
        lastName: 'Tirumalasetti',
        shippingAddress1: '1-164, NEAR Seetharamraju statue',
        shippingAddress2: 'NARASAPUR, ANDHRA PRADESH, 534275',
        shippingAddress3: 'IN',
        shippingStateCode: '37',
        shippingSupply: 'Andhra Pradesh',
        shippingDelivery: 'Andhra Pradesh'
    }
    orderDetails = {
        orderNo: '171-6765370-7979516',
        orderDate: '16.01.2024'
    }
    inoiceDetails = {
        invoiceNo: 'MAA4-2103942',
        invoiceDetails: 'TN-MAA4-1931441115-2324',
        invoiceDate: '16.01.2024'
    }
    @track invoiceData = [
        {
            id: 1,
            description: 'Anjali - FC02 Fantastique Deluxe Stainless Steel Veg Cutter | B00V6XO47A ( B00V6XO47A ) HSN:39241090',
            unitPrice: '₹266.96',
            discount: '-₹8.01',
            quantity: 2,
            netAmount: '₹517.90',
            taxRate: '12% IGST',
            taxType: 'IGST',
            taxAmount: '₹62.16',
            totalAmount: '₹580.06'
        }
    ]
    invoiceShippingData = [
        {
            id: 1,
            description: 'Shipping Charges',
            unitPrice: '₹35.71',
            discount: '-₹35.71',
            quantity: '',
            netAmount: '₹0.00',
            taxRate: '12% IGST',
            taxType: 'IGST',
            taxAmount: '₹0.00',
            totalAmount: '₹0.00'
        }
    ]
    totalAmount = [
        {
            id: 1,
            label: 'TOTAL:',
            taxAmount: '₹62.16',
            totalAmount: '₹580.06'
        }
    ]
    totalAmountInWords = {
        description: 'Amount in Words:',
        amountInWord: 'Five Hundred Eighty Point Zero Six only'
    }
    authSign = {
        description: 'For RETAILEZ PRIVATE LIMITED:',
        sign: 'Authorized Signatory'
    }
    bottomDesc = {
        description: 'Whether tax is payable under reverse charge - No'
    }
    connectedCallback() {
        // Add serial number to each item in invoiceData
        this.invoiceData = this.invoiceData.map((item, index) => ({ ...item, serialNumber: index + 1 }));
    }
    pdfHandler() {
        let content = this.template.querySelector('.container')
        console.log(content.outerHTML)
        generatePDF({ recordId: this.recordId, htmlData: content.outerHTML }).then(result => {
            console.log("attachment id", result)
            window.open(`https://agility-fun-2547-dev-ed--c.documentforce.com/servlet/servlet.FileDownload?file=${result.Id}`)
        }).catch(error => {
            console.error(error)
        })
    }
}

/*

*/