
const form   = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const span  = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidade();
    emailValidade();
    nifValidate();
    liveValidate()
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
    if(campos[0].value.length < 9)
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
function nifValidate(){
    if(campos[2].value.length < 10)
    {
        setError(2);
    }
    else
    {
        removeError(2);
    }
}
function liveValidate(){
    if(campos[3].value.length < 4)
    {
        setError(3);
    }
    else
    {
        removeError(3);
    }
}
function mainPasswordValidade(){
    if(campos[4].value.length < 8)
    {
        setError(4);
    }
    else
    {
        removeError(4);
        comparePassword();
    }
}
function comparePasswordValidade(){
    if(campos[4].value == campos[5].value && campos[5].value.length >= 8)
    {
        removeError(5);
    }
    else
    {
        setError(5);
    }
}