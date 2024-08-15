// import React from "react";
// Or, use the destructure mode
import { Component } from "react";
import User from "./User";
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
        {/* functional based component*/}
        {/* <User name={"Sayan (functional component)"} /> */}
        {/* class based component*/}
        <UserClass name={"Sayan (class component)"} location={"India"} />
      </div>
    );
  }
}

export default About;

// WITHOUT USING CLASS COMPONENT
// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <p>This is React Web-Series Tutorial</p>
//       {/* functional based component*/}
//       {/* <User name={"Sayan (functional component)"} /> */}
//       {/* class based component*/}
//       <UserClass name={"Sayan (class component)"} location={"India"} />
//     </div>
//   );
// };

// export default About;
