import React from 'react';
import { Link } from "react-router-dom";
import { observer, inject } from 'mobx-react'

  
const Authorize = props => (
  <div>
    <nav>
      <div className="menu"><Link to='/register'>Sign up</Link></div>
      <div className="menu"><Link to='/login'>Sing in</Link></div>
    </nav>
  </div>
);


export default inject('userStore')(observer(Authorize));
