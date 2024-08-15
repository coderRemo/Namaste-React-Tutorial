import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // calling State varaible (useState)
    // **NOTE:- this.state - a big object which contains all state variables
    // this.state = {
    //   count: 0,
    //   //   count2: 2, // creating multiple state variables
    // };
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

  // gets called when moved to another page(eg.- contact, home, etc.) in the webpage
  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  render() {
    // const { name, location } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;
    // let { count } = this.state; // destructuring state variables

    console.log("Child Render");

    return (
      <div className="user-card">
        {/* <h1>Count : {count}</h1>
        <h1>Count2 : {count2}</h1>
        <button
          onClick={() => {
            // **NOTE:- NEVER UPDATE STATE VARIABLES DIRECTLY LIKE THIS
            // return count++;

            // to update state variable
            // **NOTE:- if we create multiple state variables & only a specific state variable is updated inside setState() then that state variable will only be updated and remaining state variables will remain untouched
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        */}
        <img src={avatar_url} />
        <h2>Name: {name}</h2> {/* destructured element */}
        <h3>Location: {location}</h3> {/* destructured element */}
        <h4>Contact: @c-07</h4>
      </div>
    );
  }
}

export default UserClass;

/**
 * ----- LIFECYCLE -----
 *
 * ---- MOUNTING ----
 * - Constructor(dummy)
 * - Render (dummy)
 *     - <HTML (dummy)>
 * - ComponentDidMount
 *     - <API Call>
 *     - <this.setState()> ==> state variable is updated
 *
 * ---- UPDATING ----
 * - Render (API data) ==> new data that is getting fetched from API
 *     - <HTML (loaded with new API data)>
 *
 *                                                                                                     ---- UNMOUNTING ----
 * - ComponentDidUpdate                  <=====>                    ComponentWillMount (replaces 'ComponentDidUpdate' when changing pages(eg.- contact, home, etc.))
 */
