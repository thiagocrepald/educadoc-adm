import React, { useState } from 'react';
import './login.css';
import {Link, Redirect} from 'react-router-dom';

import educalogo from '../../images/educadoc.png';

import firebase from '../../config/firebase';
import 'firebase/auth';

import { useSelector, useDispatch } from 'react-redux';

function Login(){
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();

    const dispatch = useDispatch();


    function logar(){
        
        firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
            setMsgTipo('sucesso')
            setTimeout(() => {
                dispatch({type: 'LOG_IN', usuarioEmail: email})
            },2000);
            
        }).catch(erro => {
            setMsgTipo('erro')
        });

    }

    return(
        <div className="login-content d-flex align-items-center">

            { useSelector(state => state.usuarioLogado) > 0 ? <Redirect to='/' /> : null }

            <form className="form-signin mx-auto text-center">
                <img className='logo' src={educalogo} alt="EducaDoc" width={180} text-center/>

                <p></p>

                <input onChange={(e) => setEmail(e.target.value) } type="email" id="inputEmail" class="form-control my-2" placeholder="Email" />
                <input onChange={(e) => setSenha(e.target.value) } type="password" id="inputPassword" class="form-control my-2" placeholder="Sua senha" />


                <button onClick={logar} class="btn btn-lg btn-block btn-login" type="button">Acessar</button>

                <div className='msg-login text-white text-center my-5 text-center'>
                    {msgTipo === 'sucesso' && <span><strong>WoW!</strong> Você está conectado! &#128526;</span>}
                        
                    {msgTipo === 'erro' && <span><strong>Ops!</strong> Verifique se a senha ou usuário estão corretos! &#128546;</span>}
                    
                </div>
                
                <div className='opcoes-login mt-5 text-center'>
                    <Link to='/usuariorecuperarsenha' className='mx-2'>Recuperar Senha</Link>
                    <span className='text-white'>&#9733;</span>
                    <Link to='novousuario' className='mx-2'>Quero Cadastrar</Link>
                </div>
            </form>
        </div>
    )
}

export default Login;