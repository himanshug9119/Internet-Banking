// Home js


class List {
    constructor(Name , username, password , account_no , contact_no , balance) {
    this.head = {
        Name  : Name ,
        username  : username ,
        password  : password ,
        account_no  : account_no ,
        contact_no  : contact_no ,
        balance  : balance ,
        next: null,
      };
      this.tail = this.head;
      this.size = 1;
    }
    appendNode(Name , username, password , account_no , contact_no , balance) {
      let newNode = {
        Name  : Name ,
        username  : username ,
        password  : password ,
        account_no  : account_no ,
        contact_no  : contact_no ,
        balance  : balance ,
        next: null,
      };
      this.tail.next = newNode;
      this.tail = newNode;
      this.size += 1;
    }
    traversing() {
      let counter = 0;
      let currentNode = this.head;
      while (counter < this.size) {
        console.warn(currentNode);
        currentNode = currentNode.next;
        counter++;
      }
    }
    deleteNode(usenam , accno) {
      
      let lead = this.head;
      let past;
      if (lead.username == usenam && lead.account_no == accno) {
        this.head = this.head.next;
      } else {
        while (lead && lead.username != usenam && lead.account_no != accno) {
          past = lead;
          lead = lead.next;
        }
        let nextNode = lead.next.next;
        past.next = nextNode;
      }
    }

    searchNode= function (username , password){
      let lead= this.head;
      while(lead){
        if(lead.username === username && lead.password === password){
          return true;
        }
        lead=lead.next;
      }
      alert("User Not Registered");
      return false;
    }
    increase= function (usernamex , amount){
      let lead = this.head;
      console.log("Username in list="+usernamex);
      while(lead){
        if(lead.username==usernamex){
        lead.amount += amount;
        return true;
        }
        lead = lead.next;
      }
      return false;
    }
    decrease = function(amount){
      let lead = this.head;
      while(lead){
        if(lead.username==usernamex){
        lead.amount -= amount;
        return true;
        }
        lead = lead.next;
      }
      return false;
    }

    setpwd=function(username , oldpassword , newpassword){
      let lead= this.head;
      while(lead){
        if(lead.username === username && lead.password === oldpassword){
          lead.password = newpassword;
          return true;
        }
        lead=lead.next;
      }
    }
    displayx = function (){
      let lead = this.head;
      // let count =1;
      // let id1 = "u" , id2 = "a" , id3 = "b";
      
      // while(lead){
      //   id1 += count;
      //   id2 += count;
      //   id3 += count;
      //   count++;
      //   document.getElementById(id1).innerHTML = lead.username;
      //   document.getElementById(id2).innerHTML = lead.account_no;
      //   document.getElementById(id3).innerHTML = lead.balance;
      //   id1 = "u" , id2 = "a" , id3 = "b";
      //   lead = lead.next;
      // }
      document.write("<table>");
      document.write("<tr>");
      document.write("<th>  &emsp;Name&emsp;  </th>");
      document.write("<th> &emsp;Username&emsp;  </th>");
      document.write("<th>  &emsp;Account Number&emsp;  </th>");
      document.write("<th>  &emsp;Contact No&emsp;  </th>");
      document.write("<th>  &emsp;Balance&emsp;  </th>");
      document.write("</tr>");
      var x = 6;
      while(x--){
      document.write("<tr>");
      document.write("<th>"+lead.Name+"</th>");
      document.write("<th>"+lead.username+"</th>");
      document.write("<th>"+lead.account_no+"</th>");
      document.write("<th>"+lead.contact_no+"</th>");
      document.write("<th>"+lead.balance+"</th>");
      document.write("</tr>");
      lead = lead.next;
      }
      document.write("</table>");

    }

  };
  let list = new List("Name1" , "username1", "password1" , 1 , 2 , 3);
  window.onload = function(){
    list.appendNode("Name2" , "username2", "password2" , 2 , 5 , 10);
    list.appendNode("Name3" , "username3", "password3" , 3 , 6 , 11);
    list.appendNode("Name4" , "username4", "password4" , 4 , 7 , 12);
    list.appendNode("Name5" , "username5", "password5" , 5 , 8 , 13);
    list.traversing();
    // console.log(list.head.username); 
  }
  let usernamex;

  var verifyUser = function (){
    var username1 = document.getElementById("username2").value;
    var password1 = document.getElementById("Password2").value;

    var xyz = list.searchNode(username1 , password1);
    if(xyz){
    window.location.replace("user.html");
    usernamex = username1;
    alert("Successfully");
    }
    else
    alert("Try again");

  }
