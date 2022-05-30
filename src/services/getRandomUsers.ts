import { RandomUser } from './interfaces/randomUserInterface';

const getRandomUsers = (): Promise<RandomUser | null> =>
    fetch('https://randomuser.me/api/')
        .then((res) => {
            if (!res.ok) {
                throw res;
            }
            return res.json();
        })
        .then((data) => data.results[0])
        .catch((error) => {
            console.log(error.status, error.statusText);
            return null;
        });

export default getRandomUsers;
