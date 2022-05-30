import React, { useState } from 'react';
import { RandomUserClean } from './interfaces/randomUserInterface';
import AddNewUserCard from './components/AddNewUserCard/AddNewUserCard';

const App = () => {
    const [randomUsers, setRandomUsers] = useState<RandomUserClean[] | []>([]);

    return (
        <>
            <div className="App">Hello world</div>

            <AddNewUserCard
                randomUsersSetter={setRandomUsers}
                randomUsersState={randomUsers}
            />
        </>
    );
};

export default App;
