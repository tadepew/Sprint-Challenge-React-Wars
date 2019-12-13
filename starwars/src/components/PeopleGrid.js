import React, { useEffect, useState } from "react";
import axios from "axios";
import PeopleCard from "./PeopleCard";
import styled from "styled-components";

const CardBody = styled.div`
  margin: 0 auto;
  max-width: 80%;
  height: 60vh
  background: rgba(0, 0, 0, 0.3);
`;

const PersonCard = styled.div`
  margin: 0 auto;
  font-size: 1.6rem;
  display: flex;
  width: 50%;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default function PeopleGrid() {
  const [peopleData, setPeopleData] = useState([]);

  useEffect(() => {
    axios.get(`https://swapi.co/api/people/`).then(response => {
      console.log(response.data.results);
      setPeopleData(response.data.results);
    });
  }, []);

  return (
    <CardBody>
      <PersonCard>
        {peopleData.map((item, index) => {
          return <PeopleCard key={index} name={item.name} />;
        })}
      </PersonCard>
    </CardBody>
  );
}
