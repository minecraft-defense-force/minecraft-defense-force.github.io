
function FontChange(){
  var form = document.forms.changeForm;
  var data = form._radio.value;

  if(data == 0){
    $("body").removeClass();
  }else if(data == 1){
    $("body").removeClass();
    $("body").addClass("RoundedMplus1c");
  }else if(data == 2){
    $("body").removeClass();
    $("body").addClass("SawarabiGothic");
  }else if(data == 3){
    $("body").removeClass();
    $("body").addClass("NotoSansJapanese");
  }
  alert("変更しました。");

}
