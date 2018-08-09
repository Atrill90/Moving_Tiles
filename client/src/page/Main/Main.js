import React, { Component } from "react";
import "./Main.css";
import API from "../../utils/API";


class Main extends Component {
    constructor (props){
    super(props)
    this.state = {
         hovered: "2",
         chars: []
      
    };
    this.onMouseEnter= this.onMouseEnter.bind(this);
    // this.onMouseLeave= this.onMouseLeave.bind(this);
    }

    componentDidMount() {
        let element = document.getElementById(this.state.hovered);
        element.classList.add("active");

        API.findChars()
        .then(res => {
            console.log(res);
            this.setState({
                chars:res.data
            })
        })
    }


    
    onMouseEnter(event) {
        // console.log("mouse enter");
        // console.log(event.target.id);
        let boxNum = (event.target.id)
        // let n = parseInt(boxNum);
        let current = document.getElementsByClassName("active");

        for (let i = 0; i <current.length; i++) {
            current[i].classList.remove("active");
        }

        let newElement = document.getElementById(boxNum);

        newElement.classList.add("active");

        // if (n <= 5){
        //     document.getElementById(boxNum).style.gridRow = "1/3" 
        //     document.getElementById(boxNum).style.gridColumn =(n) + "/" + (n+2)
            
            // document.getElementById(boxNum).style.gridRow = "1/3" 
            // document.getElementById(boxNum).style.gridColumn =(n -4) + "/" + (n-2) 
        // }else {
        //     document.getElementById(boxNum).style.gridRow = "1/3" 
        //     document.getElementById(boxNum).style.gridColumn =(n) + "/" + (n+2)
        // }
        
        // this.setState({rowSize: 1/3})
    }

        // onMouseLeave(event) {
        //     let cName = event.target.className.split(' ')[1];
        //     let boxNum =event.target.id;
        //     console.log("mouse leave");
        //     console.log(cName);
           
           
        //     if (boxNum <= 5){
        //         document.getElementById(boxNum).style.gridRow ="1"
        //         document.getElementById(boxNum).style.gridColumn =boxNum
        //     } else {
        //         document.getElementById(boxNum).style.gridRow ="2"
        //         document.getElementById(boxNum).style.gridColumn =boxNum
        //     }
            
            
        // }


    render() {
        return (
            <div className = "wrapper">
                <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}className ="box box1"  id = "1" >    
                {/* style = {{"gridRow":this.state.rowSize}} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}  */}
                     box1 
                </div>     
                <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className ="box box2" id = "2" >    
                     box2 
                </div>   
                <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className ="box box3" id = "3" >    
                     box3 
                </div>     
                <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className ="box box4" id = "4" >    
                     box4 
                </div>   
                <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className ="box box5" id = "5" >    
                     box5
                </div>     
                <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className ="box box6" id = "6" >    
                     box6 
                </div>   
                <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className ="box box7" id = "7" >    
                     box7 
                </div>     
                <div  onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className ="box box8" id = "8" >    
                {/* style = {{"gridRow":this.state.row2Size, "gridCol":this.state.largePos}} */}
                     box8 
                </div>   
                <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className ="box box9" id = "9" >    
                     box9 
                </div>     
                  
                
           </div>
        );
    }
    
}


export default Main;