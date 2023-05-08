import "../styles/login.css";

function Login() {
  return (
    <>
      <div className="Login">
        <div className="login-Intro">
          <h2>Hello Again!</h2>
          <span>Welcome Back You’ve Been Missed!</span>
        </div>
        <p>To login enter Your email address and password</p>
        <form>
          <div>
            <label htmlFor="email">Email Address</label>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
                d="M12.81 4.36l-1.77 1.78a4 4 0 0 0-4.9 4.9l-2.76 2.75C2.06 12.79.96 11.49.2 10a11 11 0 0 1 12.6-5.64zm3.8 1.85c1.33 1 2.43 2.3 3.2 3.79a11 11 0 0 1-12.62 5.64l1.77-1.78a4 4 0 0 0 4.9-4.9l2.76-2.75zm-.25-3.99l1.42 1.42L3.64 17.78l-1.42-1.42L16.36 2.22z"
                fill="#f89300"
              ></path>
            </svg>
            <input id="email" type="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
                d="M12.81 4.36l-1.77 1.78a4 4 0 0 0-4.9 4.9l-2.76 2.75C2.06 12.79.96 11.49.2 10a11 11 0 0 1 12.6-5.64zm3.8 1.85c1.33 1 2.43 2.3 3.2 3.79a11 11 0 0 1-12.62 5.64l1.77-1.78a4 4 0 0 0 4.9-4.9l2.76-2.75zm-.25-3.99l1.42 1.42L3.64 17.78l-1.42-1.42L16.36 2.22z"
                fill="#f89300"
              ></path>
            </svg>
            <input id="password" type="password" />
          </div>
          <div className="checkbox">
            <input type="checkbox" id="scales" name="scales" />
            <label>Remember me</label>
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Login;
