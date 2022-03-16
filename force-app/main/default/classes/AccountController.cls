public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public Account[] getAccountList() {
        return [
            SELECT id, Name
            FROM Account
            WITH SECURITY_ENFORCED
        ];
    }
}
