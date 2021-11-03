import React from 'react';
import { Link, Route } from 'react-router-dom';

const NestedRoute = (props) => console.log(props) || <p>{props.match.params.contactId}</p>;

export default function NestedRouting () {
  return (
    <div>
    <div>
      <h1>Welcome to Contact Page</h1>
      <strong>Select contact Id</strong>
      <ul>
        <li>
          <Link to="/nested-router/1">Contacts 1 </Link>
        </li>
        <li>
          <Link to="/nested-router/2">Contacts 2 </Link>
        </li>
        <li>
          <Link to="/nested-router/3">Contacts 3 </Link>
        </li>
        <li>
          <Link to="/nested-router/4">Contacts 4 </Link>
        </li>
      </ul>
      <Route path="/nested-router/:contactId" component={NestedRoute} />
    </div>
    </div>
  );
}
