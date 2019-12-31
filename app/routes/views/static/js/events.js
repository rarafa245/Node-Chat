$(document).ready(() => {
  //Iniciação de websocket e mensagem de entrada inicial
  const socket = io()
  $("#container").append("<span class='username'> You Joined The Chat!</span>" + "<br>")
                 .scrollTop($("#container").prop("scrollHeight"))

///////////////// Eventos de envio de mensagem ////////////////////////////
  $("#textbox").keypress((event) => {
    if(event.keyCode == 13){
      if( $("#enter").is(":checked") ){
        $("#sendButton").click()
        event.preventDefault()
      }
    }
  })

  $("#sendButton").click(() => {
    $("#container").append("<span class='username'>"+ socket.id + ": </span>" +  $("#textbox").val() + "<br>")
                   .scrollTop($("#container").prop("scrollHeight"))

    socket.emit("send", "<span class='username'>"+ socket.id + ": </span>" +  $("#textbox").val() + "<br>")
    $("#textbox").val("")
  })

/////////////// Eventos para recebimento de mensagem ////////////////////////
  socket.on("enter", (msg) =>{
    $("#container").append("<span class='username'>"+ socket.id + "</span>" + " Joined The Chat!" + "<br>")
                   .scrollTop($("#container").prop("scrollHeight"))
  })

  socket.on("receive", (msg) =>{
    $("#container").append(msg)
                   .scrollTop($("#container").prop("scrollHeight"))
  })

})
