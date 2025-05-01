export default function Login() {
  return (
    <>
      <div className="container py-4 py-lg-5 my-4">
        <div className="row">
          <div className="col-md-6">
            <div className="card border-0 box-shadow">
              <div className="card-body">
                <h2 className="h4 mb-1">Sign in</h2>
                <div className="py-3">
                  <h3 className="d-inline-block align-middle font-size-base font-weight-semibold mb-2 mr-2">
                    With social account:
                  </h3>
                  <div className="d-inline-block align-middle">
                    <a
                      className="social-btn sb-google mr-2 mb-2"
                      href="#"
                      data-toggle="tooltip"
                      title="Sign in with Google"
                    >
                      <i className="czi-google"></i>
                    </a>
                    <a
                      className="social-btn sb-facebook mr-2 mb-2"
                      href="#"
                      data-toggle="tooltip"
                      title="Sign in with Facebook"
                    >
                      <i className="czi-facebook"></i>
                    </a>
                    <a
                      className="social-btn sb-twitter mr-2 mb-2"
                      href="#"
                      data-toggle="tooltip"
                      title="Sign in with Twitter"
                    >
                      <i className="czi-twitter"></i>
                    </a>
                  </div>
                </div>
                <hr />
                <h3 className="font-size-base pt-4 pb-2">
                  Or using form below
                </h3>
                <form className="needs-validation" noValidate>
                  <div className="input-group-overlay form-group">
                    <div className="input-group-prepend-overlay">
                      <span className="input-group-text">
                        <i className="czi-mail"></i>
                      </span>
                    </div>
                    <input
                      className="form-control prepended-form-control"
                      type="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="input-group-overlay form-group">
                    <div className="input-group-prepend-overlay">
                      <span className="input-group-text">
                        <i className="czi-locked"></i>
                      </span>
                    </div>
                    <div className="password-toggle">
                      <input
                        className="form-control prepended-form-control"
                        type="password"
                        placeholder="Password"
                        required
                      />
                      <label className="password-toggle-btn">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                        />
                        <i className="czi-eye password-toggle-indicator"></i>
                        <span className="sr-only">Show password</span>
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap justify-content-between">
                    <div className="custom-control custom-checkbox">
                      <input
                        className="custom-control-input"
                        type="checkbox"
                        checked
                        id="remember_me"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="remember_me"
                      >
                        Remember me
                      </label>
                    </div>
                    <a
                      className="nav-link-inline font-size-sm"
                      href="account-password-recovery.html"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <hr className="mt-4" />
                  <div className="text-right pt-4">
                    <button className="btn btn-primary" type="submit">
                      <i className="czi-sign-in mr-2 ml-n21"></i>Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6 pt-4 mt-3 mt-md-0">
            <h2 className="h4 mb-3">No account? Sign up</h2>
            <p className="font-size-sm text-muted mb-4">
              Registration takes less than a minute but gives you full control
              over your orders.
            </p>
            <form className="needs-validation" noValidate>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="reg-fn">First Name</label>
                    <input
                      className="form-control"
                      type="text"
                      required
                      id="reg-fn"
                    />
                    <div className="invalid-feedback">
                      Please enter your first name!
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="reg-ln">Last Name</label>
                    <input
                      className="form-control"
                      type="text"
                      required
                      id="reg-ln"
                    />
                    <div className="invalid-feedback">
                      Please enter your last name!
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="reg-email">E-mail Address</label>
                    <input
                      className="form-control"
                      type="email"
                      required
                      id="reg-email"
                    />
                    <div className="invalid-feedback">
                      Please enter valid email address!
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="reg-phone">Phone Number</label>
                    <input
                      className="form-control"
                      type="text"
                      required
                      id="reg-phone"
                    />
                    <div className="invalid-feedback">
                      Please enter your phone number!
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="reg-password">Password</label>
                    <input
                      className="form-control"
                      type="password"
                      required
                      id="reg-password"
                    />
                    <div className="invalid-feedback">
                      Please enter password!
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="reg-password-confirm">
                      Confirm Password
                    </label>
                    <input
                      className="form-control"
                      type="password"
                      required
                      id="reg-password-confirm"
                    />
                    <div className="invalid-feedback">
                      Passwords do not match!
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <button className="btn btn-primary" type="submit">
                  <i className="czi-user mr-2 ml-n1"></i>Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
