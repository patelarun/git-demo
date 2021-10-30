import React, { Component } from 'react';
import FormComponent from './FormComponent';
import ShowDetails from './ShowDetails';
import Layout from './Layout';

export default class UserDetail extends Component {
  state = {
    showDetails: false,
    data: {
      name: '',
      city: '',
    },
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    const data = { ...this.state.data, [name]: value };
    this.setState({ data });
  }

  onSubmitForm = (event) => {
    event.preventDefault();
    this.setState({ showDetails: true });
  }

  resetDetails = () => {
    this.setState({
      showDetails: false,
      data: { name: '', city: '' },
    });
  }

  render () {
    return this.state.showDetails ? (
      <Layout bgColor="#f2f2f2">
        <ShowDetails
          data={this.state.data}
          handleResetDetails={this.resetDetails}
        />
      </Layout>
      ) : (
      <Layout bgColor="#88fe8b">
        <FormComponent
          data={this.state.data}
          onSubmitForm={this.onSubmitForm}
          handleInputChange={this.handleInputChange}
        />
      </Layout>
    );
  }
}
