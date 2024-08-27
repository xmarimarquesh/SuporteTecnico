const LimparAlert = () => {
    let msg = "Digite 'TENHO CERTEZA' para confirmar";
    let p = prompt('Type here');
    alert(msg, p);

    if(p === 'TENHO CERTEZA'){
        return true;
    }else{
        return false;
    }
}