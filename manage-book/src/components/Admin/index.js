import React,{Component} from 'react';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }
  // componentDidMount() {

  //   this.props.firebase.getCategories().on('value', snapshot => {
  //     const categoriesObject = snapshot.val();
  //     console.log(categoriesObject)
  //     this.setState({
  //       users: categoriesObject
  //     });
  //   });
  // }
  render() { 
    return ( 
      <div>
    <h1>Adminfgsdgsdga</h1>
  </div>
     );
  }
}
export default (Admin);