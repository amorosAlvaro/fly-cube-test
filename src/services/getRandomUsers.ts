import { RandomUserClean } from '../interfaces/randomUserInterface';
import cleanUserData from '../helpers/cleanUserData';

const getRandomUsers = (userName: string): Promise<RandomUserClean | null> =>
    fetch('https://randomuser.me/api/')
        .then((res) => {
            if (!res.ok) {
                throw res;
            }
            return res.json();
        })
        .then((data) => cleanUserData(data.results[0], userName))
        .catch((error) => {
            console.log(error.status, error.statusText);
            return null;
        });

export default getRandomUsers;
