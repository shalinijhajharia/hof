import React from "react";
import "../App.css";
class HigherOrder extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: "1", name: "Joe", user_type: "Developer", age: 31, years: 11 },
        { id: "2", name: "Hill", user_type: "Designer", age: 26, years: 4 },
        { id: "3", name: "John", user_type: "Teacher", age: 24, years: 2 },
        { id: "4", name: "Sam", user_type: "Entreprenuer", age: 58, years: 25 },
        { id: "5", name: "Jack", user_type: "Designer", age: 43, years: 18 },
      ],
    };
  }

// display all items
renderItems = () => {
    const data = this.state.userData;
    const mapRows = data.map((item) => (
        <React.Fragment key={item.id}>
            <span className="list-elements">
                {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
                <span>Id: {item.id}</span>
                <span>Name : {item.name}</span>
                <span>User Type: {item.user_type}</span><br/>
           </span>
        </React.Fragment>
    ));
    return mapRows;
};
  renderItemUserType = () => {
    const data = this.state.userData;
    let filterData = data
      .filter((users) => {
        return users.user_type === "Designer";
      })
      .map((user) => {
        return (
          <React.Fragment key={user.id}>
            <span className="list-elements">
              <span>Id: {user.id}</span>
              <span>Name: {user.name}</span>
              <span>User Type:{user.user_type}</span><br/>
            </span>
          </React.Fragment>
        );
      });
    return filterData;
  };

  // filter all names starting with the letter J

  renderItemsStartingWithJ = () => {
    const data = this.state.userData;
    let filterData = data
      .filter((users) => {
        return users.name.startsWith("J");
      })
      .map((user) => {
        return (
          <React.Fragment key={user.id}>
            <span className="list-elements">
              <span>Id: {user.id}</span>
              <span>Name: {user.name}</span>
              <span>User Type: {user.user_type}</span><br/>
            </span>
          </React.Fragment>
        );
      });
    return filterData;
  };

  // Filter the data based on the age.
  // The age should be greater than 28 and less than or equal to 50

  renderItemsWithAge = () => {
    const data = this.state.userData;
    let filterData = data
      .filter((users) => {
        return users.age > 28 && users.age <= 50;
      })
      .map((user) => {
        return (
          <React.Fragment key={user.id}>
            <span className="list-elements">
              <span>Id: {user.id}</span>
              <span>Name: {user.name}</span>
              <span>User Type: {user.user_type}</span><br/>
            </span>
          </React.Fragment>
        );
      });
    return filterData;
  };

  // find the total years of experience of the designers
  renderItemsTotalYears = () => {
    const data = this.state.userData;
    let filterData = data
      .filter((users) => {
        return users.user_type === "Designer";
      })
      .map((user) => {
        return user.years;
      })
      .reduce((s1, s2) => {
        let result = s1 + s2;
        return (
          <React.Fragment>
            <span className="list-elements">
              <span>Ans: {result}</span>
            </span>
          </React.Fragment>
        );
      });
    return filterData;
  };

  render() {
    return (
        // instead of a parent div tag we can also use React.Fragment
      <React.Fragment>
        <h1>Display all items</h1>
        <div className="display-box">
          <ul>{this.renderItems()} </ul>
        </div>

        <h1>Display data based on user type</h1>
        <div className="display-box">
          <ul>{this.renderItemUserType()}</ul>
        </div>

        <h1>Filter all data starting with J</h1>
        <div className="display-box">
          <ul>{this.renderItemsStartingWithJ()} </ul>
        </div>

        <h1>
          Filter data based on age, greater than 28 and less or equal to 50
        </h1>
        <div className="display-box">
          <ul>{this.renderItemsWithAge()} </ul>
        </div>

        <h1>Find the total years of the designers</h1>
        <div className="display-box">
          <ul>{this.renderItemsTotalYears()}</ul>
        </div>
      </React.Fragment>
    );
  }
}

export default HigherOrder;