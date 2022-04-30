import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
    return (
            <MDBFooter className='text-center text-white' style={{ backgroundColor: '#0a4275' }}>
                <MDBContainer className='p-4 pb-0'>
                    <section className=''>
                        <p className='d-flex justify-content-center align-items-center'>
                            <span className='me-3'>Start Gaming</span>
                            <button type='button' className='btn btn-outline-light btn-rounded'>
                                Scan Qr Code
                            </button>
                        </p>
                    </section>
                </MDBContainer>

                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    <a className='text-white'>
                        Devolpoded By Game-Hack  team
                    </a>
                </div>
            </MDBFooter>
    );
}

export default FooterPage;