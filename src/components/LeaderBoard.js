import React,{useState,useEffect} from 'react';
import "../ranks.css"
import JsonData from '../data.json'

function JsonDataDisplay(){



    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.id}</td>
                    <td>{info.username}</td>
                    <td>{info.points}</td>
                    <td>{info.slack}</td>
                </tr>
            )
        }
    )

    return(
        <div>
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>id</th>
                    <th>username</th>
                    <th>points</th>
                    <th>slack</th>
                </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody>
            </table>

        </div>
    )
}
export default JsonDataDisplay;