public with sharing class accConUseCase {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountOptions() {
        // Fetch account records, adjust the query based on your requirements
        return [SELECT Id, Name FROM Account];
    }
}