var firebaseConfig = {
  apiKey: "AIzaSyCGR_sHpeI-WG2z13f06ITBb7XF4WksvFY",
  authDomain: "eatwithus-28ba7.firebaseapp.com",
  databaseURL: "https://eatwithus-28ba7.firebaseio.com",
  projectId: "eatwithus-28ba7",
  storageBucket: "eatwithus-28ba7.appspot.com",
  messagingSenderId: "650464539773",
  appId: "1:650464539773:web:f3e4726abcc46ed0696d14",
  measurementId: "G-1C6NQ6XPPS"
};

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

document.addEventListener('init', function (event) {
  var page = event.target;
  console.log(page.id);

  if (page.id === 'loginPage') {
    console.log("loginPage");

    $("#login").click(function () {
      var email = $("#email").val();
      var password = $("#password").val();
      firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
        content.load('food-category.html');
      })
        .catch(function (error) {
         
          console.log(error.message);
        });

    });

    $("#gmail").click(function () {
      console.log("gmail");
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        content.load('food-category.html');
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    });
  }
});



$("#carousel").empty();
db.collection("recommended").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {       
    var item = `<ons-carousel-item modifier="nodivider" id="item${doc.data().id}" class="recomended_item">
        <div class="thumbnail" style="background-image: url('${doc.data().photoUrl}')">
        </div>
    </ons-carousel-item>`
    $("#carousel").append(item);
  });
});

  $("#category").empty();
  db.collection("category").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {       
    var item = `<<ons-col modifier="nodivider" id="item${doc.data().id}">
        <div class="category_wrapper" style="background-image: url('${doc.data().photoUrl}')">
        </div>
    </<ons-col>`
    $("#category").append(item);
   });
});
    
