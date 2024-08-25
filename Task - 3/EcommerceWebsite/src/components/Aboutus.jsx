import {Component} from 'react';
import ProfileClass from './ProfileClass';

class Aboutus extends Component{
  constructor(props) {
    super(props);
    console.log('Parent - constructor');
  }

componentDidMount() {
  console.log('Parent - componentDidMount');
}

  render()  {
    console.log('Parent - render');
    return (
      <div>
        <h1>About us</h1>
        <ProfileClass name='First' />
      </div>
    )
  }
}

export default Aboutus;

/*
  Render Phase - React wraps up all render part
      * Parent - constructor
      * Parent - render
      *    First Child - constructor
      *    First Child - render
      *    Second Child - constructor
      *    Second Child - render

  Commit Phase - DOM is updated for children
      *    First Child - componentDidMount
      *    Second Child - componentDidMount
      * Parent - componentDidMount
*/ 

//HW - we can made componentDidMount async but we cannot make useEffect async. Why?

