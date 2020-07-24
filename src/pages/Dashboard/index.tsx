import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import logoExplorer from '../../assets/img/github-explorer.svg';

import { Title, Form, Repositories, Error } from './styles';

interface Repository {
  full_name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  description: string;
}

//function Dashboard() { }
const Dashboard: React.FC = () => {
  //Criar um stado apenas para armazerar o valor do input
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  //const [repositories, serRepositories] = useState<Repository[]>([]);
  const [repositories, serRepositories] = useState<Repository[]>(() => {
    const storeRespositories = localStorage.getItem(
      '@GitHumProjeto:repositories',
    );

    if (storeRespositories) {
      return JSON.parse(storeRespositories);
    } else {
      return [];
    }
  });

  //Sempre que tiver uma mudança em alguma variavel
  useEffect(() => {
    localStorage.setItem(
      '@GitHumProjeto:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Digite o nome do autor mais a barra.');
      return;
    }

    try {
      console.log('newRepo :', newRepo);
      //adição de um novo repository
      //consumir a api do github
      const response = await api.get<Repository>(`repos/${newRepo}`);

      const repository = response.data;

      console.log('repository :', repository);

      serRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch (error) {
      setInputError('Repositorio nao encontrado');
    }
  }

  return (
    <>
      <img src={logoExplorer} alt="Git logo" />

      <Title>Dashboard Dashboard Dashboard </Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositorio"
        />
        <button type="submit"> Buscar </button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <Repositories>
        {repositories.map(repository => (
          <Link
            key={repository.full_name}
            to={`/repository/${repository.full_name}`}
          >
            <img
              src={repository.owner.avatar_url}
              alt="{repository.full_name}"
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
