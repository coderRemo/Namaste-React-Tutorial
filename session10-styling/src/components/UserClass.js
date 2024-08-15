import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
      },
    };

    console.log("Child Constructor");
  }

  async componentDidMount() {
    console.log("Child Mount");

    // API call
    const data = await fetch("https://api.github.com/users/coderRemo");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    console.log("Child Render");

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2> {/* destructured element */}
        <h3>Location: {location}</h3> {/* destructured element */}
        <h4>Contact: @c-07</h4>
      </div>
    );
  }
}

export default UserClass;
