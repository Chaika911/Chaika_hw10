import React from 'react';
import { Link } from 'react-router-dom';

class ErrorPage extends React.Component {
    constructor(props){
        super(props);
    }
    state = {
        isError: false
    }
    static getDerivedStateFromError(){
        return {isError: true}
    }

  render(){
    if(this.state.isError){
        return (
            <div>
                <h1>Oops! Something went wrong.</h1>
                <p>Please try again later.</p>
            </div>
        )
    }
    return(
        this.props.children
    )
  }
};

export default ErrorPage;