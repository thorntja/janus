import React from 'react';

import { Link } from 'react-router-dom';

const Dashboard = () => (
  <div>
  <Link to='/search?r=users'>
    Users (r)
  </Link>
  <br />
  <Link to='/search?q=admin'>
    Users (q)
  </Link>
  <br />
  <Link to='/search?r=users&q=admin'>
    Users (r&q)
  </Link>
  <br />
  <Link to='/search?r=properties'>
    Properties (r)
  </Link>
  </div>
)

export default Dashboard;
