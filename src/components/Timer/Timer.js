/* eslint-disable arrow-body-style */
/* eslint-disable react/destructuring-assignment */

import React, { Component } from 'react';

export default class Timer extends Component{


    state = {
        hours: 0,
        minutes :0,
        seconds:0,
        intervalId: 0

    }

    handleClick = () => {
        if(this.state.intervalId){
          clearInterval(this.state.intervalId);
          this.setState({
            intervalId: 0,
          });
          return;
        }
        
        const newIntervalId = setInterval(() => {
            const {seconds, minutes} = this.state
                if(seconds < 60){
                    this.setState({
                        seconds: seconds + 1,
                    })
                }else {
                    this.setState({
                        minutes: minutes + 1,
                        seconds: 0,
                    })
                }
        }, 1000);
        
        this.setState({
            intervalId: newIntervalId
        });
    }

    
    render(){
        
        const {hours, minutes, seconds} = this.state
        return(
            <span className="description">
                <button className="icon icon-play" type="button" aria-label="icon-play " onClick={this.handleClick}/>
                <button className="icon icon-pause" type="button" aria-label="icon-pause" onClick={this.handleClick}/>

                {hours}:{minutes}:{seconds}
            </span>
        )
    }
}




