import React, { Component } from 'react';
import $ from 'jquery';
import { Routes, Route } from 'react-router-dom';
import {RequestConsumer}  from "../middleware/request";
const ErrorContext = React.createContext();

export default class ErrorProvider extends Component{
	constructor(props){
	    super(props);
	    this.state = {
	      isLoaded: false,
	      errors: [],
	    };
	}
    AuthError({state}){
	    if (!state.isLoaded)
	      return (<React.Fragment></React.Fragment>)
	    else
	    return (
	      <ul className="list-inline form-message">
	        {state.errors.map((a) => {
	          return <li className="alert alert-danger">{a} </li>
	        })}
	      </ul>
	    );
    }

	render(){
	  	return(
	  		<ErrorContext.Provider value={{
		        ...this.state,
		        AuthError: this.AuthError,
		        AuthHandler: this.AuthHandler,
	        }}>

	      {this.props.children}
	      </ErrorContext.Provider>
	  	)
	}
}

const ErrorConsumer = ErrorContext.Consumer;

export {ErrorProvider, ErrorConsumer };