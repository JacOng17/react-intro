import React from "react";

// const Greetings = (props) => <div>Hi! My name is: {props.firstName} {props.lastName}.</div>;
// const Greetings = ({ firstName, lastName }) => <div>Hi! My name is: {firstName} {lastName}.</div>;

const Greetings = ({ firstName, lastName }) => (
    <div>
        Hi! My name is: {firstName} {lastName}.
    </div>
);

export default Greetings;
