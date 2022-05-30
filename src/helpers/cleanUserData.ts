import { RandomUser, RandomUserClean } from '../interfaces/randomUserInterface';

const cleanUserData = (rawUserData: RandomUser, userName: string): RandomUserClean => {
    const { picture, nat, registered } = { ...rawUserData };
    return {
        picture,
        nat,
        registered,
        userName,
    };
};

export default cleanUserData;
