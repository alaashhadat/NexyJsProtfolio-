import Layout from "../components/Layout";
import React, { Component } from "react";

import fetch from "isomorphic-unfetch";
import Error from "./_errors";
class About extends Component {
  static async getInitialProps() {
    const res = await fetch(`http://api.github.com/users/alaashhadat`);
    const data = await res.json();
    const statusResponse = res.status > 200 ? res.status : false;
    return { user: data, statusResponse };

    // fetch("http://api.github.com/users/alaashhadat").then(res =>
    //   res
    //     .json()

    //     .then(data => console.log(data))
    //     .then(error => console.log(error))
    // );
    // // getInitialProps should return an object
    // return { user: "user" };
  }
  // componentDidMount() {
  //   fetch("http://api.github.com/users/alaashhadat").then(res =>
  //     res
  //       .json()
  //       .then(data =>
  //         this.setState({
  //           user: data
  //         })
  //       )
  //       .then(error => console.log(error))
  //   );
  // }
  render() {
    const { user, statusResponse } = this.props;
    if (statusResponse) {
      return <Error statusResponse={statusResponse} />;
    }
    return (
      <Layout>
        <h1>{JSON.stringify(this.props.user.name)}</h1>

        <p>A javascript programmer</p>
        <img src={user.avatar_url} alt="me" height="200px"></img>
      </Layout>
    );
  }
}

export default About;
