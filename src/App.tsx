import React, { useState } from 'react';
import { RandomUserClean } from './interfaces/randomUserInterface';
import AddNewUserCard from './components/AddNewUserCard/AddNewUserCard';
import UserList from './components/UserList/UserList';

const App = () => {
    const [randomUsers, setRandomUsers] = useState<RandomUserClean[] | []>([]);

    return (
        <div className="flex flex-col items-center p-6 m-6">
            <AddNewUserCard
                randomUsersSetter={setRandomUsers}
                randomUsersState={randomUsers}
            />
            <UserList randomUsers={randomUsers} />
        </div>
    );
};

export default App;
