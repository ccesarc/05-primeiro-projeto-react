import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Title } from './styles';

//function Dashboard() { }
interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return <Title>repository {params.repository}</Title>;
};

export default Repository;
