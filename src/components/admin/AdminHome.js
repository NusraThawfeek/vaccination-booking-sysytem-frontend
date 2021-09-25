import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../Hero'

function AdminHome() {
    return (
        <div className=''>
            <Hero />
            <div className="card card-home margin" >
                <div className='card-content '>
                    <ul className="list-admi d-flex justify-content-center">
                        <li className='listitem-admi'><Link to='/assign-gs'>Assign GS</Link></li>
                        <li className='listitem-admi'><Link to='/assign-moh'>Assign MOH</Link></li>
                    </ul>

                </div>
               
            </div>
            <div className='card card-home'>
            <div className='card-content p-5'>
            <h4 className='pb-3' style={{textAlign:'center'}}>Upcomming Vaccination Details</h4>
            <table class=" table table-bordered table-hover">
                    <thead>
                        <tr>
                            
                            <th scope="col">Center</th>
                            <th scope="col">GS division</th>
                            <th scope="col">MOH division</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                           
                        </tr>
                    </tbody>
                </table>
                </div>
                </div>
        </div>
    )
}

export default AdminHome
