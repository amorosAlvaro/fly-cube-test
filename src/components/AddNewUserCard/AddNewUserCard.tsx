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
            <ul className="flex flex-row divide-x divide-gray-300 ">
                <li>
                    <button
                        id="active-button"
                        onClick={() => setActivateSend(true)}
                        type="button"
                        className={`mx-4 text-white rounded-md uppercase w-min py-2 px-4 duration-200 ease-in-out bg-gradient-to-r ${
                            activateSend
                                ? 'from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400'
                                : 'from-gray-300 to-gray-400 hover:from-gray-200 hover:to-gray-300'
                        }`}
                    >
                        active
                    </button>
                </li>
                <li>
                    <button
                        id="inactive-button"
                        data-testid="inactive-button"
                        onClick={() => setActivateSend(false)}
                        type="button"
                        className={`mx-4 text-white rounded-md uppercase w-min py-2 px-4 duration-200 ease-in-out bg-gradient-to-r ${
                            !activateSend
                                ? 'from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400'
                                : 'from-gray-300 to-gray-400 hover:from-gray-200 hover:to-gray-300'
                        } `}
                    >
                        inactive
                    </button>
                </li>
            </ul>
            <div className="flex flex-col lg:flex-row items-center gap-6 shadow-xl rounded-md p-12 shadow-primary">
                <img src={logo} className="w-72" alt="logo" />
                <form className="flex flex-col gap-6 items-center">
                    <div className="flex flex-col items-center">
                        <input
                            id="user-input"
                            value={userInput}
                            className="rounded-md border-primary border-2 focus:outline-none focus:border-sky-500"
                            maxLength={15}
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
                            id="send-button"
                            onClick={() => addUserToList(userInput)}
                            type="button"
                            className="duration-200 ease-in-out bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-md  font-extrabold	uppercase w-min	py-2 px-4"
                        >
                            enviar
                        </button>
                    )}
                    {!activateSend && (
                        <button
                            id="send-button-inactive"
                            type="button"
                            className="duration-200 ease-in-out cursor-default bg-gradient-to-r from-gray-300 to-gray-400 hover:from-gray-200 hover:to-gray-300 text-white rounded-md  font-extrabold uppercase w-min	py-2 px-4"
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
