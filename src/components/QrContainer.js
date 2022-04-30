import React from 'react'
import Qr from "./Qr"

const QrContainer = ({title}) => {
    return(
        <div>
            <h1>{title}</h1>
            <Qr/>
        </div>
    )
}
export default  QrContainer