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
         hovered2:"Ned",
         chars: [],
         chars2: []
      
    };
    this.onMouseEnter= this.onMouseEnter.bind(this);
    this.onMouseEnter2= this.onMouseEnter2.bind(this);
    
    }

    componentDidMount() {
        API.findChars()
        .then(res => {
            let char1Arr = [];
            let char2Arr = [];
            for (let i = 0; i < res.data.length; i++) {
                if(i<9){
                    char1Arr.push(res.data[i])
                  
                }else {
                    char2Arr.push(res.data[i])
                }
              
            }
            this.setState({
                chars:char1Arr,
                chars2:char2Arr
            })
            
            let element = document.getElementById(this.state.hovered);
            element.classList.add("active",this.state.hovered);

            let element2 = document.getElementById(this.state.hovered2);
            element2.classList.add("active2",this.state.hovered2);
        })
    }


    
    onMouseEnter(event) {
        let charName = (event.target.id)
        
        this.classRemover(this.state.hovered,"active")

        this.setState({hovered:charName},() =>{
            let newElement = document.getElementById(this.state.hovered);
    
            newElement.classList.add("active",charName,"animated","fadeInRight");
        })
    }

    onMouseEnter2(event) {
        let charName = (event.target.id)
        

        this.classRemover(this.state.hovered2,"active2")
        
        this.setState({hovered2:charName},() =>{
            let newElement = document.getElementById(this.state.hovered2);
    
            newElement.classList.add("active2",charName,"animated","fadeInRight");
        })
    }


    classRemover (hovered,active) {
        //current large char
        let currentActive = document.getElementsByClassName(active);
    
        //removes color, larger size, and animation
        for (let i = 0; i <currentActive.length; i++) {
            currentActive[i].classList.remove(active, "animated","fadeInRight",hovered);
        }
    }
    


    render() {
        return (
        <div>
            <Grid>
                {this.state.chars.map(char =>{   
                    return <Image
                        charName = {char.charName}
                        image = {char.image}
                        onMouseEnter = {this.onMouseEnter}
                        key = {char.id}/>
                })}
            </Grid>
            <Grid>
                {this.state.chars2.map(char =>{
                    return <Image
                    charName = {char.charName}
                    image = {char.image}
                    onMouseEnter = {this.onMouseEnter2}
                    key = {char.id}/>
                })}
            </Grid>
        </div>
        );
    }
    
}


export default Main;




