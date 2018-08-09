import React, { Component } from "react";
import "./Main.css";
import API from "../../utils/API";
import Grid from "../../components/Grid";
import Image from "../../components/Image";

class Main extends Component {
    constructor (props){
    super(props)
    this.state = {
         hovered: "Jaime",
         chars: []
      
    };
    this.onMouseEnter= this.onMouseEnter.bind(this);
    // this.onMouseLeave= this.onMouseLeave.bind(this);
    }

    componentDidMount() {
        API.findChars()
        .then(res => {
            console.log(res);
            this.setState({
                chars:res.data
            })
            let element = document.getElementById(this.state.hovered);
            element.classList.add("active",this.state.hovered);
        })
    }


    
    onMouseEnter(event) {
        // console.log("mouse enter");
        // console.log(event.target.id);
        let charName = (event.target.id)
        let oldChar = this.state.hovered;
        console.log(oldChar);

        let lastChar =document.getElementsByClassName(oldChar)
        console.log(lastChar);
        for (let i = 0; i <lastChar.length; i++) {
            lastChar[i].classList.remove(oldChar);
        }
       
        // let n = parseInt(charName);
        this.setState({hovered:charName},() =>{
            let current = document.getElementsByClassName("active");

            for (let i = 0; i <current.length; i++) {
                current[i].classList.remove("active");
            }
    
            let newElement = document.getElementById(this.state.hovered);
    
            newElement.classList.add("active",charName);
        })
       

        // if (n <= 5){
        //     document.getElementById(charName).style.gridRow = "1/3" 
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
            <Grid>
              {this.state.chars.map(char =>{   
                return <Image
                    charName = {char.charName}
                    image = {char.image}
                    onMouseEnter = {this.onMouseEnter}
                    key = {char.id}/>
              })}
            </Grid>
        );
    }
    
}


export default Main;




// {/* <div className = "wrapper">
//                 <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}className ="box box1"  id = "1" >    
//                 {/* style = {{"gridRow":this.state.rowSize}} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}  */}
//                      box1 
//                 </div>     
//                 <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className ="box box2" id = "2" >    
//                      box2 
//                 </div>   
//                 <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className ="box box3" id = "3" >    
//                      box3 
//                 </div>     
//                 <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className ="box box4" id = "4" >    
//                      box4 
//                 </div>   
//                 <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className ="box box5" id = "5" >    
//                      box5
//                 </div>     
//                 <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className ="box box6" id = "6" >    
//                      box6 
//                 </div>   
//                 <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className ="box box7" id = "7" >    
//                      box7 
//                 </div>     
//                 <div  onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className ="box box8" id = "8" >    
//                 {/* style = {{"gridRow":this.state.row2Size, "gridCol":this.state.largePos}} */}
//                      box8 
//                 </div>   
//                 <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className ="box box9" id = "9" >    
//                      box9 
//                 </div>     
                  
                
//            </div> */}