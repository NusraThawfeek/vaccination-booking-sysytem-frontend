import React from 'react'

function AdminGs() {
    return (
        <div className='container'>
            <div className='card card-admi mt-5'>
                <div className='card-content p-4'>
                    <form className='form'>
                        <div className="form-group1">
                            <label className='text '>GS Division</label>
                            <select class="form-control" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                            <label className='text pt-3'>Division Code</label>
                            <input type="name" className="form-control" placeholder="" />
                            <label className='text pt-3'>User Name</label>
                            <input type="name" className="form-control" placeholder="" />
                            <label className='text pt-3'>Email address</label>
                            <input type="emails" className="form-control" placeholder="" />
                            <label className='text pt-3'>NIC Number</label>
                            <input type="name" className="form-control" placeholder="" />

                            <div>
                                <h6 className='centerDet'>Center Details</h6>
                                <label className='text pt-2'>Email address</label>
                                <input type="name" className="form-control" placeholder="" />

                            </div>


                        </div>
                        <button type="submit" class="btn btn-primary mt-3 right">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminGs
