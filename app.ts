import { SharedAccount } from './class/SharedAccount';
import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(200)
peopleAccount.withdraw(50)
console.log(peopleAccount.getName, '-', peopleAccount.getBalance)


const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(250)
companyAccount.withdraw(50)
console.log(companyAccount.getName(), '-', companyAccount.getBalance())

const sharedAccount: SharedAccount = new SharedAccount(123456, 'Fulano', 1234)
sharedAccount.deposit(450)
sharedAccount.withdraw(70)
console.log(sharedAccount.getName() , '-' ,sharedAccount.getBalance())