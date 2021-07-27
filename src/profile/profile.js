import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './profile.css'
import { Container, Row, Col, Button } from 'react-bootstrap';
import propTypes from 'prop-types'


const setStyleInfo = {
                           color : 'black',
                           fontFamily: 'Montserrat, sans-serif',
                           fontSize : '30px',
                           fontWeight : 'Bold'
                         }
const setStyle = {color : 'red'}

function Profile (props){

   function handleName (txt){
      txt.preventDefault();
      
      alert(props.fullName)
  };
   return( <>    
    <div >
    <Container style={{marginTop : '15%', marginBottom :'auto'}}>
       <Row>
       
          <Col style ={{display:'flex', flexDirection:'column', alignSelf:'center'}}>

              <p style={setStyleInfo}><span style={setStyle}>FullName :</span> {props.fullName}</p>
                 <br />
              <p style = {setStyleInfo}><span style={setStyle}>Bio :</span>  {props.bio} </p>
                 <br />
              <p style = {setStyleInfo}><span style={setStyle}>Profession :</span> {props.profession} </p>
                 <br />
                 <Button variant="primary" onClick={handleName} style={{marginLeft:'35%', marginRight:'35%', fontFamily: 'Montserrat, sans-serif',}}>clickMe</Button>
          
          </Col>
               <Col>   
                     <img className='img-cercle' src={props.children} alt="bla bla"/>
               </Col>
        </Row>
    </Container>     
    </div>
    </>)
}

Profile.propTypes = {
   fullName : propTypes.string.isRequired,
   bio : propTypes.string.isRequired,
   profession : propTypes.string.isRequired,
   
                    }
Profile.defaultProps = {
   fullName : 'Something should be here',
   bio : 'Something should be here',
   profession : 'Something should be here',
}

export default Profile;