import getRandomUsers from './getRandomUsers';

describe('when a random user is requested', () => {
    it('if response is OK a randomUser object is returned', async () => {
        // @ts-ignore
        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: true,
                json: () =>
                    Promise.resolve({
                        results: [
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
                            },
                        ],
                    }),
            })
        );

        const randomUser = await getRandomUsers('testName');

        expect(randomUser).toEqual({
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
        });
    });
    it('if response is !ok, null and error message is returned', async () => {
        // @ts-ignore
        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: false,
                status: 404,
                statusText: 'error',
            })
        );
        const randomUser = await getRandomUsers('testName');

        expect(randomUser).toBeNull();
    });
});
