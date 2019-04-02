import React, { Component } from "react";
import { Grid } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Grid fluid>
          <nav className="pull-left">
            <ul> 

            </ul>
          </nav>
          <p className="copyright pull-right">
            &copy; {new Date().getFullYear()}{" "}
            <a href="http://www.4milk.com.br/">4Milk</a>, Seu rebanho na palma da mão.
          </p>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
