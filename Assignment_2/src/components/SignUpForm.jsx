import React from 'react';

const SignUpForm = () => {
  return (
    <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto d-table h-100">
      <div className="d-table-cell align-middle">
        <div className="text-center mt-4">
          <h1 className="h2">Get started</h1>
          <p className="lead">
            Start creating the best possible user experience for your customers.
          </p>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="m-sm-3">
              <form>
                <div className="mb-3">
                  <label className="form-label">Full name</label>
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    className="form-control form-control-lg"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    name="password"
                    placeholder="Enter password"
                  />
                </div>
                <div className="d-grid gap-2 mt-3">
                  <button type="submit" className="btn btn-lg btn-primary">
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="text-center mb-3">
          Already have an account? <a href="/SignIn">Log In</a>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
