import React, { Component } from "react";
import { Consumer } from "./Context";

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { slug: "", contact: {} };
  }
  componentDidMount() {
    this.setState({ slug: this.props.match.params.fullname });
  }

  render() {
    const fullNameSlug = this.props.match.params.fullname;

    // console.log("fullname", fullNameSlug);
    return (
      <section>
        <Consumer>
          {value => {
            const { contacts } = value;
            const matchContact = contacts.filter(contact => {
              return contact.fullname === fullNameSlug;
            });
            console.log(matchContact);
          }}
        </Consumer>
      </section>
    );
  }
}
export default PersonalInfo;
