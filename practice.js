
//ADD YOUR FIREBASE LINKS
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
function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}