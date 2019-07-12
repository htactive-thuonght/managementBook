import React,{Component} from 'react';
import { withFirebase } from '../Firebase';
class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      categories: [],
    };
  }
  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.categories().on('value', snapshot => {
      const categoriesObject = snapshot.val();

      const usersCategories = Object.keys(categoriesObject).map(key => ({
        ...categoriesObject[key],
        uid: key,
      }));

      this.setState({
        users: usersCategories,
        loading: false,
      });
    });
  }
  render() { 
    return ( 
      <div>
    <h1>Admin</h1>
  </div>
     );
  }
}
 

export default withFirebase(Admin);