import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const LastPage = () => {
  return (
    <div className="container- hori">
    <div className="outside">
  <div className="content1">
    <h2>Thanks for buying our product!!!😊</h2><br></br>
    <Link to={`/`} className="btn btn-success but8">
        To order More
    </Link>
  </div>
  </div>
  </div>
  )
}

export default LastPage