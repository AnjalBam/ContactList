import React, { Component } from "react";
import { Provider } from "./Context";
import "bootstrap/dist/css/bootstrap.min.css";

class ContactProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      PersonalIfno: {},
    };
    // this.OnClickHanlder = this.OnClickHanlder.bind(this);
  }

  componentDidMount() {
    fetch("https://api.randomuser.me/?nat=us,gb&results=50")
      .then(response => response.json())
      .then(parsedResponse =>
        parsedResponse.results.map(user => {
          // console.log(user);
          return {
            fullname: `${user.name.title}-${user.name.first}-${user.name.last}`,
            ...user,
          };
        })
      )
      .then(contact => {
        return this.setState({ contacts: contact });
      });
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export default ContactProvider;
