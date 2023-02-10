import React, { useState } from 'react'

export const Report = () => {

  const [image, setImage] = useState('')

  const submitForm = (e) => {
    e.preventDefault()
    alert("Report with ID 1 generated!");
  }
  const preview = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0])
    }
  }
  
  return (
    <>
      <div className='index-container'>
        <div className='data-container'>
          <div className='text-container'>
            <h1>Report generation</h1>
          </div>
          <div className='form-container'>
            <form onSubmit={(e) => submitForm(e)} >
              <input className='input-form'
                type="text"
                placeholder="Description"
              />
              <label htmlFor="file-upload" className="custom-file-upload" >
                Subir archivo
              </label>
              <input name="file" id="file-upload" type="file" onChange={preview} accept='image/*' />
              <select className='input-form'>
                <option value="" disabled selected>Select your algorithm</option>
                <option value="alumno">TEM 1.0</option>
                <option value="maestro">SEM 1.0</option>
              </select>
              <button className='button-form'>Generate</button>
            </form>
          </div>
        </div>
        <div className='preview-image'>
          <div className='preview-image-report' style={{
            backgroundColor: image ? 'white' : '#e3e3e3'
          }}>
            {image == '' ? (<p>Preview image</p>) : (<img src={URL.createObjectURL(image)} alt="" />)}
          </div>
        </div>
      </div>
    </>
  )
}
