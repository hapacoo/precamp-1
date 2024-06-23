
const phoneNumMove1 = () => {
   let phone1 = document.getElementById("phone1").value
   if(phone1.length ===3){
      document.getElementById("phone2").focus()
   }
}
const phoneNumMove2 = () => {
   let phone1 = document.getElementById("phone2").value
   if(phone1.length ===4){
      document.getElementById("phone3").focus()
   }
}

let isStarted = false

const confirmSend = () => {
 
   if(isStarted===false){
      isStarted = true
      document.getElementById("confirmCheck").disabled = false

      let randomNum = String(Math.floor(Math.random()*100000)).padStart(6,"0")
      document.getElementById("confirmNum").innerText = randomNum   

      let time = 180
      let timer
      timer = setInterval(function () {
      if (time >= 0) {
         let min = Math.floor(time / 60)
         let sec = String(time % 60).padStart(2, "0")
         document.getElementById("confirmTime").innerText = min + ":" + sec
         time = time - 1
         }
         else {
            document.getElementById("confirmCheck").disabled = true
            document.getElementById("confirmCheck").style = "color: #0068ff; background-color: white;"
            isStarted = false
            clearInterval(timer)
         }
      }, 1000)
   }else{
   }
   
}
const confirmCheck = () => {
   alert("인증이 완료되었습니다!")
}


const inputText = () => {
   let email = document.getElementById("email").value
   let name = document.getElementById("name").value
   let pw1 = document.getElementById("pw1").value
   let pw2 = document.getElementById("pw2").value

   if(email&&name&&pw1&&pw2){
      document.getElementById("confirmSend").disabled = false
      document.getElementById("confirmCheck").disabled = false
      document.getElementById("signup").disabled = false
      document.getElementById("confirmSend").style = "color: white; background-color: #0068ff;"
      document.getElementById("confirmCheck").style = "color: white; background-color: #0068ff;"
      document.getElementById("signup").style = "color: white; background-color: #0068ff;"
   }
}


const signup = () => {
   let email = document.getElementById("email").value
   let pw1 = document.getElementById("pw1").value
   let pw2 = document.getElementById("pw2").value

   if(!email.includes("@", ".")){
      alert("이메일 형식으로 작성해주세요.")
   }else if(pw1 !== pw2){
      alert("비밀번호가 동일하지 않습니다.")
   }else{
      alert("회원가입이 완료되었습니다!")
   }
   
}