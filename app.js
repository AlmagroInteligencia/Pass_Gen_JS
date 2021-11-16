    function main(){    
    
    var length=document.getElementById("lenght").value;
    var upperCase=document.getElementById("uppercase").checked;
    var numers=document.getElementById("numbers").checked;
    var specialChars=document.getElementById("special_chars").checked;

    var characters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    passwordGenerated = "";
    
    if (upperCase) {
        characters.push("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z" );
    }
    if (numers) {
        characters.push("1","2","3","4","5","6","7","8","9","0");
    }
    if (specialChars) {
        characters.push("'","-","_","!","#","$","%","&","/","(",")");
    }
    
    var position = 0;
    for (let index = 0; index < length; index++) {
        position = Math.floor(Math.random() * characters.length);
        passwordGenerated += characters[position];    
    } 

    document.getElementById("result").innerHTML = "<h4>Pasword Generated: <br>" + passwordGenerated +"</h4>";
    //alert("Password generated: " + passwordGenerated);
}
