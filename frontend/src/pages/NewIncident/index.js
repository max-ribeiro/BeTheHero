import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi'

import logoImg from '../../assets/logo.svg';

import './style.css';

export default function NewIncident() {
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the hero" />
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolve-lo.</p>
                    <Link to="/profile" className="back-link">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para home
                </Link>
                </section>
                <form>
                    <input type="text" placeholder="Titulo do caso" />
                    <textarea type="text" placeholder="Descrição" />
                    <input type="text" placeholder="Valor em reais" />
                    
                    <div className="button" type="submit">
                        Registrar
                </div>
                </form>
            </div>
        </div>
    );
}