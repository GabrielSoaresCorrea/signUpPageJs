const form = document.querySelector('#form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#password-confirm')
let login

form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkInput()
})

function checkInput() {
    const usernameValue = username.value
    const emailValue = email.value
    const passwordValue = password.value
    const confirmPasswordValue = confirmPassword.value

    if(usernameValue === ''){
        setError(username, 'O nome de usuário é obrigatório.')
    } else {
        setSuccess(username)
    }

    if(emailValue === ''){
        setError(email, 'O email é obrigatório.')
    } else if(!checkEmail(emailValue)){
        setError(email, 'Por favor, insira um email válido')
    } else {
        setSuccess(email)
    }

    if(passwordValue === ''){
        setError(password, 'A senha é obrigatória.')
    } else if(passwordValue.length < 7){
        setError(password, 'A senha deve conter pelo menos 7 caracteres')
    } else {
        setSuccess(password)
    }

    if(confirmPasswordValue === ''){
        setError(confirmPassword, 'A confirmação de senha é obrigatória')
    } else if(confirmPasswordValue !== passwordValue){
        setError(confirmPassword, 'As senhas não conferem')
    } else if(confirmPasswordValue.length < 7){
        setError(confirmPassword, 'A senha deve conter pelo menos 7 caracteres')
    } else {
        setSuccess(confirmPassword)
    }

    const formConstrols = form.querySelectorAll('.form-control')

    const formIsValid = [...formConstrols].every(formControl => {
        return formControl.className === 'form-control correct'
    })

    if(formIsValid) {
        alert('Cadastrado com sucesso!')
    }
}

function setError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control incorrect'
}

function setSuccess(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control correct'
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}