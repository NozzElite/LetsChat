var firebaseConfig = {
      apiKey: "AIzaSyCi500cSvnxi1XLOfT_s73-UzCWns5hZMU",
      authDomain: "kwitter-5dc6c.firebaseapp.com",
      databaseURL: "https://kwitter-5dc6c-default-rtdb.firebaseio.com",
      projectId: "kwitter-5dc6c",
      storageBucket: "kwitter-5dc6c.appspot.com",
      messagingSenderId: "568316037062",
      appId: "1:568316037062:web:0a8f13ff60c57b89cdd4c7"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    
function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "lc_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}


    function send()
{
      msg=document.getElementById("msg").value ;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,like:0
      });
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      } });  }); }
getData();
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}