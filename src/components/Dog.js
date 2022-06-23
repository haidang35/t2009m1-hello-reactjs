import React, { Component } from "react";

class Dog extends Component {
  constructor() {
    super();
    this.state = {
      name: "Quyt",
      color: 'Mau do',
      kind: 'Pull',
      friends: [
        'Cam', 'Buoi', 'Chanh', 'Quat', 
      ],
      person: {
        name: 'Nguyen Van A',
        age: 20,
      }
    };
  }
  render() {
    return (
      <>
        <h1>Hello Dog </h1>
        <ul>
            <li>Name: {this.state.name}</li>
            <li>Color: {this.state.color}</li>
            <li>Kind: {this.state.kind}</li>
            <li>Friends: 
                <ul>
                    {
                        this.state.friends.map((friend, index) => {
                            return(
                                <li>{friend} {index}</li>
                            )
                        })
                    }
                </ul>
            </li>
            <li>{this.state.person.age}</li>
        </ul>
      </>
    );
  }
}
export default Dog;
