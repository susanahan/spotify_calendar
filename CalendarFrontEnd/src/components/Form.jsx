import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

class Form extends Component {
    constructor(props) {
      super(props);
      this.state = {
        startTime: "",
        endTime: "",
        descriptionInput: "",
      };
    }

    handleStartTimeChange = e => {
        this.setState({
            startTime: e.target.value
        });
      };
    
    handleEndTimeChange = e => {
        this.setState({
            endTime: e.target.value
        });
      };
    
    handleDescriptionChange = e => {
        this.setState({
            descriptionInput: e.target.value
        });
    };

    submitForm = e => {
        e.preventDefault();
        const {startTime, endTime, descriptionInput} = this.state
       
        axios
            .post("/events/create", {
                startTime: startTime,
                endTime: endTime,
                descriptionInput: descriptionInput
            })
            .then(res => {
                console.log("response data in the login:", res.data)
            })
            .catch(err => {
                console.log(err);
            });
  };

    // componentDidMount=()=>{
    //     axios.
    // }

    render() {
        const {startTime, endTime, descriptionInput} = this.state
      return (
        <div>
    <form onSubmit={this.submitForm}>
          <label>
         
            <input
              type="text"
              name="event"
              placeholder='Add description'
              onChange={this.descriptionInput}
            />
          </label>


          <label>
            Start Time: <br />
            <input type="time"  name="start"
                    onChange={this.handleStartTimeChange}
                    value={startTime} />
      
          </label>
            <br />
          <label>
            End Time: <br />
            <input type="time"  name="end" 
                    onChange={this.handleEndTimeChange}
                    value={endTime} />
      
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
        
         <Button  onClick={this.props.hide}>Close</Button>
        
      </div>

      );
    }
  }
  
  
export default Form;
  