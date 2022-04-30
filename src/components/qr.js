import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const Qr = (props) => {
    const [data, setData] = useState('No result');
    return (
        <>
            <QrReader
                onResult={(result, error) => {
                    if (!!result) {
                        setData(result?.text);
                    }

                    if (!!error) {
                        console.info(error);
                    }
                }}
                style={{
                    display: 'flex',  justifyContent:'center', alignItems:'center', margin:'10 px'}}

            />
            <p>{data}</p>
        </>
    );
};

export default Qr