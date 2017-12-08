//javascript tracker//

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBwzIX33xKga-0YRd6BVF1fR5sxonFcbyo",
    authDomain: "my-awesome-project-36d09.firebaseapp.com",
    databaseURL: "https://my-awesome-project-36d09.firebaseio.com",
    projectId: "my-awesome-project-36d09",
    storageBucket: "my-awesome-project-36d09.appspot.com",
    messagingSenderId: "145459121355"
  };
  firebase.initializeApp(config);



  var database = firebase.database();

  var name = "";
  var role = "";
  var startDate;
  var monthlyRate;
  var monthsWorked;
  var totalBilled;

  database.ref().on("value", function(snapshot) {

    $("#em-name").text(name);
    $("#em-role").text(role);
  }, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
  });


  $("#submit-bid").on("click", function(event) {
    event.preventDefault();

      var inputedName = $("#em-name").val().trim();
      var bidderPrice = parseInt($("#bidder-price").val().trim());


      database.ref().set({

      alert("shit is working.");

    }



  });
