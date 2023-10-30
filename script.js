
//var actualPosition = document.location.href;

var section = document.getElementsByTagName("section")[0];

const changeTab = (nameTab) => {
    document.getElementsByTagName("h1")[0].innerText = nameTab;  
    //console.log(nameTab);

    //actualPosition = document.location.href;

    switch (nameTab) {
        case "Portfolio":
          portfolioTab();
        break;     
        case "Projects":
          projectsTab();
        break;
        case "About":
          aboutTab();
        break; 
        case "Contact":
          contactTab();
        break;
        case "Login":
            loginTab();
        break;
        default:
          portfolioTab();
      }

}

const portfolioTab = () => {    
section.innerHTML = "";
if(document.getElementsByClassName("home-div").length==0){
let div = document.createElement("div");
div.setAttribute("class","home-div");
section.appendChild(div);

let h2 = document.createElement("h2");
h2.setAttribute("class","home-h2");
div.appendChild(h2);

let par = document.createElement("p");
par.setAttribute("class","home-p");
div.appendChild(par);

let img = document.createElement("img");
img.setAttribute("class","hacker");
img.src = "https://raw.githubusercontent.com/AsmrProg-YT/Personal-Portfolios/master/Personal%20Portfolio%20%2301/images/header.png";
section.appendChild(img);

h2.innerText = "Hi, I'am ";
let txt = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quasi eaque molestiae dolore hic aperiam corporis ab distinctio iusto ratione doloremque, illum alias, magni non iure consequuntur molestias vitae fuga.";
  
par.innerText = txt; 
    
  }
}

const projectsTab = () => {
   section.innerHTML = "";
  
   if(document.getElementsByClassName("projects-div").length==0){

    let div = document.createElement("div");
    div.setAttribute("class","projects-div");
    section.appendChild(div);

    //bootstrap modal    

    //zakładka z projektami, prawdopodobnie będą w formie kart które będą się
    //powiekszały i będą prezentować galerię zdjęć+opis+komentarze.
    //komentarze beda przechowywane w bazie wraz z id projektu
    //projekt w bazie bedzie mial id, tytul,opis
    
    }

}

const aboutTab = () => {
    section.innerHTML = "";

    if(document.getElementsByClassName("about-div").length==0){

      let div = document.createElement("div");
      div.setAttribute("class","about-div");
      section.appendChild(div);
      
      let par = document.createElement("p");
      par.setAttribute("class","about-p");
      div.appendChild(par);
      let txt = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quasi eaque molestiae dolore hic aperiam corporis ab distinctio iusto ratione doloremque, illum alias, magni non iure consequuntur molestias vitae fuga.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quasi eaque molestiae dolore hic aperiam corporis ab distinctio iusto ratione doloremque, illum alias, magni non iure consequuntur molestias vitae fuga.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quasi eaque molestiae dolore hic aperiam corporis ab distinctio iusto ratione doloremque, illum alias, magni non iure consequuntur molestias vitae fuga.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quasi eaque molestiae dolore hic aperiam corporis ab distinctio iusto ratione doloremque, illum alias, magni non iure consequuntur molestias vitae fuga.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quasi eaque molestiae dolore hic aperiam corporis ab distinctio iusto ratione doloremque, illum alias, magni non iure consequuntur molestias vitae fuga.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quasi eaque molestiae dolore hic aperiam corporis ab distinctio iusto ratione doloremque, illum alias, magni non iure consequuntur molestias vitae fuga.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quasi eaque molestiae dolore hic aperiam corporis ab distinctio iusto ratione doloremque, illum alias, magni non iure consequuntur molestias vitae fuga.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quasi eaque molestiae dolore hic aperiam corporis ab distinctio iusto ratione doloremque, illum alias, magni non iure consequuntur molestias vitae fuga.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quasi eaque molestiae dolore hic aperiam corporis ab distinctio iusto ratione doloremque, illum alias, magni non iure consequuntur molestias vitae fuga.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quasi eaque molestiae dolore hic aperiam corporis ab distinctio iusto ratione doloremque, illum alias, magni non iure consequuntur molestias vitae fuga.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quasi eaque molestiae dolore hic aperiam corporis ab distinctio iusto ratione doloremque, illum alias, magni non iure consequuntur molestias vitae fuga.";
      
      par.innerText += txt;  
      par.innerText += txt; 
      //sekcja o mnie
  
      //Opis, doświadczenie, języki itp, może być w formie słupków
      //procentowych z https://getbootstrap.com/docs/4.0/components/progress/

      }
}

const contactTab = () => {

    section.innerHTML = "";


    if(document.getElementsByClassName("contact-div").length==0){

let h2 = document.createElement('h2');
h2.setAttribute('class', 'contact-h2');
h2.innerText = 'Send Your ';

let divContact = document.createElement('div'); 
divContact.setAttribute('class', 'container w-25 contact-div'); 

let formContact = document.createElement("form");
formContact.method = "POST";
formContact.action = "script.php";
divContact.appendChild(formContact);

let divMail = document.createElement('div'); 
divMail.setAttribute('class', 'mb-4 form-floating');

let inputMail = document.createElement('input'); 
inputMail.type = 'email'; 
inputMail.name = 'contactEmail';
inputMail.setAttribute('class', 'form-control'); 
inputMail.setAttribute('id', 'emailInput'); 
inputMail.placeholder = 'name@example.com'; 

let labelMail = document.createElement('label'); 
labelMail.setAttribute('for', 'emailInput'); 
labelMail.innerText = 'Email address';  

divMail.appendChild(inputMail); 
divMail.appendChild(labelMail); 

let divTextArea = document.createElement('div'); 
divTextArea.setAttribute('class', 'mb-4 form-floating'); 

let textArea = document.createElement('textarea'); 
textArea.setAttribute('class', 'form-control'); 
textArea.setAttribute('id', 'textAreaInput'); 
textArea.setAttribute('rows', '3'); 
textArea.name = "contactTextArea";

textArea.setAttribute("oninput","checkContactForm()");
inputMail.setAttribute("oninput","checkContactForm()");

let labelTextArea = document.createElement('label'); 
labelTextArea.setAttribute('for', 'textAreaInput'); 
labelTextArea.innerText = 'Your Message';

divTextArea.appendChild(textArea);
divTextArea.appendChild(labelTextArea); 
let sendButton = document.createElement('input'); 
sendButton.type ="submit"; 
sendButton.value = "Send Messages"; 
sendButton.setAttribute('class', 'btn btn-primary'); 
sendButton.setAttribute('id', 'contactSubmit'); 
sendButton.disabled = true;



section.appendChild(h2);
section.appendChild(divContact);
formContact.appendChild(divMail);
formContact.appendChild(divTextArea);
formContact.appendChild(sendButton);

      }
}

const checkContactForm = () => {

    let mail = document.getElementById('emailInput').value;
    let textAreaContent = document.getElementById('textAreaInput').value;

    if(mail.length>0 && textAreaContent.length>0 && mail.includes("@") && mail.includes(".") && !(mail.includes(';') ||mail.includes('"') || mail.includes("'")) && !(textAreaContent.includes(';') || textAreaContent.includes('"') || textAreaContent.includes("'"))){
      document.getElementById("contactSubmit").disabled = false;
    }
    else{
      document.getElementById("contactSubmit").disabled = true;
    }

}


