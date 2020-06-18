//TABLE REFERENCE
var empRef = firebase.database().ref('Dates de concerts');
//$('#emp-table').find('tbody').html('');
var new_html = '';
window.onload = function () {
  initApp();
  displayEmpData();
};
//BUTTONS OR ACTIONS
function initApp() {
  document.getElementById('add_emp').addEventListener('click', addNewEmp, false);

}








// INSERT DATA
function addNewEmp() {
  var lieu = document.getElementById('lieu').value;
  var address = document.getElementById('address').value;
  var date = document.getElementById('date').value;
  var timeStamp = new Date().getTime();
  var empID = 'EMP_' + timeStamp;
  empRef.child(empID).set({
    lieu: lieu,
    address: address,
    date: date,
    emp_id: empID
  });
  $('#lieu').val('');
  $('#address').val('');
  $('#date').val('');
}



//Display Employee Data 


function displayEmpData() {

  empRef.on('child_added', function (empData) {
    console.log(empData.val());

    new_html += '<tr id="' + empData.val().emp_id + '">';
    new_html += '<td id="lieu_' + empData.val().emp_id + '">' + empData.val().lieu + '</td>';
    new_html += '<td id="address_' + empData.val().emp_id + '">' + empData.val().address + '</td>';
    new_html += '<td id="date_' + empData.val().emp_id + '">' + empData.val().date + '</td>';
    new_html += '<td><a  class="edit" data-toggle="modal"><i class="material-icons editEmp"';
    new_html += 'data-toggle="tooltip" data-emp-id="' + empData.val().emp_id + '" title="Edit">&#xE254;</i></a>';
    new_html += '<a class="delete" data-toggle="modal"><i class="material-icons delete"';
    new_html += 'data-toggle="tooltip"  data-emp-id="' + empData.val().emp_id + '" title="Delete">&#xE872;</i></a>';
    new_html += '</td>';
    new_html += '</tr>';

    $("#emp-table").html(new_html);

  });



  // $('#emp-table').find('tbody').append(new_html);

}

$(document).on('click', '.delete', function () {
  var emp_id = $(this).attr('data-emp-id');




  empRef.child(emp_id).once('value', function (emp) {
    var modal_header = '';

    modal_header += '<h4 class="modal-title">Delete ' + emp.val().lieu + '</h4>';
    modal_header += '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';

    var modal_body = '';
    modal_body += '<p>Are you sure you want to delete these Records?</p>';
    modal_body += '<p class="text-warning"><small>This action cannot be undone.</small></p>';
    var modal_footer = '';
    modal_footer += '<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">';
    modal_footer += '<input type="submit" data-dismiss="modal" data-emp-id="' + emp_id + '" class="btn btn-danger deleteEmpData" value="Delete">';
    $("#deleteEmployeeModal").find('.modal-header').html(modal_header);
    $("#deleteEmployeeModal").find('.modal-body').html(modal_body);
    $("#deleteEmployeeModal").find('.modal-footer').html(modal_footer);
    $("#deleteEmployeeModal").modal();
  })
});

$(document).on('click', '.editEmp', function () {
  var emp_id = $(this).attr('data-emp-id');




  empRef.child(emp_id).once('value', function (emp) {
    var modal_header = '';

    modal_header += '<h4 class="modal-title">Add ' + emp.val().lieu + '</h4>';
    modal_header += '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';

    var modal_body = '';
    modal_body += '<div class="form-group">';
    modal_body += '<label>lieu</label>';
    modal_body += '<input id="edit-lieu" type="text" value="' + emp.val().lieu + '" class="form-control" required>';
    modal_body += '</div>';
    modal_body += '<div class="form-group">';
    modal_body += '</div>';
    modal_body += '<div class="form-group">';
    modal_body += '<label>Address</label>';
    modal_body += '<textarea id="edit-address"  class="form-control" required>' + emp.val().address + '</textarea>';
    modal_body += '</div>';
    modal_body += '<div class="form-group">';
    modal_body += '<label>date</label>';
    modal_body += '<input id="edit-date" type="text" value="' + emp.val().date + '" class="form-control" required>';
    modal_body += '</div>';


    var modal_footer = '';
    modal_footer += '<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">';
    modal_footer += '<input type="submit" data-dismiss="modal" data-emp-id="' + emp_id + '"  class="btn btn-danger updateEmpData" value="Save">';
    $("#editEmployeeModal").find('.modal-header').html(modal_header);
    $("#editEmployeeModal").find('.modal-body').html(modal_body);
    $("#editEmployeeModal").find('.modal-footer').html(modal_footer);
    $("#editEmployeeModal").modal();
  })
});


$(document).on('click', '.deleteEmpData', function () {
  var emp_id = $(this).attr('data-emp-id');

  empRef.child(emp_id).remove();

  $('#' + emp_id).remove();


});


$(document).on('click', '.updateEmpData', function () {
  var emp_id = $(this).attr('data-emp-id');

  var lieu = document.getElementById('edit-lieu').value;
  var address = document.getElementById('edit-address').value;
  var date = document.getElementById('edit-date').value;


  empRef.child(emp_id).update({
    lieu: lieu,
    address: address,
    date: date
  });

  $('#lieu_' + emp_id).html(lieu);
  $('#address_' + emp_id).html(address);
  $('#date_' + emp_id).html(date);



});



$(document).on('click', '.dltAllData', function () {
  var emp_id = $(this).attr('data-emp-id');

  empRef.remove();

  $('#emp-table').remove();


});



/* recuperation de bd ê */

const datesLeft = document.getElementById('dates-left');
const datesRight = document.getElementById('dates-right');
const zenithScript = document.getElementById('zenith-script');
var leadsRef = firebase.database().ref('Dates de concerts');
var data = [];
leadsRef.once('value', function (snapshot) {
  snapshot.forEach(function (childSnapshot, index) {
    let childData = childSnapshot.val();
    data.push(childData);
  });
  data.forEach((childData, index) => {
    if (index < data.length / 2) {
      datesLeft.innerHTML = datesLeft.innerHTML + `<li class="wow fadeInRight highlight lhgh" data-index="${index}"> <span>${childData.date}</span><div class="fl-inner"><h4> ${childData.lieu}</h4><p>${childData.address}</p> <a href="./php/liste_groupe1.php"> Billets  </a></div></li>`;
    } else {
      datesRight.innerHTML = datesRight.innerHTML + `<li class="wow fadeInRight highlight lhgh" data-index="${index}"> <span>${childData.date}</span><div class="fl-inner"><h4> ${childData.lieu}</h4><p>${childData.address}</p> <a href="./php/liste_groupe1.php"> Billets  </a></div></li>`;
    }
  });
  zenithScript.setAttribute('src', 'js/zenith.js');
});