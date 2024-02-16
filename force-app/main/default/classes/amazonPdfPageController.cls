public with sharing class amazonPdfPageController {
    public String pdfText{get;set;}
    public amazonPdfPageController() {
        pdfText = String.escapeSingleQuotes(
            ApexPages.currentPage().getParameters().get('pdfText')
        );

    }
}