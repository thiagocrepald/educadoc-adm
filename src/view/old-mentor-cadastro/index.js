import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import './mentor-cadastro.css';
import {Link} from 'react-router-dom';
import Navbar from '../../components/navbar';

import firebase from '../../config/firebase';

function MentorCadastro() {

    const [msgTipo, setMsgTipo] = useState();

    const [foto, setFoto] = useState();
    const [nome, setNome] = useState();
    const [cpf, setCpf] = useState();
    const [data, setData] = useState();
    const [sexo, setSexo] = useState();
    const [crm, setCrm] = useState();
    const [estadocrm, setEstadocrm] = useState();
    const [formatura, setformatura] = useState();
    const [especialidade, setEspecialidade] = useState();
    const [celular, setCelular] = useState();
    const [email, setEmail] = useState();

    const storage = firebase.storage();
    const db = firebase.firestore();

    
    function cadastrar(){
        setMsgTipo(null);
        
        storage.ref(`images/${foto.name}`).put(foto).then(() => {
            db.collection('mentor').add({
                foto: foto.name,
                nome: nome,
                cpf: cpf,
                data: data,
                sexo: sexo,
                crm: crm,
                estadocrm: estadocrm,
                formatura: formatura,
                especialidade: especialidade,
                celular: celular,
                email: email,
                publico: 1,
                criacao: new Date(),
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
            <div className='col-12 mt-4'>
                <div className='row'>
                    <h3 className='mx-auto font-weight-bold'>Novo mentor</h3>
                </div>

                <form>
                    <div className='form-group'>
                        <div className='col-4'>
                            <label>Upload da foto:</label>
                            <input onChange={(e) => setFoto(e.target.files[0]) } type='file' className='form-control'/>
                        </div>
                    </div>

                    <div className='form-group'>
                        <label>Nome Completo:</label>
                        <input onChange={(e) => setNome(e.target.value) } type='text' className='form-control'/>
                    </div>

                    <div className='form-group'>
                        <label>CPF:</label>
                        <input onChange={(e) => setCpf(e.target.value) } type='text' className='form-control'/>
                    </div>

                    <div className='form-group row'>
                        <div className='col-4'>
                            <label>Data de nascimento:</label>
                            <input onChange={(e) => setData(e.target.value) } type='date' className='form-control'/>
                        </div>

                        <div className='col-4'>
                            <label>Sexo:</label>
                            <select onChange={(e) => setSexo(e.target.value) } className='form-control'>
                                <option disabled selected value>-- Selecione --</option>
                                <option>Masculino</option>
                                <option>Feminino</option>
                            </select>
                        </div>

                        <div className='col-4'>
                            <label>Celular:</label>
                            <input onChange={(e) => setCelular(e.target.value) } type='text' className='form-control'/>
                        </div>
                    </div>


                    <div className='form-group row'>
                        <div className='col-4'>
                            <label>CRM:</label>
                            <input onChange={(e) => setCrm(e.target.value) } type='text' className='form-control'/>
                        </div>
                        <div className='col-2>'>
                            <label>Estado do CRM:</label>
                            <input onChange={(e) => setEstadocrm(e.target.value) } type='text' className='form-control'/>
                        </div>
                        <div className='col-4'>
                            <label>Data da formatura:</label>
                            <input onChange={(e) => setformatura(e.target.value) } type='date' className='form-control'/>
                        </div>
                    </div>

                    <div className='form-group'>
                        <label>Especialidade:</label>
                        <select onChange={(e) => setEspecialidade(e.target.value) } className='form-control'>
                            <option disabled selected value>-- Selecione --</option>
                            <option>Clinico geral</option>
                            <option>Pediatra</option>
                        </select>
                    </div>

                    <div className='form-group'>
                        <label>E-mail do mentor:</label>
                        <input onChange={(e) => setEmail(e.target.value) } type='text' className='form-control'/>
                    </div>

                    <button onClick={cadastrar} type='button' className='btn btn-lg btn-block mt-3 mb-5 btn-cadastro'>Cadastrar</button>
                </form>

                <div className='msg-login text-center mt-2 text-center'>
                    {msgTipo === 'sucesso' && <span><strong>WoW!</strong> Mentor cadastro com sucesso! &#128526;</span>}
                        
                    {msgTipo === 'erro' && <span><strong>Ops!</strong> Não foi possivel cadastrar o mentor! &#128546;</span>}
                </div>
            </div>
        </>
    )
}

export default MentorCadastro;