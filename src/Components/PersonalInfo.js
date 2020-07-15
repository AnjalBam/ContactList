import React, { Component } from 'react';
import { Consumer } from './Context';

class PersonalInfo extends Component {
  constructor(props){
  super(props);

}

componentDidMount (){
   this.setState({slug: this.props.match.params.fullname})
}

render(){
  console.log(this.props);
return(
  <section>
    <Consumer>
      {
        value =>{
          const { OnClickHanlder } = value;
          const Data = OnClickHanlder(this.props.match.params.fullname)
          }
      }
    </Consumer>
  </section>
  )
}
}
export default PersonalInfo
