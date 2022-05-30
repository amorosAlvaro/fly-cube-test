import React, { useState } from 'react';
import { RandomUserClean } from './interfaces/randomUserInterface';
import AddNewUserCard from './components/AddNewUserCard/AddNewUserCard';

const App = () => {
    const [randomUsers, setRandomUsers] = useState<RandomUserClean[] | []>([]);

    return (
        <>
            <AddNewUserCard
                randomUsersSetter={setRandomUsers}
                randomUsersState={randomUsers}
            />
            {randomUsers.length > 0 &&
                randomUsers.map((user: RandomUserClean) => (
                    <p key={user.userName}>{user.userName}</p>
                ))}
        </>
    );
};

export default App;
