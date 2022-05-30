import UserList from './UserList';
import { render } from '@testing-library/react';

describe('when userList Renders without users', () => {
    const component = <UserList randomUsers={[]} />;
    it('displays a header', () => {
        render(component);

        const header = document.getElementById('random-users-header');

        expect(header).toContainHTML('Random Users');
    });
});

describe('when userList renders with users', () => {
    const component = (
        <UserList
            randomUsers={[
                {
                    nat: 'US',
                    picture: {
                        large: 'large',
                        medium: 'medium',
                        thumbnail: 'thum',
                    },
                    registered: {
                        age: 5,
                        date: 'date',
                    },
                    userName: 'testName',
                },
            ]}
        />
    );

    it('displays user photo, name, country and age', () => {
        render(component);

        const userPhoto = document.getElementById('testName-picture');
        const userName = document.getElementById('testName-username');
        const userCountry = document.getElementById('testName-nationality');
        const userAge = document.getElementById('testName-age');

        expect(userPhoto).toBeTruthy();
        expect(userName).toContainHTML('testName');
        expect(userCountry).toContainHTML('US');
        expect(userAge).toContainHTML('5');
    });
});
