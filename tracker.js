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
  var startDate = moment().format("MM-DD-YYYY");
  var monthlyRate = 0;
  var monthsWorked;
  var totalBilled;

  database.ref().on("child_added", function(snapshot){
    console.log('here')
    $('#dostuff').append(
    `<tr class="active">
        <td id="table-name">${snapshot.val().inputName}</td>
        <td id="table-role">${snapshot.val().inputRole}</td>
        <td id="table-start">${snapshot.val().startDate}</td>
        <td id="months-worked"></td>
        <td id="table-rate">${snapshot.val().inputRate}</td>
        <td id="total-billed"></td>
    </tr>
    `)

  $("#submit-bid").on("click", function(event) {
    event.preventDefault();

      var inputName = $("#em-name").val().trim();
      var inputRole = $("#em-role").val().trim();
      var inputRate = parseInt($("#em-rate").val().trim());
      var startDate = $("#em-start").val().trim();

      // console.log({
      //   inputName: inputName,
      //   inputRole: inputRole,
      //   inputRate: inputRate,
      //   startDate: startDate,
      // })

      database.ref().push({
        inputName: inputName,
        inputRole: inputRole,
        inputRate: inputRate,
        startDate: startDate
      })



     // console.log(snapshot.val());
     // console.log(snapshot.on("child_added").inputName);
     // console.log(snapshot.on("child_added").inputRole);
     // console.log(snapshot.on("child_added").inputRate);
     // console.log(snapshot.on("child_added").startDate);

     // $("#table-name").append(snapshot.val().inputName);
     // $("#table-role").append(snapshot.val().inputRole);
     // $("#table-rate").append(snapshot.val().inputRate);
     // $("#table-start").append(snapshot.val().startDate);
   });

  });
