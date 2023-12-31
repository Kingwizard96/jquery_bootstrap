$( document ).ready(function() {
  //Display current date
  // set up date format
var a = moment().format('dddd MMMM Do YYYY, h:mm');
console.log(a);
  $("#currentDay").text(a)
  var row = ""
  //loop displays 9am-18pm
    for (var i= 9 ; i<=18; i++){
      // Creation of row elements
      row = $(`<div class="row">`)
      col1 = $(`<div class ="col-lg-2 hour">${displayAmorPm(i)}</div>`)
      col2 = $(`<div class ="col-lg-8 inputcontent"><input data-input="${i}" id="inputText${i}" class="form-control inputText" type="text" name="userInput"></div>`)
      col3 = $(`<div class ="col-lg-2"><button data-id="${i}" id="savePlanner" class="btn btn-success btn-block"><i class="fas fa-save"></i> Save</button></div>`)
      row.append(col1)
      row.append(col2)
      row.append(col3)
      $(".container-fluid").append(row)
      getlocalStorage(i)
    }
   $("button.btn.btn-success").click(function(e){
   var id = $(this).data("id")
   var inputText = $(this).parent().siblings().find("input").val()
   localStorage.setItem(id,inputText)
   })
  //  Convert Am to Pm
   function displayAmorPm(hour){
     var b=""
     if(hour<12){
       b= "AM"
     }else{
       b="PM"
     }
    hour = hour % 12
    hour = hour ? hour : 12
     return hour + " " + b
   }
  //  could use updateColor() here 
  });

   function getlocalStorage(hour){
     let inputval = localStorage.getItem(hour)
     if(true){
      var text= $(`input#inputText${hour}`).val(inputval)
      // console.log(hello,world)
     }
   }
   //update color
   function updateColor(){
     var hour = new Date().getHours();
     for (var i= 9 ; i<=18; i++){
      //  console.log(hour,i)

      // using javascript with css 
       if(hour==i ) {
        $(`#inputText${i}`).css("background","#ff6961")
       }else  if(hour<i ){
        
         $(`#inputText${i}`).css("background","#77dd77")

       }else{
        $(`#inputText${i}`).css("background","#d3d3d3")
       }
     }
   }
  //  will keep function going
   setInterval(function(){
     updateColor()
   },1000)