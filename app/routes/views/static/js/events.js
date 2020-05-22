$(document).ready(() => {
  //Iniciação de websocket e mensagem de entrada inicial
  const socket = io()
  $("#container").append("<span class='text-info'> You Joined The Chat!</span>" + "<br>")
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
    $("#container").append("<span class='text-success'>"+ socket.id + ": </span>" + 
                          "<span class='text-white'>" + $("#textbox").val() + "</span>" 
                          + "<br>")
                   .scrollTop($("#container").prop("scrollHeight"))

    socket.emit("send", "<span class='text-primary'>"+ socket.id + ": </span>" + 
                        "<span class='text-white'>" +  $("#textbox").val() + "</span>" + "<br>")
    $("#textbox").val("")
  })

/////////////// Eventos para recebimento de mensagem ////////////////////////
  socket.on("enter", (msg) =>{
    $("#container").append("<span class='text-warning'>"+ socket.id + "<span class='text-white'> Join The Chat!</span>" + "<br>")
                   .scrollTop($("#container").prop("scrollHeight"))
  })

  socket.on("receive", (msg) =>{
    $("#container").append(msg)
                   .scrollTop($("#container").prop("scrollHeight"))
  })

})
