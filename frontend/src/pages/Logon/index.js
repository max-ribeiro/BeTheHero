import React,{useState} from 'react';
import {FiLogIn} from 'react-icons/fi'
import {Link, useHistory} from 'react-router-dom';

import api from '../../services/api';
import '../../global.css';
import './style.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon(){
    const [ong_id,setId] = useState('');

    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();
        try {
            const response = await api.post('sessions',{ong_id});
            localStorage.setItem('ongId',ong_id);
            localStorage.setItem('ongName',response.data.name)
            history.push('/profile');
        } catch (error) {
            alert('Falha no login, tente novamente.');
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input 
                        type="text" 
                        placeholder="Sua Id"
                        value={ong_id}
                        onChange={e=>setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>
                    <Link to="/register" className="back-link">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>
       
    );
}