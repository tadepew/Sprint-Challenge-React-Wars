import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";

const PeopleCard = props => {
  return (
    <Button color="secondary" size="lg" marginTop="4%">
      {props.name}
    </Button>
  );
};

export default PeopleCard;
