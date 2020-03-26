import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi'

import api from '../../services/api';
import logoImg from '../../assets/logo.svg';

import './style.css';

export default function NewIncident() {
    const ongId = localStorage.getItem('ongId');

    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [value,setValue] = useState('');

    const history = useHistory();

    async function handleNewIncident(e){
        e.preventDefault();

        const data ={
            title,
            description,
            value,
        }
        try {
            const response = await api.post('/incidents',data, {
                headers:{
                    authorization:ongId
                }
            });
            alert("Caso cadastrado com sucesso");
            history.push('/profile');
        } catch (error) {
            alert('Houve um erro ao cadastra o caso, tente novamente.')
        }

    }

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
                <form onSubmit={handleNewIncident}>
                    <input  
                        placeholder="Titulo do caso" 
                        value={title}
                        onChange={e=>setTitle(e.target.value)}
                    />

                    <textarea 
                        placeholder="Descrição" 
                        value={description}
                        onChange={e=>setDescription(e.target.value)}
                    />

                    <input 
                        placeholder="Valor em reais" 
                        value={value}
                        onChange={e=>setValue(e.target.value)}
                    />
                    
                    <button className="button" type="submit">
                        Registrar
                    </button>
                </form>
            </div>
        </div>
    );
}