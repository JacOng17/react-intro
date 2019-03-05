import React from "react";

// const Greetings = (props) => <div>Hi! My name is: {props.firstName} {props.lastName}.</div>;
// const Greetings = ({ firstName, lastName }) => <div>Hi! My name is: {firstName} {lastName}.</div>;

// const Greetings = ({ firstName, lastName }) => (
//     <div>
//         Hi! My name is: {firstName} {lastName}.
//     </div>
// );

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greetings(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />
    }
    return <GuestGreeting />;
}

export default Greetings;
