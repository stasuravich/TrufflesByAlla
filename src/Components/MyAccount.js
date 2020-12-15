import {useEffect} from "react";
import '../CSS/MyAccount.css';

const MyAccount =props=>{

  useEffect(() =>{
    document.getElementById("myAccount").style.color="green";
  });

  return (
    <div className="parent">
      <div className="MyAccount">
        <h1>My account</h1>
        <h2>Login</h2>
        <form className="form">
          <label className="label">Username or email address<span className="asteric">*</span></label>
          <input className="input" type="text" defaultValue =''/>
          <label className="label">Password<span className="asteric">*</span></label>
          <input className="input" type="password" defaultValue =''/>
          <input type="checkbox"/>
          <span className="remember">Remember me</span>
          <button className="login" type = "submit" id="submit-button">Log in</button>
          <a className="lostPassword" href="/my-account/lost-password">Lost your password?</a>
        </form>
      </div>
    </div>
  );
};

export default MyAccount;
