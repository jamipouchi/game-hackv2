import React from 'react';
import {MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple} from 'mdb-react-ui-kit';

const Card = ({photo,title,description}) => {
    return (
        <MDBCard style={{ width: '18rem' }}>
            <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/182.webp' alt='...' position='top' />
            <MDBCardBody>
                <MDBCardTitle>
                    {title}
                </MDBCardTitle>
                <MDBCardText>
                    {description}
                </MDBCardText>
            </MDBCardBody>
        </MDBCard>
    );
}
export default Card