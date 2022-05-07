
const firebaseConfig = {
      apiKey: "AIzaSyCPTkoBm8QZ3LDDF5kWtCOH-HdzRSAlbQ4",
      authDomain: "class-test-29d84.firebaseapp.com",
      databaseURL: "https://class-test-29d84-default-rtdb.firebaseio.com",
      projectId: "class-test-29d84",
      storageBucket: "class-test-29d84.appspot.com",
      messagingSenderId: "708823538743",
      appId: "1:708823538743:web:3fe1c2e489837137ca73b2"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+ "onclick='redirectToRoomName(this.id)' >#"+ Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addRoom() { room_name = document.getElementById("room_name").value; firebase.database().ref("/").child(room_name).update({ purpose: "adding room name" }); localStorage.setItem("room_name", room_name); window.location = "kwitter_page.html"; }
function redirectToRoomName(){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.htlm";
}

function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}

