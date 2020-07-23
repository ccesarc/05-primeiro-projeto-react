import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from "../../services/api"

import logoExplorer from '../../assets/img/github-explorer.svg.svg';

import { Title, Form, Repositories } from './styles';

//function Dashboard() { }
const Dashboard: React.FC = () => {
  //Criar um stado apenas para armazerar o valor do input
  const [newRepo, setNewRepo] = useState('');
  const [repositories, serRepositories] = useState([]);

  function handleAddRepository(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('newRepo :', newRepo);
    //adição de um novo repository
    //consumir a api do github

  }

  return (
    <>
      <img src={logoExplorer} alt="Git logo" />
      <Title>Dashboard Dashboard Dashboard </Title>
      <Form onSubmit={handleAddRepository} >
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositorio"
        />
        <button type="submit" > Pesquisar</button>
      </Form>
      <Repositories>
        <a href="Teste">
          <img src="https://cdn.discordapp.com/avatars/521665962148102164/226f81ac772423a5ddc217c7f3786541" alt="Nome" />
          <div>
            <strong>Teste 123</strong>
            <p>as asd asda sd asd asd asda sd </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
}

export default Dashboard;
