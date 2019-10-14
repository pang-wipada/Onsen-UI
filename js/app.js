var firebaseConfig = {
  apiKey: "AIzaSyA2BZkIMEft7sROnStRX1ZAfrYSJlqgOEk",
  authDomain: "eatwithus-958ea.firebaseapp.com",
  databaseURL: "https://eatwithus-958ea.firebaseio.com",
  projectId: "eatwithus-958ea",
  storageBucket: "eatwithus-958ea.appspot.com",
  messagingSenderId: "266167491077",
  appId: "1:266167491077:web:70780e6070ad3f3e83da6c",
  measurementId: "G-1C755342CF"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore(); 


document.addEventListener('init', function (event) {
  var page = event.target;

  if (page.id === 'homePage') {
    console.log("homePage");

    $("#menubtn").click(function () {
      $("#sidemenu")[0].open();
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
  }

  $("#category").empty();
  db.collection("category").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {       
    var item = `<ons-carousel-item modifier="nodivider" id="item${doc.data().id}" class="recomended_item">
        <div class="thumbnail" style="background-image: url('${doc.data().photoUrl}')">
        </div>
    </ons-carousel-item>`
    $("#category").append(item);
   });
    });
  }
});