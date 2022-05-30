import React, { Dispatch, useState } from 'react';
import { RandomUserClean } from '../../interfaces/randomUserInterface';
import getRandomUsers from '../../services/getRandomUsers';
import logo from '../../asets/logo512.png';

const AddNewUserCard = ({
    randomUsersSetter,
    randomUsersState,
}: {
    randomUsersSetter: Dispatch<RandomUserClean[]>;
    randomUsersState: RandomUserClean[];
}) => {
    const [userInput, setUserInput] = useState<string>('');
    const [activateSend, setActivateSend] = useState(true);
    const [displayAlert, setDisplayAlert] = useState(false);

    const addUserToList = async (userName: string) => {
        const newRandomUser: RandomUserClean | null = await getRandomUsers(userName);

        if (!newRandomUser) return;

        if (!userName.length) {
            setDisplayAlert(true);
            return;
        }

        if (!randomUsersState) randomUsersSetter([newRandomUser]);

        if (randomUsersState) randomUsersSetter([...randomUsersState, newRandomUser]);
    };

    return (
        <div className="flex flex-col gap-3 items-center p-6">
            <div className="flex flex-row gap-3">
                <button
                    onClick={() => setActivateSend(true)}
                    type="button"
                    className={`${
                        activateSend
                            ? 'bg-gradient-to-r from-cyan-500 to-blue-500'
                            : 'bg-gradient-to-r from-gray-300 to-gray-400'
                    }  text-white rounded-md uppercase w-min py-2 px-4`}
                >
                    active
                </button>
                <button
                    onClick={() => setActivateSend(false)}
                    type="button"
                    className={`${
                        !activateSend
                            ? 'bg-gradient-to-r from-cyan-500 to-blue-500'
                            : 'bg-gradient-to-r from-gray-300 to-gray-400'
                    }  text-white rounded-md uppercase w-min py-2 px-4`}
                >
                    inactive
                </button>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-6 shadow-xl rounded-md p-12 shadow-primary">
                <img src={logo} className="w-72" alt="logo" />
                <form className="flex flex-col gap-6 items-center">
                    <div className="flex flex-col items-center">
                        <input
                            value={userInput}
                            className="rounded-md border-primary border-2"
                            onChange={(e) => {
                                e.preventDefault();
                                setUserInput(e.target.value);
                                if (e.target.value.length) setDisplayAlert(false);
                            }}
                        />
                        <p
                            className={`text-red-400 text-center text-sm ${
                                displayAlert ? 'visible' : 'invisible'
                            }`}
                        >
                            Please, enter valid name
                        </p>
                    </div>
                    {activateSend && (
                        <button
                            onClick={() => addUserToList(userInput)}
                            type="button"
                            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md  font-extrabold	uppercase w-min	py-2 px-4"
                        >
                            enviar
                        </button>
                    )}
                    {!activateSend && (
                        <button
                            onClick={() => addUserToList(userInput)}
                            type="button"
                            className="cursor-default bg-gradient-to-r from-gray-300 to-gray-400 text-white rounded-md  font-extrabold uppercase w-min	py-2 px-4"
                        >
                            enviar
                        </button>
                    )}
                </form>
            </div>
        </div>
    );
};

export default AddNewUserCard;
