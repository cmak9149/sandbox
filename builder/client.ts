import { Account } from "./Account";
import { AccountBuilder, NetAccountBuilder, iAccountBuilder } from "./AccountBuikder";
// problem, difficult to read what is
// let account = new Account("123", "Peter", "Smith", "cell", "312-326-1234", "123 S Wells", null, "Chicago", "IL", "60616");

// environment 
let netAccountBuilder = new NetAccountBuilder();

let tranditionBuilder = new AccountBuilder();
test(tranditionBuilder);

function test(builder: iAccountBuilder) {
    let account = builder.id("123")
                    .firstName("Peter")
                    .lastName( "Smith")
                    .contactType("cell")
                    .contactNumber("312-326-1234")
                    .addressLine1("123 S Wells")
                    .addressLine2(undefined)
                    .city("Chicago")
                    .state("IL").zipCode("60616")
                    .create();
    account.detail();                    
}




