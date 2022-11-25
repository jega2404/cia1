import React from "react";
import './form.css';
class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  

  }

  submituserRegistrationForm(e) {
    console.log(this.validateForm());
    
    e.preventDefault();
    if (this.validateForm()) {
        console.log(this.state);
         let fields = {};
         fields["username"] = "";
         fields["emailid"] = "";
         fields["password"] = "";
        this.setState({fields:fields});
        console.log(this.state);
        alert("Form submitted");
    }

  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please Fill the column.";
      document.getElementById("name").style="border: 2px solid red"
    }
    else
    {
        document.getElementById("name").style="border: 2px solid black"

    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        document.getElementById("name").style="border: 1px solid red";
        errors["username"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please Fill the email.";
      document.getElementById("email").style="border: 2px solid red"

    }
    else
    {
        document.getElementById("email").style="border: 2px solid black"

    }


    if (typeof fields["emailid"] !== "undefined") {
      //regular expression for email validation
      var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      if (!fields["emailid"].match(pattern))
      {
        formIsValid = false;
        errors["emailid"] = "*Invalid Email.";
      }
    }
    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please Fill the password.";
      document.getElementById("password").style="border: 2px solid red"
    }
    else
    {
        document.getElementById("password").style="border: 2px solid black"

    }


    if (typeof fields["password"] !== "undefined") {
        var pattern1=/^[A-Z]$/;
        var pattern2=/^[!@#$&*]$/;
        var pattern3=/^[0-9]$/;
        var pattern4=/^[a-z]$/;
        var count=0;
        if(!fields["password"].match(pattern1))
        {
            count++;
        }
        if(!fields["password"].match(pattern2))
        {
            count++;
        }
        if(!fields["password"].match(pattern3))
        {
            count++;
        }
        if(!fields["password"].match(pattern4))
        {
            count++;
        }
        if (count==4) 
        {
            errors["password"] = "*Password is very Strong";
            document.getElementById("ep").style.color="green";
        }
        if (count==3) 
        {
            formIsValid = false;
            errors["password"] = "*Password is Strong";
            document.getElementById("ep").style.color="lightgreen";
        }
        if (count==2) 
        {
            formIsValid = false;
            errors["password"] = "*Password is Good";
            document.getElementById("ep").style.color="orange";
        }
        if (count==1) 
        {
            formIsValid = false;
            errors["password"] = "*Password is weak";
            document.getElementById("ep").style.color="red";
        }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;


  }



render() {
  return (
  <div id="main-registration-container">
   <div id="register">
      <h1>Dynamic Form</h1>
      <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
      <label>Enter your Name:</label><br/>
      <input type="text" name="username" id="name" placeholder="Your Username" value={this.state.fields.username} onChange={this.handleChange} />
      <div className="errorMsg">{this.state.errors.username}</div><br/>
      <label>Enter your Email:</label><br/>
      <input type="text" name="emailid" id="email" placeholder="Your Email" value={this.state.fields.emailid} onChange={this.handleChange}  />
      <div className="errorMsg">{this.state.errors.emailid}</div><br/>
      <label>Enter your Password:</label><br/>
      <input type="password" name="password" id="password" placeholder="Your Password" value={this.state.fields.password} onChange={this.handleChange} />
      <div className="errorMsg" id="ep">{this.state.errors.password}</div><br/><br/><br/>
      <input type="submit" id="submit" className="button"  value="Register"/>
      </form>
  </div>
</div>

    );
}


}

export default Form;