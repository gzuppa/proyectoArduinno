import React, { Component } from 'react';
import {login} from "../../service";
import Robotcito from '../../images/bender.png';

class Login extends Component{

  constructor(){
    super();
    this.state =  {
        user: {
            email: "",
            password: "",
            confirmPassword: ""
        }
    }
}

handleChange = (e) => {
  const {user} = this.state;
  let field = e.target.name;
  user[field] = e.target.value;
  this.setState({user});
  console.log(this.state);
};

handleSubmit = (e) => {
  e.preventDefault();
  login(this.state.user, this.props.history)
};


  render(){
    let {email, password, confirmPassword} = this.state.user;
    return(

<div>

<div class="limiter">
		<div class="container-login100"><img src={Robotcito}/>
			<div class="wrap-login100 p-t-30 p-b-50">
				<span class="login100-form-title p-b-41">
					¡Bienvenido!
				</span>
				<form  onSubmit={this.handleSubmit} class="login100-form validate-form p-b-33 p-t-5">

					<div class="wrap-input100 validate-input" data-validate = "Enter username">
						<input class="input100" onChange={this.handleChange}
                            type="email"
                            name="email"
                            value={email} placeholder="Tu email" />
						<span class="focus-input100" data-placeholder="&#xe82a;"></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate="Enter password">
						<input class="input100" onChange={this.handleChange}
                            type="password"
                            name="password"
                            value={password} placeholder="Password"/>
						<span class="focus-input100" data-placeholder="&#xe80f;"></span>
					</div>

					<div class="container-login100-form-btn m-t-32">
						<button class="login100-form-btn" type="submit">
							Login
						</button>
					</div>

				</form>
			</div>
		</div>
	</div>
	

	<div id="dropDownSelect1"></div>
       
    </div>

    )
  }
}

export default Login;