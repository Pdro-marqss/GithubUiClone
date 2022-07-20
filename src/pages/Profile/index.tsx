import React from 'react';

import { Container, Main, LeftSide, RightSide, Repos } from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';

const Profile: React.FC = () => {
    return (
        <Container>
            <Main>
                <LeftSide>
                    <ProfileData
                        username={'Pdro-marqss'}
                        name={'Pedro Marques'}
                        avatarUrl={'http://github.com/Pdro-marqss.png'}
                        followers={25}
                        following={28}
                        company={'Bizsys'}
                        location={'São Paulo, Brazil'}
                        email={'pedro_marquess@hotmail.com'}
                        blog={'https://pedromarques.vercel.app'}
                    />
                </LeftSide>

                <RightSide>
                    <Repos>
                        <h2>Random repos</h2>

                        <div>
                            {[1, 2, 3, 4, 5, 6].map(n => (
                                <RepoCard
                                    key={n}
                                    username={'Pdro-marqss'}
                                    reponame={'youtube-content'}
                                    description={'Contains all of my youtube lessons code'}
                                    language={n % 3 === 0 ? 'Javascript' : 'TypeScript'}
                                    stars={8}
                                    forks={4}
                                />
                            ))}
                        </div>
                    </Repos>
                </RightSide>
            </Main>
        </Container>
    );
};

export default Profile;