import React from 'react';
import {FiArrowLeft} from 'react-icons/fi';
import {Link} from 'react-router-dom';  

import './style.css';

import logoImg from '../../assets/logo.svg';

export default function Register() {
    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    <Link to="/" className="back-link">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar
                    </Link>
                </section>
                <form>
                    <input type="text" placeholder="Nome da ONG"/>
                    <input type="text" placeholder="E-Mail"/>
                    <input type="text"  placeholder="Whatsapp"/>
                    <div className="input-group">
                        <input type="text"  placeholder="Cidade"/>
                        <input type="text"  placeholder="UF" style={{
                            "width":80
                        }}/>
                    </div>
                    <div className="button" type="submit">
                        Registrar
                    </div>
                </form>
            </div>
        </div>
    );
}