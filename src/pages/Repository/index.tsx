import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import { Title, Header, RepositoryInfo, Issues } from './styles';
import logoExplorer from '../../assets/img/github-explorer.svg';

//function Dashboard() { }
interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api.get(`repos/${params.repository}`).then(responce => {
      console.log('responce.data : ', responce.data);
      setRepository(responce.data);
    });
    api.get(`repos/${params.repository}/issues`).then(responce => {
      console.log('responce.data : ', responce.data);
      setIssues(responce.data);
    });

    // async function loadData(): Promise<void> {
    //   race;
    //   const [repository, issues] = await Promise.all([
    //     api.get(`repos/${params.repository}`),
    //     api.get(`repos/${params.repository}/issues`),
    //   ]);
    //   console.log('repository.repository : ', repository);
    //   console.log('issues.issues : ', issues);
    // }
    // loadData();
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={logoExplorer} alt="Git logo" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      {repository ? (
        <RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>start</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>issues abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      ) : (
        <p>Carregamdo</p>
      )}

      {issues.map(issues => (
        <Issues>
          <a key={issues.id} href={issues.html_url}>
            <div>
              <strong>{issues.title}</strong>
              <p>{issues.user.login}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        </Issues>
      ))}
    </>
  );
};

export default Repository;
