import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 3px;
  border: 2px solid darkgrey;
  color: #181816;
  margin: 2 1em;
  padding: 0.25em 1em;
  margin-top: 15%;
`;

const PeopleCard = props => {
  return <Button>{props.name}</Button>;
};

export default PeopleCard;
