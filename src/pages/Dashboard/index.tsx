import React from 'react';

import { FiChevronRight } from 'react-icons/fi';

import logoExplorer from '../../assets/img/github-explorer.svg.svg';

import { Title, Form, Repositories } from './styles';


//function Dashboard() { }

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoExplorer} alt="Git logo" />
      <Title>Dashboard Dashboard Dashboard </Title>
      <Form >
        <input type="text" placeholder="Digite o nome do repositorio" />
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

        <a href="Teste">
          <img src="https://cdn.discordapp.com/avatars/521665962148102164/226f81ac772423a5ddc217c7f3786541" alt="Nome" />
          <div>
            <strong>Teste 123</strong>
            <p>as asd asda sd asd asd asda sd </p>
          </div>
          <FiChevronRight size={20} />
        </a>

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
