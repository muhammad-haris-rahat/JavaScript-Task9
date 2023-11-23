// !Question # 01

function displayFormData(){
    let userName = document.getElementById("username").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    let displayForm = document.getElementById("displayForm")
    displayForm.innerHTML = "<h4>Form Data :</h4>" +
    "<p><b>Username: </b>"  + userName + "</p>"  +
    "<p><b>Email: </b>" + email + " </p> " +
    "<p><b>Password: </b> " + password + " </p> " 

}


// !Question # 02

function readMore1(){
    let moreContent1 = document.getElementById("moreContent1")
    if(moreContent1.style.display === "none"){
        moreContent1.style.display = "inline"
    }else{
        moreContent1.style.display = "none"
    }
}function readMore2(){
    let moreContent2 = document.getElementById("moreContent2")
    if(moreContent2.style.display === "none"){
        moreContent2.style.display = "inline"
    }else{
        moreContent2.style.display = "none"
    }
}


// !Question # 03

function deleteRow(button) {
    var row = button.parentNode.parentNode
    row.parentNode.removeChild(row)
}