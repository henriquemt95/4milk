import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
let thArray = ["Id", "Usuario", "Email", "Nome", "Endereço", "Cidade", "País"],
  tdArray = JSON.parse(localStorage.getItem('user'), '[]');

class TableList extends Component {
  componentDidMount() {
    thArray = ["Id", "Usuario", "Email", "Nome", "Endereço", "Cidade", "País"];
    tdArray = JSON.parse(localStorage.getItem('user'), '[]');
    if (!tdArray) {
      tdArray = [[" ", " ", " ", " ", " ", " ", " "]];
    }

  }
  componentWillMount() {
    thArray = ["Id", "Usuario", "Email", "Nome", "Endereço", "Cidade", "País"];
    tdArray = JSON.parse(localStorage.getItem('user'), '[]');
    if (!tdArray) {
      tdArray = [[" ", " ", " ", " ", " ", " ", " "]];
    }

  }
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Todos usuários"
                category="Aqui estão todos os usuários do sistema"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {
                        tdArray.map((prop, key) => {
                          return (
                            <tr key={key}>
                              {prop.map((prop, key) => {
                                return <td key={key}>{prop}</td>;
                              })}
                            </tr>
                          );
                        })}
                    </tbody>
                  </Table>
                }
              />
            </Col>

          </Row>
        </Grid>
      </div>
    );
  }
}





export default TableList;
