import React from "react";
import { Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <p className="lead">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div>
        <p className="font-weight-bold">Time Stamp: 35:25</p>
        <p className="font-weight-bold">Date Stamp: 08-12-2020</p>
      </div>
      <div className="mt-5 text-center"><p>Made with ❤️ by <a href="https://github.com/akashprasher">Akash Prasher</a></p></div>
      <div className="mt-4 text-center">
        <Link className="mr-3" to="/">/home</Link>
        <Link className="mr-3" to="/about">/about</Link>
        <Link to="/contact">/contact</Link>
      </div>
    </div>
  );
};

export default Home;
