import React, { Component } from "react";
import "./Main.css";


class Main extends Component {
    constructor (props){
    super(props)
    this.state = {
         hovered: false
      
        
        
      
    };
    this.onMouseEnter= this.onMouseEnter.bind(this);
    this.onMouseLeave= this.onMouseLeave.bind(this);
    }
        onMouseEnter(event) {
            // console.log("mouse enter");
            // console.log(event.target.id);
            let boxNum = (event.target.id)
            let n = parseInt(boxNum);

            if (n > 5){
                document.getElementById(boxNum).style.gridRow = "1/3" 
                document.getElementById(boxNum).style.gridColumn =(n -4) + "/" + (n-2) 
            }else {
                document.getElementById(boxNum).style.gridRow = "1/3" 
                document.getElementById(boxNum).style.gridColumn =(n) + "/" + (n+2)
            }
            
            // this.setState({rowSize: 1/3})
        }

        onMouseLeave(event) {
            let cName = event.target.className.split(' ')[1];
            let boxNum =event.target.id;
            console.log("mouse leave");
            console.log(cName);
           
           
            if (boxNum <= 5){
                document.getElementById(boxNum).style.gridRow ="1"
                document.getElementById(boxNum).style.gridColumn =boxNum
            } else {
                document.getElementById(boxNum).style.gridRow ="2"
                document.getElementById(boxNum).style.gridColumn =boxNum
            }
            
            
        }


    render() {
        return (
            <div className = "wrapper">
                <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}className ="box box1"  id = "1" >    
                {/* style = {{"gridRow":this.state.rowSize}} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}  */}
                    <h1> box1 </h1>
                </div>     
                <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className ="box box2" id = "2" >    
                    <h1> box2 </h1>
                </div>   
                <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className ="box box3" id = "3" >    
                    <h1> box3 </h1>
                </div>     
                <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className ="box box4" id = "4" >    
                    <h1> box4 </h1>
                </div>   
                <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className ="box box5" id = "5" >    
                    <h1> box5</h1>
                </div>     
                <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className ="box box6" id = "6" >    
                    <h1> box6 </h1>
                </div>   
                <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className ="box box7" id = "7" >    
                    <h1> box7 </h1>
                </div>     
                <div  onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className ="box box8" id = "8" >    
                {/* style = {{"gridRow":this.state.row2Size, "gridCol":this.state.largePos}} */}
                    <h1> box8 </h1>
                </div>   
                <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className ="box box9" id = "9" >    
                    <h1> box9 </h1>
                </div>     
                  
                
           </div>
        );
    }
    
}


export default Main;