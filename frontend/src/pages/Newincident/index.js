import React, { useState } from 'react';

import logoimg from '../../assets/logo.svg';

import '../../global.css'
import './styles.css';
import api from '../../services/api';

import { Link, useHistory } from 'react-router-dom';
import {FiArrowLeft } from 'react-icons/fi';

export default function NewIncident()
{

    const [title, setTitle] = useState('') ;
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    async function handleIncident(e)
    {
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };
        try
        {
            await api.post('incidents', data,{
                headers: {
                    Authorization: ongId
                }
            })
            history.push('/profile');
        }catch(err)
        {
            alert('Erro ao cadastrar caso, tente novamente.')
        }
    }

    return(
        <div className="new-incident-container">

            <div className="content">
                    <section>
                        <img src={logoimg} alt="Be The Hero"/>
                        <h1>
                            Cadastrar Novo Caso
                        </h1>
                        <p>
                            Descreva o caso detalhadamente para encontrar um herói para resolver isso.
                        </p>
                        <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para Home
                        </Link>
                    </section>
                    <form onSubmit={handleIncident}>
                        <input 
                            placeholder="Titulo do Caso"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            />
                        <textarea 
                            placeholder="Descrição"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            />
                        <input 
                            placeholder="Valor em Reais"
                            value={value}
                            onChange={e => setValue(e.target.value)}
                            />                    

                        <button className="button" type="submit">
                            Cadastrar
                        </button>
                    </form>
                </div>

         </div>
    )
}