import React from 'react';
// import {Link} from 'react-router-dom'
export default class AddContact extends React.Component{
    // class state (State in class component)
    state = {
        name:"",
        email:""
    }
    add = (e)=>{
        e.preventDefault();
        if(this.state.name==="" || this.state.email===""){
            alert("All fields are mandatory");
            return
        }
        console.log(this.state)
        this.props.addContactHandle(this.state);
        this.setState({name:"",email:""})
        // console.log(this.state);
        // console.log(this.props);
        // this will take to homepage on clicking add button 
        // this.props.history.push("/");
    }
    render(){
        return (
          <div className="ui main" style={{paddingTop:"125px",width:"50%"}}>
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={this.add}>
              <div className="field">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  // required
                  value={this.state.name}
                  onChange={(e) => {
                    this.setState({ name: e.target.value });
                  }}
                />
              </div>
              <div className="field">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  // required
                  value={this.state.email}
                  onChange={(e) => {
                    this.setState({ email: e.target.value });
                  }}
                />
              </div>
              {/* <Link to="/store"> */}
                <div className="ui buttons">
                    <button className="ui positive button">ADD</button>
                </div>
            {/* </Link> */}
            </form>
          </div>
        );
    }
}