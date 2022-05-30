import { fireEvent, render, screen } from '@testing-library/react';
import AddNewUserCard from './AddNewUserCard';

describe('when addNewUserCard is rendered', () => {
    const component = (
        <AddNewUserCard randomUsersSetter={() => {}} randomUsersState={[]} />
    );

    it('te renders active, inactive and send buttons and an input field', () => {
        render(component);

        const activeButton = document.getElementById('active-button');
        const inactiveButton = document.getElementById('inactive-button');
        const inputButton = document.getElementById('user-input');
        const sendButton = document.getElementById('send-button');

        expect(activeButton).toBeTruthy();
        expect(inactiveButton).toBeTruthy();
        expect(inputButton).toBeTruthy();
        expect(sendButton).toBeTruthy();
    });
    it('if user clicks on inactivate, the send button becomes inactive', async () => {
        render(component);

        const inactiveButton = await screen.findByTestId('inactive-button');
        fireEvent.click(inactiveButton);

        const sendButton = document.getElementById('send-button');
        const sendButtonInactive = document.getElementById('send-button-inactive');

        expect(sendButton).toBeNull();
        expect(sendButtonInactive).toBeTruthy();
    });
});
