import React, { useState } from 'react';
import './usuario-recuperar-senha.css';
import Navbar from '../../components/navbar/';

import firebase from '../../config/firebase';
import 'firebase/auth';

function UsuarioRecuperarSenha(){

    const [email, setEmail] = useState();
    const [msg, setMsg] = useState();

    function recuperarSenha(){
        firebase.auth().sendPasswordResetEmail(email).then(resultado => {
            setMsg('Enviamos um link no seu e-mail para você redefinir sua senha!');
        }).catch(erro => {
            setMsg('Verifique se o email está correto!');
        })
    }

    return(
        <>
            <Navbar />

                <form className='text-center form-login mx-auto mt-5'>
                    <h3 className='mb-3 font-weight-bold'>Recuperar senha</h3>
                    <input onChange={(e) => setEmail(e.target.value)} type='email' className='form-control my-2' placeholder='Email' />

                    <div className='msg my-4 text-center'>
                        <span>{msg}</span>
                    </div>

                    <button onClick={recuperarSenha} type='button' className='btn btn-lg btn-block btn-enviar'>Recuperar senha</button>
                </form>

        </>
    )
}

export default UsuarioRecuperarSenha;