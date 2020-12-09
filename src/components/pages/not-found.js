import React from "react";
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
        <h1 className="container display-1 font-weight-bold tp-m">Page Not Found - 404</h1>
        <p className="mb-5 mt-5">Go Back to <Link className="mr-3" to="/">/home</Link></p>
    </div>
  );
};

export default NotFound;