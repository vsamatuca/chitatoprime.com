
const form  = document.getElementById('form');
const campo = document.querySelectorAll('.required');
const span  = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidade();
    emailValidade();
    liveValidate();
    mainPasswordValidade();
    comparePasswordValidade();
});


function setError(formulario){
    campos[formulario].style.border = '2px solid #e63636';
    span[formulario].style.display = 'block';
}

function removeError(formulario){
    campos[formulario].style.border = '2px solid green';
    span[formulario].style.display = 'none';
}


function nameValidade(){
    if(campos[0].value.length < 5)
    {
        setError(0);
    }
    else
    {
        removeError(0);
    }
}

function emailValidade(){
    if(!emailRegex.test(campos[1].value))
    {
        setError(1);
    }
    else
    {
        removeError(1);
    }
}

function liveValidate(){
    if(campos[2].value.length < 5)
    {
        setError(2);
    }
    else
    {
        removeError(2);
    }
}

function mainPasswordValidade(){
    if(campos[3].value.length < 8)
    {
        setError(3);
    }
    else
    {
        removeError(3);
        comparePassword();
    }
}

function comparePasswordValidade(){
    if(campos[3].value == campos[4].value && campos[4].value.length >= 8)
    {
        removeError(4);
    }
    else
    {
        setError(4);
    }
}
