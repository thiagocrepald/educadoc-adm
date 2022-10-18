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
    const [usuarioEmail, setUsuarioEmail] = useState();

    function cadastrar() {
        alert('VAMOS CADASTRAR');
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
                        <input type='text' className='form-control'/>
                    </div>

                    <div className='form-group'>
                        <label>E-mail:</label>
                        <input type='text' className='form-control'/>
                    </div>

                    <div className='form-group row'>
                        <div className='col-6'>
                            <label>CRM:</label>
                            <input type='text' className='form-control'/>
                        </div>
                        <div className='col-6'>
                            <label>Emissão do CRM:</label>
                            <input type="date" className='form-control'/>
                        </div>
                    </div>

                    <div className='form-group row'>
                        <div className='col-6'>
                            <label>Especialidade</label>
                            <select className='form-control'>
                                <option disable selected value>-- Selecione a especialidade --</option>
                                <option>Pediatria</option>
                                <option>Clinico geral</option>
                            </select>
                        </div>

                        <div className='col-6'>
                            <label>Upload da foto:</label>
                            <input type='file' className='form-control'/>
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