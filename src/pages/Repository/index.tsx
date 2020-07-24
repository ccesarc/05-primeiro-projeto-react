import React, { useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Title, Header, RepositoryInfo, Issues } from './styles';
import logoExplorer from '../../assets/img/github-explorer.svg';

//function Dashboard() { }
interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {}, []);

  return (
    <>
      <Header>
        <img src={logoExplorer} alt="Git logo" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="" alt="" />
          <div>
            <strong>{params.repository}</strong>
            <p>asd asd asda dadasd a</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>123</strong>
            <span>100</span>
          </li>
          <li>
            <strong>123</strong>
            <span>100</span>
          </li>
          <li>
            <strong>123</strong>
            <span>100</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="asd">
          <div>
            <strong>12312312312</strong>
            <p>adasdasdasdadd</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
