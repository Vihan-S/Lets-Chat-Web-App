function addUser(){
    username=document.getElementById("User name").value;
    localStorage=setItem("user name", username);
    window.location="kwitter_room.html";
}