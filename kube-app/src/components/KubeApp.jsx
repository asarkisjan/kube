import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import PersonDataService from "./../api/PersonDataService";

const KubeApp = () => {
  const [allPersons, setAllPersons] = useState([]);

  useEffect(() => {
    PersonDataService.retrieveAllPersons()
      .then((response) => setAllPersons(response.data))
      .catch(() => {});
  }, []);

  return (
    <Container>
      <h1>Kube v3</h1>
      {console.log(allPersons)}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(allPersons) && allPersons.map((person, index) => (
            <tr key={index}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.age}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default KubeApp;
