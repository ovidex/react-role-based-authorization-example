import React from 'react';

import { userService, authenticationService } from '@/_services';

class SenderPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            userFromApi: null
        };
    }

    componentDidMount() {
        const { currentUser } = this.state;
        userService.getById(currentUser.id).then(userFromApi => this.setState({ userFromApi }));
    }

    render() {
        const { currentUser, userFromApi } = this.state;
        return (
            <div>
                <h1>Senders page</h1>
                <p>You're logged in with React & JWT!!</p>
                <p>Your role is: <strong>{currentUser.role}</strong>.</p>
                <p>This page can be accessed by all sender users.</p>
                <div>
                    Current user from secure api end point:
                    {userFromApi &&
                        <ul>
                            <li>{userFromApi.firstName} {userFromApi.lastName}</li>
                        </ul>
                    }
                </div>
            </div>
        );
    }
}

export { SenderPage };