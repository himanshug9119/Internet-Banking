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
      var changepwd = function(){
        var oldpwd = document.getElementById("oldpwd").value;
        var newpwd1 = document.getElementById("newpwd1").value;
        var newpwd2 = document.getElementById("newpwd2").value;
        var pwd = "xyz";
        if(newpwd1 === newpwd2){
            if(oldpwd == pwd ){
            pwd = newpwd1;
            alert("Password Changed Successfully");
            }
        }
        else{
            alert("Try Again");

        }

      }
      var add_user = function(){
        var Name = document.getElementById("name").value;
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var account_no = document.getElementById("account").value;
        var contact_no = document.getElementById("contact").value;
        var balance = document.getElementById("balance").value;
        Node 
      }