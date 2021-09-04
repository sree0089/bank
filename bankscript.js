// local storage
//localStorage.key(index)
//localStorage.removeItem(key)
//localStorage.clear
//localStorage.setItem("username","admin")
//localStorage.setItem("password","admin@123")
//let pwd=localStorage.getItem("password")
//let uname=localStorage.getItem("username")
//localStorage.setItem("token","abc@123")

// var person1={pname:"ram",account_number:1000,balace:2000,password:"userone"}
// var person2={pname:"ram",account_number:1001,balace:2000,password:"userone"}

// //localStorage.setItem(person1.account_number,JSON.stringify(person1))
// //localStorage.setItem(person2.account_number,JSON.stringify(person2))

// function getBalance(account_number)
// {
//     if(account_number in localStorage)
//     {
//        let user1=JSON.parse(localStorage.getItem(account_number))
//        console.log(user1.balace);
//     }
//     else
//     {
//     console.log("Invalid Acoount number");
//     }

// }
// function authenticate(account_number,password)
// {
//     if(account_number in localStorage)
//     {
//       let user=JSON.parse(localStorage.getItem(account_number))
//       if(user.password == password && user.account_number==account_number)
//       {
//           console.log("Login Success");
//       }
//       else{
//           console.log("Invalid Login Details");
//       }
//     }
//     else{
//         console.log("Invalid ACcount Number");
//     }
// }

//JSON.Stringyfy
//JSON.Parse
class Bank {

    createAccount() {
        let person_name = name.value
        let account_number = acno.value
        let account_type = actype.value
        let balance = bal.value
        let password = pwd.value
        let user = {
            person_name, account_number,account_type, password, balance

        }
        localStorage.setItem(account_number, JSON.stringify(user))
        alert("ACCOUNT HAS BEEN CREATED SUCCESSFULLY")
        location.href = "bank.html"
    }
    // validateAccountNumber(acno)
    // {
    //     return acno in localStorage?true:false
    // }
    authenticate()
     {
        let account_number = acno.value
        let password = pwd.value
        if (account_number in localStorage) 
        {
            let user = JSON.parse(localStorage.getItem(account_number))
            if (user.password == password)
             {
                alert("Login Success")
                sessionStorage.setItem(account_number,JSON.stringify(user))
                location.href = "userhome.html"
            }
            else
             {
                alert("Invalid Login Details")
            }
        }
        else{
            alert("Invalid Login Details")
        }

    }

    balanceEnquiry()
    {
        let user=JSON.parse(sessionStorage.getItem(sessionStorage.key(0)))
        alert(`Available Balance ${user.balance}`)
    }

    fundTransfer()
    {
        let to_acno=toacno.value;
        let amount=amt.value;
        if(to_acno in localStorage)
        {
        let user=JSON.parse(sessionStorage.getItem(sessionStorage.key(0)))
             if(user.balance>=amount)
             {
                let user1=JSON.parse(localStorage.getItem(to_acno))
                let user2=JSON.parse(localStorage.getItem(user.account_number))
                let bal=Number (user1.balance) + Number(amount);
                user1.balance=bal;
                user2.balance-=amount;
                localStorage.setItem(user1.account_number,JSON.stringify(user1))
                localStorage.setItem(user2.account_number,JSON.stringify(user2))
                user2.balance-=amount;
                sessionStorage.setItem(user.account_number,JSON.stringify(user))  
             }
             else{
                 alert("Insufficient Balance")
             }
        }
        else{
            alert("Invalid Account number")
        }
    }
    logout()
    {
        sessionStorage.clear()
        location.href="bank.html"
    }
}
var bank = new Bank;
