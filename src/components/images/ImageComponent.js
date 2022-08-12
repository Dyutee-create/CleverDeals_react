import React,{Component} from 'react';
import {Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';



class ImageComponent extends Component {
    constructor(props){
        super(props);
        this.state = {  
            id : this.props.propertyId
        }
        const url ='./Image1.jpeg';
    
    console.log('IDDDD:', this.props.propertyId);
    }

    render () {
        
    return (
        <div class="container"> 
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                    <li data-target="#myCarousel" data-slide-to="3"></li>
                    <li data-target="#myCarousel" data-slide-to="4"></li>
                    <li data-target="#myCarousel" data-slide-to="5"></li>
                </ol>
                <div class="carousel-inner">
                
                    <div class="item active">
                        <img src={require(`${this.props.imagePath[0]}`)} alt="Image1"/>
                    </div>

                    <div class="item">
                        <img src={require(`${this.props.imagePath[1]}`)} alt="Image2" />
                    </div>
    
                    <div class="item">
                        <img src={require(`${this.props.imagePath[2]}`)} alt="Image3" />
                    </div>

                    <div class="item">
                        <img src={require(`${this.props.imagePath[3]}`)} alt="Image4" />
                    </div>

                    <div class="item">
                        <img src={require(`${this.props.imagePath[4]}`)} alt="Image5" />
                    </div>

                    <div class="item">
                        <img src={require(`${this.props.imagePath[5]}`)} alt="Image6" />
                    </div>
                </div>
                <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#myCarousel" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
    }
}

export default ImageComponent;