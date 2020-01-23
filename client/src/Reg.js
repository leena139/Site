import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Navbar, Button, CardColumns,Carousel } from 'react-bootstrap';
import './Reg.css';
// import './font/VCR_OSD_MONO_1.001.ttf'
// import './font/FiraMono-Medium.otf'
// import './font/FiraMono-Regular.otf'



 class Reg extends Component  {
	// constructor(props) {
   //  	super(props);
   // }
   
   


  

	render() { 
      //   let acc = "./account-07.png";
    return (

        
        <div className="Reg">
			
            <div>
            <Navbar   className="nav" collapseOnSelect expand="lg" bg="dark" variant="dark">
               <Navbar.Brand  className="nav-name">Poker</Navbar.Brand>
               {/* <img class="img1" src="./account-07.png" /> */}
            </Navbar>
            </div>

               <div>
               <h2 className="h21">Texas Holdem Sit N Go Tournament</h2>
               </div>

<div className="cards">
                       {/* card1 */}
{/* <Carousel className="carousel1">
   */}
   <CardColumns className="coll">
     
      {/* <Carousel.Item> */}
			
         <Card  className="leftcard card1" >
        
           {/* <Carousel.Caption> */}
              
            
             <Card.Body>
             <h6 className="h61" >Advanced</h6>
              <h1 className="h11" >Coming soon...</h1>
                <p className="p1" >Buy-in :  0.199 ETH</p>
                <p className="P3-input" ><input className="input1" type="TEXT" placeholder="Your email address..."/></p>
                <p className="p5">
                     <Button className="p4button" variant="primary">SIGN UP TO BE NOTIFIED</Button>
                </p>
             </Card.Body>

             {/* </Carousel.Caption> */}

         </Card>
         
      {/* </Carousel.Item> */}

               {/* card2 */}

      {/* <Carousel.Item>
			 */}
         <Card  className="centercard card2"  >
                
             <Card.Body>
               <h6 className="h61" >Amateur</h6>
               <h1 className="h11" >Open for registration</h1>
                <p  className="p1" >Buy-in :  0.0199 ETH</p>
                <p className="p2">  Players registered: 5</p>
                <p className="p3">  Tournament begins once 6 players buy-in.</p>
                <p className="p5" >
                <Button className="p4button" variant="primary">PAY 0.0199 ETH & BUY-IN</Button>
                </p>
             </Card.Body>

          </Card>

      {/* </Carousel.Item> */}

           

         {/* card3*/}


      {/* <Carousel.Item> */}

			<Card  className="rightcard card3" >
                
              
            
             <Card.Body>
                <h6 className="h61" >Expert</h6>
                <h1 className="h11" >Coming soon...</h1>
                <p className="p1" >Buy-in :  0.19 ETH</p>
                <p className="P3-input" ><input className="input1"  type="TEXT" placeholder="Your email address..."/></p>
                <p className="p5">
                     <Button className="p4button" variant="primary">SIGN UP TO BE NOTIFIED</Button>
                </p>
             </Card.Body>

         </Card>

      {/* </Carousel.Item> */}
        
   </CardColumns>

            
 {/* </Carousel> */}

        </div>



{/* Reg div */}
        </div>
        
    );
	}
}


export default Reg;
