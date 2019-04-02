import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import avatar from "assets/img/faces/face-3.jpg";
import { debug } from "util";

class UserProfile extends Component {
  state = {

  }
  render() {
    const { companyName, username, email, fullname, lastname, address, addressNumber, complement,
      city, country, zipcode } = this.state;
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Cadastrar usuário"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-5", "col-md-3", "col-md-4"]}
                      proprieties={[
                        {
                          name: 'companyName',
                          label: "empresa",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Company",
                          defaultValue: "4Milk",
                          onChange: this.handleInputChange,
                          disabled: true,
                          value: companyName,
                          required: true
                        },
                        {
                          name: 'username',
                          label: "usuario",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Usuário",
                          defaultValue: "",
                          required: true,
                          value: username,
                          onChange: this.handleInputChange,
                        },
                        {
                          name: 'email',
                          label: "email",
                          type: "email",
                          bsClass: "form-control",
                          placeholder: "Email",
                          required: true,
                          value: email,
                          onChange: this.handleInputChange
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      proprieties={[
                        {
                          name: 'fullname',
                          label: "nome",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Nome",
                          defaultValue: "",
                          required: true,
                          value: fullname,
                          onChange: this.handleInputChange
                        },
                        {
                          name: 'lastname',
                          label: "sobrenome",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Sobrenome",
                          defaultValue: "",
                          required: true,
                          value: lastname,
                          onChange: this.handleInputChange
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-3", "col-md-3"]}
                      proprieties={[
                        {
                          name: 'address',
                          label: "endereco",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Endereço",
                          defaultValue: "",
                          required: true,
                          value: address,
                          onChange: this.handleInputChange
                        },
                        {
                          name: 'addressNumber',
                          label: "numero",
                          type: "number",
                          bsClass: "form-control",
                          placeholder: "Número do endereço",
                          defaultValue: "",
                          required: true,
                          value: addressNumber,
                          onChange: this.handleInputChange
                        },
                        {
                          name: 'complement',
                          label: "complemento",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Apartamento 101",
                          defaultValue: "",
                          required: true,
                          value: complement,
                          onChange: this.handleInputChange
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      proprieties={[
                        {
                          name: 'city',
                          label: "cidade",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Cidade",
                          defaultValue: "",
                          required: true,
                          value: city,
                          onChange: this.handleInputChange
                        },
                        {
                          name: 'country',
                          label: "pais",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "País",
                          defaultValue: "",
                          required: true,
                          value: country,
                          onChange: this.handleInputChange
                        },
                        {
                          name: 'zipcode',
                          label: "cep",
                          type: "number",
                          bsClass: "form-control",
                          placeholder: "CEP",
                          required: true,
                          value: zipcode,
                          onChange: this.handleInputChange
                        }
                      ]}
                    />

                    <Button bsStyle="info" onClick={this.handleCreateUser} pullRight fill type="submit">
                      Criar usuário
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
            <Col md={4}>
              <UserCard
                bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                avatar={avatar}
                name="4Milk"
                description={
                  <span>
                    "Seu rebanho
                    <br />
                    na palma da mão
                    <br />
                    primeiro app COMPLETO E TOTALMENTE GRATUITO"
                  </span>
                }
                socials={
                  <div>
                    <Button simple>
                      <i className="fa fa-facebook-square" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-google-plus-square" />
                    </Button>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>>
      </div>
    );
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleCreateUser = () => {
    const { username, email, fullname, lastname, address, addressNumber, complement,
      city, country, zipcode } = this.state

    if (username && email && fullname && lastname && address && addressNumber && complement &&
      city && country && zipcode) {

      //Criando um id auto increment
      const id = (Number(localStorage.getItem('countIdUsers')) || 0) + 1;
      localStorage.setItem('countIdUsers', id)
      const user = [
        id, username, email, fullname + ' ' + lastname, address, city, country
      ]
     
      this.createUser(user);
      this.setState({
        username: '', email: '', fullname: '', lastname: '', address: '', addressNumber: '',
        complement: '', city: '', country: '', zipcode: ''
      });
    } else {
      alert('Todos os campos devem ser preenchidos!');
    }
  }

  createUser = (user) => {

    const users = this.getTasks();
    users.push(user);
    localStorage.setItem('user', JSON.stringify(users))
    alert('Usuário cadastrado com sucesso!')

  }

  getTasks = () => {
    const users = localStorage.getItem('user');
    return JSON.parse(users || '[]');
  }

}


export default UserProfile;
