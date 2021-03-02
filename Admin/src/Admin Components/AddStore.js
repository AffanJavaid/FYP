import React from 'react'

const  AddStore = () => {
  return (
    <div>
      <div className="container">
        <h4 className="center">AddStore</h4>
        <div className="form">
          <label>Store ID</label>
          <input type="number" name="SID"/>
          <label>Store Password</label>
          <input type="text" name="SPass"/>
          <label>Store Name</label>
          <input type="text" name="SName"/>
          <label>Store Location</label>
          <input type="text" name="SLocation"/>
          <label>Brand ID</label>
          <input type="number" name="BID"/>
        </div>
      </div>
    </div>
  )
}

export default AddStore