let contact = document.getElementById('form')
const regexEmail=/^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[a-zA-Z]+$/;
const regexPhone = /^(?:\d{8}|\d{4}-\d{4})$/;

let email = document.getElementById('email')
let phone = document.getElementById('phone')

contact.addEventListener('submit', (e) =>{

    e.preventDefault()
    let error = false;
    let errorMessage = "";
    
    if(!regexEmail.test(email.value)){
        error = true
        console.log(error)
        alert('El email es incorrecto')
    }

    if (!regexPhone.test(phone.value)) {
        error = true;
        console.log(error)
        alert('Número de teléfono inválido. Debe ser 8 dígitos o 4-4.');
    }


    if(error){
        alert('Revise los errores y vuelva a intentarlo.')
        console.log(errorMessage)
    }else{
        enviarConsulta(); 
        form.submit();
        
    }
})

function enviarConsulta(){
    alert('Consulta enviada')
}

function updateCharacterCount() {
    const textInput = document.getElementById("message");
    const entered = textInput.value.length;
    const maxLength = textInput.getAttribute("maxlength");
    const remaining = maxLength - entered;

    document.getElementById("entered").textContent = entered;
    document.getElementById("remaining").textContent = remaining;
}

