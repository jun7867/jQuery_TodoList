var todos = new Array();
$("#addButton").click(function() {
  var text = $("#inputBox").val();

  todos[text]=false;
  $("#inputBox").val("");
  console.log(todos);

  $(".contents ul").append(liTemplate(text)); //text에 있는거 리스트 추가
});

function inputTemplate(text){
  var inputTag = $('<input type="checkbox" id="checkbox">');
  inputTag.data("value",text);
  return inputTag;
}
function buttonTemplate(text){
  var buttonTag=$('<button id="deleteButton">X</button>');
  buttonTag.data("value",text);
  return buttonTag;
}
function liTemplate(text) {
  var li= $("<li></li>");

  li.attr("value",text);
  li.append(inputTemplate(text));
  li.append(text);
  li.append(buttonTemplate(text));

  li.click(function(event) {
    var el= $(event.target); //무슨 이벤트인지 확인.
    console.log(el.data("value"));

    if (el.is("button")) {
      delete todos[text];
      $(`li[value='${text}']`).remove();
      } else if (el.is("input[type='checkbox']")) {
      var isChecked = el.is(":checked");
      if (isChecked) {
        $(`li[value='${text}']`).addClass("checked");
        todos[text]=true;
      } else {
        $(`li[value='${text}']`).removeClass("checked");
        todos[text]=false;
      }
    }
  });

  return li;
}
