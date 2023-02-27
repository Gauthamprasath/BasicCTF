var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
    document.getElementById("displayAttempts").innerHTML=attempt-1;
    var flag = document.getElementById("flag").value;
    if ( CryptoJS.MD5(flag) == "18df84797be1d3f1f2e7d255ad89a825"){
        alert ("You found the flag!");
        window.location = "challenge3.html"; // Redirecting to other page.
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