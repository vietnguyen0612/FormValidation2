var username = document.querySelector('#user__name')
var email = document.querySelector('#email')
var password = document.querySelector('#password')
var confirmPassword = document.querySelector('#confirm__password')
var error = document.querySelector('.form__error')
var inputs = document.querySelectorAll('.form input')

var submit = document.querySelector('.submit')



function showError (input,message) {
    var parent = input.parentElement
    parent.querySelector('.form__error').innerText = message
    parent.querySelector('.bar').classList.add('error')
}

function showSuccess (input) {
    var parent = input.parentElement
    parent.querySelector('.form__error').innerText = ''
    parent.querySelector('.bar').classList.remove('error')


}  

function Blur () {
    inputs.forEach(function(input) {
        input.onblur = function () {
            if(!input.value.trim()) {
                showError(input,'Can not be empty')
                
            }
            else {
                showSuccess(input)
                if(input == email) {
                    checkEmail(input)
                }
                if(input == password) {
                    checkPassword(input)
                }
                if(input == confirmPassword) {
                    checkConfirmPassword(input)
                }
            }
        }
    })
}

function Focus () {
    inputs.forEach(function(input) {
        input.onfocus = function () {
            showSuccess(input)
        }
    })
}

function checkEmptyError (lists) {
    lists.forEach(function(list) {
        if(!list.value.trim()) {
            showError(list,'Can not be empty')
        }
        else {
            showSuccess(list)
            if(list == email) {
                checkEmail(list)
            }
            if(list == password) {
                checkPassword(list)
            }
            if(list == confirmPassword) {
                checkConfirmPassword(list)
            }

        }
    })
}

function checkEmail (input) {
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if(regex.test(input.value.trim())) {
        showSuccess(input)
    }
    else{
        showError(input,'Email Invalid')
    }
}


function checkPassword (input) {
    if(input.value.length < 6) {
        showError(input, 'password consists of 6 characters')
    }
}

function checkConfirmPassword (input) {
    if(input.value !== password.value) {
        showError(input,'password is not the same')
    }
} 

submit.addEventListener('click',function(e) {
    e.preventDefault()

    checkEmptyError([username, email,password,confirmPassword])
})

Blur()
Focus()