const loginTab = () => {
    section.innerHTML = "";

    if(document.getElementsByClassName("login-div").length==0){

      let div = document.createElement("div");
      div.setAttribute("class","login-div");
      section.appendChild(div);

      let h2 = document.createElement('h2');
      h2.setAttribute('class', 'login-h2');
      h2.innerText = 'Please login to your ';
      div.appendChild(h2);

      let form = document.createElement("form");
      form.setAttribute("class","form-floating mb-3 login-form");
      form.method = "POST";
      form.action = "script.php";
      div.appendChild(form);

      let divMail = document.createElement("div");
      divMail.setAttribute("class","form-floating mb-3 mail-login");
      form.appendChild(divMail);

      let mailInput = document.createElement("input");
      mailInput.type = "email";
      mailInput.setAttribute("class","form-control");
      mailInput.setAttribute("id","floatingMail");
      mailInput.placeholder = "name@example.com";
      mailInput.name = "mail-login";
      mailInput.required = true;
      mailInput.setAttribute("oninput","checkLoginForm()");

      let mailLabel = document.createElement("label");
      mailLabel.setAttribute("for","floatingMail");
      mailLabel.innerText = "Login: email";

      divMail.appendChild(mailInput);
      divMail.appendChild(mailLabel);
      //-------

      let divPassword = document.createElement("div");
      divPassword.setAttribute("class","form-floating mb-3 password-login");
      form.appendChild(divPassword);

      let passwordInput = document.createElement("input");
      passwordInput.type = "password";
      passwordInput.setAttribute("class","form-control");
      passwordInput.setAttribute("id","floatingPassword");
      passwordInput.placeholder = "password";
      passwordInput.name = "password-login";
      passwordInput.required = true;
      passwordInput.setAttribute("oninput","checkLoginForm()");
      
      let passwordLabel = document.createElement("label");
      passwordLabel.setAttribute("for","floatingPassword");
      passwordLabel.innerText = "Login: password";

      divPassword.appendChild(passwordInput);
      divPassword.appendChild(passwordLabel);

      let submitButton = document.createElement('input');
      submitButton.type ="submit";
      submitButton.setAttribute('class', 'btn btn-primary w-50 login-btns sbmt');
      submitButton.value = 'Log in';
      submitButton.setAttribute('id','submitLogin');
      submitButton.disabled = true;

      let captchaDiv = document.createElement("div");
      captchaDiv.setAttribute("class","form-floating mb-3 captcha-div");
      //form.appendChild(captchaDiv);

      let divButtons = document.createElement("div");
      divButtons.setAttribute("class","form-floating mb-3 buttons-login");
      form.appendChild(divButtons);

      let signinButton = document.createElement('input');
      signinButton.type ="button";
      signinButton.setAttribute('class', 'btn btn-primary w-50 login-btns');
      signinButton.value = 'Sign in';
      signinButton.setAttribute('onclick', 'registerNewUser()');
      divButtons.appendChild(submitButton);
      divButtons.appendChild(signinButton);
      

      //wywolanie funkcji logowania ->
      //Sprawdzić czy pola nie są puste 
      //wtedy puscic dalej
      //jeżeli nie to wyświetlić komunikat pod spodem przycisków,
      //Sprawdzić czy nie ma cudzyslowiow itp zadnych znakow specjalnych
      //potem wywolać ajaxem funkcje php która pobierze dane
      //
  
      }
      
}

