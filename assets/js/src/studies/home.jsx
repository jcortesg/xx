import { connect } from 'react-redux';
import React from "react";
import { Provider } from 'react-redux';
import store from './state.js';
import {loadPosts } from './actions.js';

import {
  BrowserRouter as Router,
  Route,
  Link
}from 'react-router-dom';

class HomeIndex extends React.Component {
  componentWillMount() {
    this.props.dispatch(loadPosts({is_home: true}));
  }

  render() {
    let mainContent = null;
    let { posts, loading } = this.props;
    let type = "bulletins"

    if (loading) {
      mainContent = ("Loading");

      // Show an error if there is one
    } else if (this.props.error !== false) {
      mainContent = ('Error');

      // If we're not loading, don't have an error and there are repos, show the repos
    } else if (this.props.repos !== false) {
      mainContent = posts.map((item, index) => {
        let obj = ""
        if(index < 4){
          obj = (
            <div key={index} className="col-md-3 blog--item">
              <h4>{item.title}</h4>
              <img className="img-responsive" src={"/uploads/posts/"+ item.id +"/original.png"} />
            </div>

          )
        }
        return(
          obj
        )

      })
    }

    return(
      <section className="studies">
        <div className="container">
          <header>
            <h3 className="title">ESTUDIOS DEL SECTOR TI</h3>
            <p>
              Los estudios de sector TI analizan el desarrollo de la
              industria TI del país, donde se encuentra información
              desglosada del comportamiento de diferentes características del sector
            </p>
          </header>
          <div className="row blog">
            { mainContent }
          </div>
        </div>
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.posts,
    loading: state.posts.loading,
    error: false
  }
}

export default connect(mapStateToProps)(HomeIndex);
