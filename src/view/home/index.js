import React, { useState } from 'react';
import './home.css';
import {Link} from 'react-router-dom';
import Navbar from '../../components/navbar/';
import Footer from '../../components/footer/';
import { useSelector } from 'react-redux';

function Home(){
    return(
        <>
            <Navbar />

                <div className="col-lg-6 mb-4 order-0 mt-4">
                  <div className="card">
                    <div className="d-flex align-items-end row">
                      <div className="col-sm-7">
                        <div className="card-body">
                          <h5 classNameName='card-title'>Seja Bem vindo! {useSelector(state => state.usuarioEmail )}  🎉</h5>
                          <p className="mb-4">
                            Todas as <span class="fw-bold">informações</span> para a gestão do app.
                          </p>

                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
            
            <Footer />
                
        </>
    )
}

export default Home;