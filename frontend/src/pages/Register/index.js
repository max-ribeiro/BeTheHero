import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory} from 'react-router-dom';

import api from '../../services/api';
import './style.css';

import logoImg from '../../assets/logo.svg';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsApp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();
    
    async function handleRegister(e) {
        e.preventDefault();
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };
        
        try{
            const response = await api.post('ongs',data); 
            alert(`Cadastro efetuado com sucesso, seu id de acesso é ${response.data.id}`)
            history.push('/');
        }catch(error){
            alert('Erro ao efetuar o cadastro, tente novamente.');
        }
        
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the hero" />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    <Link to="/" className="back-link">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input
                        required
                        placeholder="Nome da ONG"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />

                    <input
                        required
                        type="email"
                        placeholder="E-Mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <input
                        placeholder="Whatsapp"
                        value={whatsapp}
                        onChange={e => setWhatsApp(e.target.value)}
                    />

                    <div className="input-group">
                        <input
                            required
                            placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />

                        <input
                            required
                            placeholder="UF"
                            style={{"width": 80}}
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />
                    </div>
                    <button className="button" type="submit">
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    );
}