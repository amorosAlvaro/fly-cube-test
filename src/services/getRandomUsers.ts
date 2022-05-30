import { RandomUser, RandomUserClean } from '../interfaces/randomUserInterface';

const getRandomUsers = (userName: string): Promise<RandomUserClean | null> =>
    fetch('https://randomuser.me/api/')
        .then((res) => {
            if (!res.ok) {
                throw res;
            }
            return res.json();
        })
        .then((data: { results: RandomUser[] }) => {
            const { picture, nat, registered } = { ...data.results[0] };
            return {
                picture,
                nat,
                registered,
                userName,
            };
        })
        .catch((error) => {
            console.log(error.status, error.statusText);
            return null;
        });

export default getRandomUsers;
