//Higher Order Component (HOC) - a component that renders another component
//PURPOSES: Re-use Code, Render Hijacking, Prop manipulation, Abstract State

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

//Higher Order Component Example
const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info.  Please don't share </p>}
      <WrappedComponent {...props} />
    </div>
  );
};

//Another Example
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
          <p>Please log in to view the info</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="I have a skin tag!" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="I have a skin tag!" />, document.getElementById('app'));