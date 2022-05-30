import React, { Dispatch } from 'react';
import { RandomUserClean } from '../../interfaces/randomUserInterface';
import getRandomUsers from '../../services/getRandomUsers';

const AddNewUserCard = ({
    randomUsersSetter,
    randomUsersState,
}: {
    randomUsersSetter: Dispatch<RandomUserClean[]>;
    randomUsersState: RandomUserClean[];
}) => {
    const addUserToList = async (userName: string) => {
        const newRandomUser: RandomUserClean | null = await getRandomUsers(userName);

        if (!newRandomUser) return;

        if (!randomUsersState) randomUsersSetter([newRandomUser]);

        if (randomUsersState) randomUsersSetter([...randomUsersState, newRandomUser]);
    };

    return (
        <button type="button" onClick={() => addUserToList('testUser')}>
            add user
        </button>
    );
};

export default AddNewUserCard;
