import React from 'react';
import {Link} from 'react-router-dom';
import {FiPower,FiTrash2} from 'react-icons/fi';

import './style.css';

import logoImg from '../../assets/logo.svg';

export default function Profile(){
    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Bem Vinda, APAD</span>
                <Link className="button" to="/incidents/new">Cadastra novo caso</Link>
                <button type="button"><FiPower size={18} color="#E02041"/></button>
            </header>
            <h1>Casos cadastrados</h1>
            <ul>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso Teste</p>

                    <strong>Caso:</strong>
                    <p>Caso Teste</p>

                    <strong>Caso:</strong>
                    <p>Caso Teste</p>   

                    <button type="button"><FiTrash2 size={20} color="#A8A8B3"/></button>
                </li>

                <li>
                    <strong>Caso:</strong>
                    <p>Caso Teste</p>

                    <strong>Caso:</strong>
                    <p>Caso Teste</p>

                    <strong>Caso:</strong>
                    <p>Caso Teste</p>   

                    <button type="button"><FiTrash2 size={20} color="#A8A8B3"/></button>
                </li>

                <li>
                    <strong>Caso:</strong>
                    <p>Caso Teste</p>

                    <strong>Caso:</strong>
                    <p>Caso Teste</p>

                    <strong>Caso:</strong>
                    <p>Caso Teste</p>   

                    <button type="button"><FiTrash2 size={20} color="#A8A8B3"/></button>
                </li>

                <li>
                    <strong>Caso:</strong>
                    <p>Caso Teste</p>

                    <strong>Caso:</strong>
                    <p>Caso Teste</p>

                    <strong>Caso:</strong>
                    <p>Caso Teste</p>   

                    <button type="button"><FiTrash2 size={20} color="#A8A8B3"/></button>
                </li>
            </ul>
        </div>
    );
}