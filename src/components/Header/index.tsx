import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, GithubLogo, SearchForm } from './styles';


const Header: React.FC = () => {
    const [search, setSearch] = React.useState('');
    const navigate = useNavigate();

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        navigate('/' + search.toLowerCase().trim());
        setSearch('');
    }

    return (
        <Container>
            <GithubLogo />
            <SearchForm onSubmit={handleSubmit}>
                <input
                    placeholder='Enter Username or Repo...'
                    value={search}
                    onChange={e => setSearch(e.currentTarget.value)}
                />
            </SearchForm>
        </Container>
    );
};

export default Header;

