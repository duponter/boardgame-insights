import {AnonymousUser, LoggedInUser} from './User';
import {useEffect, useState} from 'react';
import axios from 'axios';

export interface IBggUser {
    id?: string;
    username?: string;
    email?: string;
}

export const Status = () => {
    const [bggUser, setBggUser] = useState({} as IBggUser);

    useEffect(() => {
        axios.get('https://boardgamegeek.com/api/accounts/current', {
            // mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            withCredentials: true,
            // credentials: 'same-origin',
        })
            .then(response => {
                setBggUser({
                    id: response.data.user,
                    username: response.data.username,
                    email: response.data.email
                })
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
                setBggUser({} as IBggUser)
            });
    }, []);

    return (
        <>
            {bggUser.username && <LoggedInUser username={bggUser.username}/>}
            {!bggUser.username && <AnonymousUser/>}
        </>
    );
}