import React from 'react';
import { Link } from 'react-router-dom';

import {
    Container,
    Breadcrumb,
    RepoIcon,
    Stats,
    StarIcon,
    ForkIcon,
    LinkButton,
    GithubIcon,
} from './styles';


const Repo: React.FC = () => {
    return (
        <Container>
            <Breadcrumb>
                <RepoIcon />

                <Link className={'username'} to={'/Pdro-marqss'}>
                    Pdro-marqss
                </Link>

                <span>/</span>

                <Link className={'reponame'} to={'/Pdro-marqss/youtube-content'}>
                    GithubUiClone
                </Link>
            </Breadcrumb>

            <p>Clone simplificado da interface do Github + comunicação com a API</p>

            <Stats>
                <li>
                    <StarIcon />
                    <b>9</b>
                    <span>stars</span>
                </li>
                <li>
                    <ForkIcon />
                    <b>0</b>
                    <span>forks</span>
                </li>
            </Stats>

            <LinkButton href={'https://github.com/Pdro-marqss/GithubUiClone'}>
                <GithubIcon />
                <span>View on github</span>
            </LinkButton>
        </Container>
    );
};

export default Repo;