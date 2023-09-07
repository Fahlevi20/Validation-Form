function validateForm() {

    var name= document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var instansi = document.getElementById('instansi').value;

    var ErrorMessage ='';

    if (name == ''){
        ErrorMessage +='Nama harus diisi.\n';
    }

    if (email ==''){
        ErrorMessage +='Email harus diisi. \n';
    } else {
        var emailPattern =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(email)){
            ErrorMessage +='Email tidak valid. Masukkan email dengan benar. \n';
        }
    }
    if (instansi==''){
        ErrorMessage +='instansi harus diisi. \n';
    }
    if (ErrorMessage !==''){
        document.getElementById('error').innerHTML = ErrorMessage;
        return false;
    }
}
return true;