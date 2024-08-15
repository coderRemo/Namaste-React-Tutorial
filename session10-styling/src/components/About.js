import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Mount");
  }

  render() {
    console.log("Parent Render");

    return (
      <div>
        <h1>About</h1>
        <p>This is React Web-Series Tutorial</p>
        <UserClass name={"Sayan (class component)"} location={"India"} />
      </div>
    );
  }
}

export default About;
