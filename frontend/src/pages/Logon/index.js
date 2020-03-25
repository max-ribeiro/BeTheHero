import React from 'react';
import {FiLogIn} from 'react-icons/fi'

import '../../global.css';
import './style.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon(){
    return(
        <>
            <div className="logon-container">
                <section className="form">
                    <img src={logoImg} alt="Be The Hero"/>
                    <form>
                        <h1>Faça seu logon</h1>
                        <input type="text" placeholder="Sua Id"/>
                        <button type="submit">Entrar</button>
                        <FiLogIn size={16} color="#E02041"/>
                        <a href="#">Não tenho cadastro</a>
                    </form>
                </section>
                <img src={heroesImg} alt="Heroes"/>
            </div>
        </>
    );
}