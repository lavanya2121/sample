import React from 'react'
import {Link} from 'react-router-dom'
// import ListingUsers from './ListingUsers'
// import GenaerateRandom from './GenaerateRandom'


function Assignements(){
    return(
      
        <div>
            <h2>Listing Assignements</h2>
            <ol>
            <li><Link to="assignements/listing-users">Listing Users</Link></li>
            <li><Link to="assignements/generate-random-numbers">Generate Random Numbers</Link></li>
            </ol>
        </div>
   
    )
}
export default Assignements