import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './mentor-cadastro.css';
import Navbar from '../../components/navbar/';
import {Link} from 'react-router-dom';

import firebase from '../../config/firebase';


function MentorCadastro() {

    const [msgTipo, setMsgTipo] = useState();
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [crm, setCrm] = useState();
    const [emissao, setEmissao] = useState();
    const [especialidade, setEspecialidade] = useState();
    const [foto, setFoto] = useState();
    const [usuarioEmail] = useSelector(state => state.usuarioEmail);
    
    const storage = firebase.storage();
    const db = firebase.firestore();


    function cadastrar() {
        setMsgTipo(null);
        
        storage.ref(`imagens/${foto.name}`).put(foto).then(() => {
            db.collection('mentor').add({
                nome: nome,
                email: email,
                crm: crm,
                emissao: emissao,
                especialidade: especialidade,
                foto: foto.name,
                usuario: usuarioEmail,
                criacao: new Date()
            }).then(() => {
                setMsgTipo('sucesso');
            }).catch(erro => {
                setMsgTipo('erro');
        });
    });
}

    return(
        <>
            <Navbar />
            <div className='col-12 mt-5'>
                <div className='row'>
                    <h3 className='mx-auto font-weight-bold'>Novo Mentor</h3>
                </div>

                <form>
                    <div className='form-group'>
                        <label>Nome Completo</label>
                        <input onChange={(e) => setNome(e.target.value) } type='text' className='form-control'/>
                    </div>

                    <div className='form-group'>
                        <label>E-mail:</label>
                        <input onChange={(e) => setEmail(e.target.value) } type='text' className='form-control'/>
                    </div>

                    <div className='form-group row'>
                        <div className='col-6'>
                            <label>CRM:</label>
                            <input onChange={(e) => setCrm(e.target.value) } type='text' className='form-control'/>
                        </div>
                        <div className='col-6'>
                            <label>Emissão do CRM:</label>
                            <input onChange={(e) => setEmissao(e.target.value) } type="date" className='form-control'/>
                        </div>
                    </div>

                    <div className='form-group row'>
                        <div className='col-6'>
                            <label>Especialidade</label>
                            <select onChange={(e) => setEspecialidade(e.target.value) } className='form-control'>
                                <option disable selected value>-- Selecione a especialidade --</option>
                                <option>Pediatria</option>
                                <option>Clinico geral</option>
                            </select>
                        </div>

                        <div className='col-6'>
                            <label>Upload da foto:</label>
                            <input onChange={(e) => setFoto(e.target.files[0]) } type='file' className='form-control'/>
                        </div>
                    </div>

                    <button onClick={cadastrar} type='button' className='btn btn-lg btn-block mt-3 mb-5 btn-cadastro'>Cadastrar</button>
                    
                </form>

                <div className='msg-login text-center my-2 text-center'>
                    {msgTipo === 'sucesso' && <span><strong>WoW!</strong> Cadastro efetuado com sucesso! &#128526;</span>}
                        
                    {msgTipo === 'erro' && <span><strong>Ops!</strong> Não foi possivel cadastrar, tente novamente! &#128546;</span>}
                </div>

            </div>
        </>
    )
}

export default MentorCadastro;