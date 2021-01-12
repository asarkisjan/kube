import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import PersonDataService from "./../api/PersonDataService";

const KubeApp = () => {
  const [allPersons, setAllPersons] = useState([]);

  useEffect(() => {
    PersonDataService.retrieveAllPersons()
      .then((response) => setAllPersons(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <h1>Kube</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {allPersons.map((person, index) => (
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
