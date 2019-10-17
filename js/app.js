var firebaseConfig = {
    apiKey: "AIzaSyBsO6vWqTSNIMft_Jlwz2URuCm51sL1nLA",
    authDomain: "food-delivery-ac2fb.firebaseapp.com",
    databaseURL: "https://food-delivery-ac2fb.firebaseio.com",
    projectId: "food-delivery-ac2fb",
    storageBucket: "food-delivery-ac2fb.appspot.com",
    messagingSenderId: "631600157158",
    appId: "1:631600157158:web:5865270b66b97762a6c627",
    measurementId: "G-GQT4LFYWD8"
  };

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

$("#carousel").empty();
db.collection("recommended").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {       
    var item = `<ons-carousel-item modifier="nodivider" id="item${doc.data().id}" class="recomended_item">
        <div class="thumbnail" style="background-image: url('${doc.data().photoUrl}')">
        </div>
    </ons-carousel-item>`
    $("#carousel").append(item);
  });
})

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
    
