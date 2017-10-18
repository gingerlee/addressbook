$(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var inputFirstName = $("input#firstname").val();
    var inputLastName = $("input#lastname").val();
    var inputStreetAddress = $("input#streetaddress").val();
    var inputAptNumber = $("input#aptnumber").val();
    var inputCity = $("input#city").val();
    var inputState = $("input#state").val();
    var inputZip = $("input#zip").val();
    var address = inputFirstName + inputLastName + inputStreetAddress + inputAptNumber + inputCity + inputState + inputZip;

    $(".firstname").after(inputFirstName);
    $(".lastname").after(inputLastName);
    $(".streetaddress").after(inputStreetAddress);
    $(".aptnumber").after(inputAptNumber);
    $(".city").after(inputCity);
    $(".state").after(inputState);
    $(".zip").after(inputZip);
    $("ul#address").append("<li></li>" + address);

  });
});