var aduser = "admin";
var adpwd = "admin";

  var verifyAdmin = function (){
    var username2 = document.getElementById("username1").value;
    var password2 = document.getElementById("password1").value;

    if(username2 === aduser && password2===adpwd){
    window.location.replace("admin.html");
    alert("Login Successfully");
    }
    else
    alert("Try again");
    return;
  }


  //  admin js

  var modal1 = document.getElementById("id01");

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function (event) {
        if (event.target == modal1) {
          modal1.style.display = "none";
        }
      };
      var modal2 = document.getElementById("id02");

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function (event) {
        if (event.target == modal2) {
          modal2.style.display = "none";
        }
      };
      var modal3 = document.getElementById("id03");

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function (event) {
        if (event.target == modal3) {
            
          modal3.style.display = alert("Password Changed") ;
        }
      };
      

      var add_user = function(){
        var Name = document.getElementById("name").value;
        var usernamea = document.getElementById("username").value;
        var passworda = document.getElementById("password").value;
        var account_no = document.getElementById("account").value;
        var contact_no = document.getElementById("contact").value;
        var balance = document.getElementById("balance").value;
        alert("User Registered");
        list.appendNode(Name , usernamea , passworda , account_no ,contact_no, balance);
        window.location.replace("./admin.html");
      }

      var delete_user = function(){
      var usernme = document.getElementById("usenam").value;
      var account = document.getElementById("accnum").value;
      list.deleteNode(usernme , account);
      alert("User - " +usernme+ " deleted successfully");

      }

      var changepwd1 = function(){
        var oldpwdl = document.getElementById("oldpwda").value;
        var newpwd1l = document.getElementById("newpwd1a").value;
        var newpwd2l = document.getElementById("newpwd2a").value;
        if(adpwd == oldpwdl && newpwd1l == newpwd2l){
          adpwd = newpwd1l;
          alert("Password Changed");
        }
        else{
          alert("Try Again, Confirm new Password and new Password are not same ");
        }
      }
      var display2 = function(){
        list.displayx();
      }


  // user javascript 

  
  var modal1 = document.getElementById("id01");

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
  };
  var modal2 = document.getElementById("id02");

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal2) {
      modal2.style.display = "none";
    }
  };
  var modal3 = document.getElementById("id03");

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal3) {
        
      modal3.style.display = alert("Password Changed") ;
    }
  };

  var paymoney = function(){
    var amount = document.getElementById("paymoneym").value;
   
    alert("Amount Debited from your account");
    while(lead){
      if(lead.username==usernamex){
      lead.amount -= amount;
      found = 1;
      }
    }
    if(found==0)
    alert("Amount can't debited");
    // window.location.assign("admin.html");
  }

  var addmoney = function(){
    var amount = document.getElementById("addmon").value;
    alert("Amount Credited In your account"); 
    let p = list.increase(use,amount);
    console.log("p="+p);
    if(p)
    alert("Amount Credited In your account"); 
    else
    alert("Amount can't Credit"); 

    // window.location.assign("admin.html");
  }
 
  var changepwd2 = function(){
    var oldpwd = document.getElementById("oldpwd").value;
    var newpwd1 = document.getElementById("newpwd1").value;
    var newpwd2 = document.getElementById("newpwd2").value;

    let lead = head;
        while(lead){
        if(newpwd1 === newpwd2 ){
            if(lead.username == username1 && lead.password == oldpwd ){
            lead.password = newpwd1;
            alert("Password Changed Successfully");
            break;
            }
        }
        else{
          alert("Try Again Confirm new Password and new Password are not same ");
          }
        lead = lead.next;
        }
  }

  var displayblc=function (){
    let x = Math.floor(Math.random()*1000);
    alert("Balance in your account = "+x+ "."+x/1000 +" rupees " );
  }