const registerNewUser = () => {

  section.innerHTML = "";

  if(document.getElementsByClassName("register-div").length==0){

    let div = document.createElement("div");
    div.setAttribute("class","register-div");
    section.appendChild(div);

    let h2 = document.createElement('h2');
    h2.setAttribute('class', 'register-h2');
    h2.innerText = 'Create a new ';
    div.appendChild(h2);

    let form = document.createElement("form");
    form.setAttribute("class","form-floating mb-3 register-form");
    form.method = "POST";
    form.action = "script.php";
    div.appendChild(form);

    let divMail = document.createElement("div");
    divMail.setAttribute("class","form-floating mb-3 mail-login");
    form.appendChild(divMail);

    let mailInput = document.createElement("input");
    mailInput.type = "email";
    mailInput.setAttribute("class","form-control");
    mailInput.setAttribute("id","floatingRegisterMail");
    mailInput.placeholder = "name@example.com";
    mailInput.name = "mail-register";
    mailInput.setAttribute("oninput","checkRegisterForm()");
    

    let mailLabel = document.createElement("label");
    mailLabel.setAttribute("for","floatingRegisterMail");
    mailLabel.innerText = "Register: email";

    divMail.appendChild(mailInput);
    divMail.appendChild(mailLabel);
    //-------

    let divPassword = document.createElement("div");
    divPassword.setAttribute("class","form-floating mb-3 password-login");
    form.appendChild(divPassword);

    let divPassword2 = document.createElement("div");
    divPassword2.setAttribute("class","form-floating mb-3 password2-login");
    form.appendChild(divPassword2);

    let passwordInput = document.createElement("input");
    passwordInput.type = "password";
    passwordInput.setAttribute("class","form-control");
    passwordInput.setAttribute("id","floatingPassword");
    passwordInput.placeholder = "password";
    passwordInput.name = "password-register";
    passwordInput.setAttribute("oninput","checkRegisterForm()");
    

    let passwordInput2 = document.createElement("input");
    passwordInput2.type = "password";
    passwordInput2.setAttribute("class","form-control");
    passwordInput2.setAttribute("id","floatingPassword2");
    passwordInput2.placeholder = "password";
    passwordInput2.name = "password2-register";
    passwordInput2.setAttribute("oninput","checkRegisterForm()");
    
    
    let passwordLabel = document.createElement("label");
    passwordLabel.setAttribute("for","floatingPassword");
    passwordLabel.setAttribute("class","registerLabels");
    passwordLabel.innerText = "Register: password";

    let passwordLabel2 = document.createElement("label");
    passwordLabel2.setAttribute("for","floatingPassword2");
    passwordLabel2.setAttribute("class","registerLabels");
    passwordLabel2.innerText = "Please repeat here your password";

    divPassword.appendChild(passwordInput);
    divPassword.appendChild(passwordLabel);
    divPassword2.appendChild(passwordInput2);
    divPassword2.appendChild(passwordLabel2);

    let submitButton = document.createElement('input');
    submitButton.type ="submit";
    submitButton.setAttribute('class', 'btn btn-primary w-50 register-btns sbmt');
    submitButton.value = 'Sign up';
    submitButton.setAttribute('id','submitRegister');
    submitButton.disabled = true;

    //.setAttribute("oninput","checkContactForm()"); do register i login
    //w login tylko na log in button

    let divButtons = document.createElement("div");
    divButtons.setAttribute("class","form-floating mb-3 buttons-register");
    form.appendChild(divButtons);

    divButtons.appendChild(submitButton);

    }

}



//guest może przeglądać wiadomości wysłane z powiązanym mailem i sprawdzać
//czy odczytane

//admin może przeglądać wiadomości + przeglądać statystyki
//nie moze "wyswietlac wiadomosci"

//owner moze wyswietlac wiadomosci + statystyki + zarządzać projektami

const checkRegisterForm = () => {

 

  let login = document.getElementById("floatingRegisterMail").value;
  let password1 = document.getElementById("floatingPassword").value;
  let password2 = document.getElementById("floatingPassword2").value;
  let submit = document.getElementById("submitRegister");

  submit.disabled = true;


  // if(mail.length>0 && textAreaContent.length>0 && mail.includes("@") && mail.includes(".") && !(mail.includes(';') ||mail.includes('"') || mail.includes("'")) && !(textAreaContent.includes(';') || textAreaContent.includes('"') || textAreaContent.includes("'"))){

  //sprawdzenie czy mail jest mailem i czy nie zawiera niedozwolonych znaków
  //sprawdzenie czy hasla nie zawierają niedozwolonych znaków
  //sprawdzenie czy hasla są takie same
  //jeżeli tak to odblokowanie przycisku register

}

const checkLoginForm = () => {

  document.getElementById("submitLogin").disabled = true;

}








































//różne funkcję do css
const customCursor = document.querySelector('.custom-cursor');

section.addEventListener('mousemove', (e) => {
  const x = e.pageX;
  const y = e.pageY;
  customCursor.style.left = x + 'px';
  customCursor.style.top = y + 'px';
  customCursor.style.transform = 'translate(-50%, -50%)';
});

var header = document.getElementsByClassName("header")[0];
const scrollPosition = 10;

window.addEventListener("scroll", () => {
  if (window.scrollY > scrollPosition) {
      // Po przewinięciu strony o odpowiednią pozycję zmieniamy kolor tła menu
      header.style.backgroundColor = "black";
  } else {
      // W przeciwnym wypadku przywracamy pierwotny kolor
      header.style.backgroundColor = "transparent";
  }
});







