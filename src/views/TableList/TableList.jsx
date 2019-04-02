import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Button from "components/CustomButton/CustomButton.jsx";

import Card from "components/Card/Card.jsx";
let thArray = ["Id", "Usuario", "Email", "Nome", "Endereço", "Cidade", "País"],
  tdArray = JSON.parse(localStorage.getItem('user'), '[]');

class TableList extends Component {
  state = {

  }
  componentDidMount() {
    this.setState({
      thArray: ["Id", "Usuario", "Email", "Nome", "Endereço", "Cidade", "País"],
      tdArray: JSON.parse(localStorage.getItem('user'), '[]')
    })

    if (!this.state.tdArray) {
      this.setState({
        tdArray: [[" ", " ", " ", " ", " ", " ", " "]]
      })
    }

  }
  componentWillMount() {
    this.setState({
      thArray: ["Id", "Usuario", "Email", "Nome", "Endereço", "Cidade", "País"],
      tdArray: JSON.parse(localStorage.getItem('user'), '[]')
    })
    if (!this.state.tdArray) {
      this.setState({
        tdArray: [[" ", " ", " ", " ", " ", " ", " "]]
      })
    }

  }

  render() {
    const { tdArray, thArray } = this.state;
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
                              <Button bsStyle="danger" onClick={this.handleDeleteUser(key)} pullRight fill type="submit">
                                Excluir
                    </Button>
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

  handleDeleteUser = (key) => () => {

    const users = tdArray = JSON.parse(localStorage.getItem('user'), '[]');
    users.splice(key, 1);
    localStorage.setItem('user', JSON.stringify(users))
    alert('Usuário excluído com sucesso!')
    this.setState({
      tdArray: JSON.parse(localStorage.getItem('user'), '[]')
    })
  }

}


export default TableList;
