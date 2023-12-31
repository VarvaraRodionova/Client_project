const lostPass = document.getElementById("lostPass");

lostPass.addEventListener("click", async (event) => {
    
  let email = document.getElementById("email").value;

  if(!email) {
    alert('Пожалуйста, введите свой электронный адрес и мы отправим Вам новый пароль')
  } else {
    const response = await fetch("/lostpass", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      });
     const result = await response.json()
    
     Email.send({
        SecureToken: "e9767ca8-4f55-4038-8255-b6ff60799952",
        To: email, //result.name
        From: "varyarodionova@gmail.com",
        Subject: "This is the subject",
        Body: `Here is your new password: ${result.data}, please use it to log in!`
      }).then((message) => alert("На вашу почту отправлен новый пароль"));
  }
});
