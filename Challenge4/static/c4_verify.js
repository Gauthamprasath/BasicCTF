var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
    document.getElementById("displayAttempts").innerHTML=attempt-1;
    var flag = document.getElementById("flag").value;
    if ( CryptoJS.MD5(flag) == "7cd2f6cf9595887dd8ee6c1a6a42f251"){
        alert ("You found the flag!");
        window.location = "challenge4.html"; // Redirecting to other page.
        return false;
    }
    else{
        attempt --;// Decrementing by one.
        alert("Incorrect Flag! You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
        if( attempt == 0){
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}
function getenc(str1,str2){
    return(CryptoJS.AES.encrypt(str1,str2).toString());
}

function getFlag(encrypted,passphrase){
    return(CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(encrypted,passphrase)));
}