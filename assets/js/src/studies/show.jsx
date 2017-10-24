import { connect } from 'react-redux';
import React from "react";
import { Provider } from 'react-redux';
import {loadPost, loadCategories} from './actions.js';
import Navbar from './navbar.jsx';
import PDF from './pdf/pdf.jsx';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
}from 'react-router-dom';

class Show extends React.Component {
  componentWillMount() {
    const id = this.props.match.params.id;
    this.props.dispatch(loadPost(id));
    this.props.dispatch(loadCategories());
  }

  isStudy(valor) {
    return valor.type == 2
  }

  isBulletin(valor){
    return valor.type == 3
  }

  render() {
    const { post, loading } = this.props
    let files = ""
    let categories = []
    let type = post.type

    if(type == "study"){
      categories = this.props.categories.filter(this.isStudy)
    }else if(type == "bulletin"){
      categories = this.props.categories.filter(this.isBulletin)
    }

    if (loading) {
      return("cargando...")
    }else if(post !== false && post.file ){
      //files = <PDF url={"/uploads/files/" + post.file} />
      files = <a href={"/uploads/files/" + post.file} > Descargar Archivo </a>
    }

    return(
      <div className="row">
        <Navbar type={"/"+type} categories={categories}/>
        <div className="col-md-9">
          <div className="indicators">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            {files}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    post: state.posts.post,
    categories: state.posts.categories,
    loading: state.posts.loading
  }
}

export default connect(mapStateToProps)(Show);
