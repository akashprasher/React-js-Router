import React from "react";
import { Link} from 'react-router-dom'; //Link,

const Contact = () => {
  return (
    <div className="container">
      <div className="py-4">
          <h1>Contact</h1>
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Accept Our Term and Conditions.
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <div className="mt-5 text-center"><p>Made with ❤️ by <a href="https://github.com/akashprasher">Akash Prasher</a></p></div>
        <div className="mt-3 text-center">
          <Link className="mr-3" to="/">/home</Link>
          <Link className="mr-3" to="/about">/about</Link>
          <Link to="/contact">/contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
