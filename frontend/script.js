/*let socket = io();//here in the io function we specify the server to which it gets connected
socket.on('connected',()=>{
    console.log("connected" + socket.id)
})
//console.log("socket formed on" + socket.id)
$(function (){
  let msglist = $("#msglist")
  let sendbtn = $("#sendmsg")
  let msgbox = $("#msgbox")
  let loginbox = $("#loginbox")
  let loginbtn = $("#loginbtn")
  let loginDiv = $('#login-div')
  let chatDiv = $("#chat-div")

  let user = ''

  sendbtn.click(function(){
      socket.emit('send_msg',{
          user:user,
          message:msgbox.val()})
  })

  

  /*sendbtn.click(function(){
      let msg = msgbox.val()
      socket.emit('send_msg',{message:msgbox.val()})
  })*/

  /*loginbtn.click(function(){
    user = loginbox.val()
    chatDiv.show()
    loginDiv.hide()
})

  socket.on('recv_msg',function(data){
      msglist.append($('<li>' + data.user + ':' + data.message + '</li>'))
  })

})*/
let socket = io();
socket.on('connected', () => {
    console.log("Connected " + socket.id)
})

$(function () {
    let msglist = $('#msglist')
    let sendbtn = $('#sendmsg')
    let msgbox = $('#msgbox')
    let loginbox = $('#loginbox')
    let loginbtn = $('#loginbtn')
    let loginDiv = $('#login-div')
    let chatDiv = $('#chat-div')

    let user = ''

    sendbtn.click(function () {
        socket.emit('send_msg', {
            user: user,
            message: msgbox.val()
        })
    })

    loginbtn.click(function () {
        user = loginbox.val()
        chatDiv.show()
        loginDiv.hide()
        socket.emit('login', {
            user: user
        })
    })

    socket.on('recv_msg', function (data) {
        msglist.append($('<li>' + data.user + ': ' + data.message + '</li>'))
    })
})