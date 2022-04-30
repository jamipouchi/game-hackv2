import React from 'react';
import {MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple} from 'mdb-react-ui-kit';

const Card = ({photo,title,description}) => {
    return (
        <MDBCard style={{ width: '18rem' }}>
            <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/182.webp' alt='...' position='top' />
            <MDBCardBody>
                <MDBCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </MDBCardText>
            </MDBCardBody>
        </MDBCard>
    );
}
export default Card