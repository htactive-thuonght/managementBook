import React, { Component } from "react";
import "./App.css";

import { withFirebase } from "../src/components/Firebase/context";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      name: ""
    };
  }
  componentDidMount() {
    this.props.firebase.getCategories().on("value", snapshot => {
      const categoriesObject = snapshot.val();
      if (categoriesObject) {
        const objectList = Object.keys(categoriesObject).map(key => ({
          ...categoriesObject[key],
          id: key
        }));
        this.setState({
          categories: objectList,
        });
      } else {
        this.setState({ categories: [] });
      }
    });
  }
  addCategory = () => {
    const { name, age } = this.state;
    this.props.firebase.addCategories().push({ name, age });
    this.setState({
      name: "",
      age: ""
    });
  };

  deleteCategory = (index) => {
     this.props.firebase.editCategories(index).remove()
  }
  editCategories = (index) => {
    this.props.firebase.editCategories(index).set({
      name: "name",
      age: 123
    })
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { categories, name, age } = this.state;
    return (
      <div>
        <h1>Admin Ahihi</h1>
        <ul>
          {categories.map((item, index) => {
            return (
              <li key={index}>
                {item.name}
                <button onClick={() => this.editCategories(item.id)}>Edit</button>
                <button onClick={() => this.deleteCategory(item.id)}>delete</button>
              </li>
            );
          })}
        </ul>
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <input
              type="text"
              name="name"
              className="form-control col-sm-6"
              defaultValue={name}
              onChange={this.handleChange}
              placeholder="Enter name"
            />
            <input
              type="text"
              name="age"
              className="form-control col-sm-6"
              defaultValue={age}
              onChange={this.handleChange}
              placeholder="Enter age"
            />
          </div>

          <button
            type="button"
            onClick={this.addCategory}
            className="btn btn-success"
          >
            ADD
          </button>
        </form>
      </div>
    );
  }
}
export default withFirebase(App);
