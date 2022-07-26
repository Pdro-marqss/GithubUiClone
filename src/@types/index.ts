export interface APIUser {
    login: string;
    name: string;
    followers: number;
    following: number;
    public_repos: string;
    avatar_url: string;
    blog?: string;
    company?: string;
    email?: string;
    location?: string;
}

export interface APIRepo {
    name: string;
    owner: {
        login: string;
    };
    stargazers_count: number;
    forks: number;
    html_url: string;
    language?: string;
    description?: string;
}

//2:20:50 DO VIDEO !!!!