import React, { Component } from 'react';
import SearchResults from './Searchbar/SearchResults.js'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom';
import './components.css'

class SearchBar extends Component {

    constructor(props) {
      super(props);
      this.state = {
        query: '',
        results: []
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
      document.addEventListener("keydown", this.resetQuery, false);
      document.addEventListener("click", this.resetQuery, false);
    }

    componentWillUnmount(){
      document.removeEventListener("keydown", this.resetQuery, false);
      document.removeEventListener("click", this.resetQuery, false);
    }
    
    resetQuery = (event) => {
      if(!this.search.contains(event.target)){
        this.setState({
          query: '',
          results: []
        })
      }else if(event.keyCode === 27){
        this.search.value =''
        this.setState({
          query: '',
          results: []
        })
      }
    }

    handleChange(event) {
      this.setState({
        query: event.target.value
      }, () => {
        if(this.state.query && this.state.query.length >= 1){
          this.getResults()
        } else if (!this.state.query){
          this.setState({
            results: []               
          })
        }
      })
    }
    
    handleSubmit(event) {
      event.preventDefault();
    }

    getResults() {
      fetch("http://localhost:3000/api/v1/search",{
        method: "POST",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "uid": this.props.user.uid,
            "client":  this.props.user.client,
            "access-token":  this.props.user['access-token'],
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            char: this.state.query
        })
      })
      .then(response => response.json())
      .then(response => { 
        console.log("response " + response)
        this.setState({
          results: response               
        })
      })
    }  

    renderResults(){
      if(this.state.results.length >= 1){
        return(
            <div className="search_results">
                <SearchResults  results={this.state.results} />
            </div>
        )
      }
    }
    

    render() {
    return (
      <div className="search_bar">
        <form onSubmit={this.handleSubmit}>
            <label>
                <input className='inputField' type="text" ref={input => this.search = input} onChange={this.handleChange} placeholder={'Search for Recipes'} />
            </label>
            {/* <input className='search_button button' type="submit" value="Search" /> */}
        </form>
        {this.renderResults()}
      </div>
    //   </React.Fragment>
    );
  }
}

// export default withRouter(SearchBar);

const mapStateToProps = (state, ownProps) => {
    return {
      user: state.auth.user
    }
  }

// const mapDispatchToProps = dispatch => {
//     return {
//         verify_credentials: (user) => dispatch(verify_credentials(user)),
//     }
// }

export default withRouter(connect(mapStateToProps, null)(SearchBar));