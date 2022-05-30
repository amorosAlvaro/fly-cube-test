import React from 'react';
import { RandomUserClean } from '../../interfaces/randomUserInterface';

const UserList = ({ randomUsers }: { randomUsers: RandomUserClean[] }) => (
    <div className="p-4      bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between items-center mb-4">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                Random Users
            </h5>
        </div>
        <div className="flow-root">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {randomUsers.length > 0 &&
                    randomUsers.map((randomUser) => (
                        <li
                            className="py-3 sm:py-4"
                            key={`${randomUser.registered.date}-${randomUser.userName}`}
                        >
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    <img
                                        className="w-8 h-8 rounded-full"
                                        src={randomUser.picture.thumbnail}
                                        alt="Michael "
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        {randomUser.userName}
                                    </p>
                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                        {randomUser.nat}
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    {randomUser.registered.age}
                                </div>
                            </div>
                        </li>
                    ))}
            </ul>
        </div>
    </div>
);
export default UserList;
