import React, { useState } from 'react'

export const History = () => {

  const [image, setImage] = useState('')

  const preview = (id) => {
    console.log(id)
    setImage(id)
  }

  return (
    <>
      <div className='index-container'>
        <div className='data-container'>

          <div className='text-container'>
            <h1>Report history</h1>
          </div>

          <div className='table-container'>
            <table cellspacing="0" cellpadding="0">
              <tbody>
                <tr>
                  <th>ID</th>
                  <th>Date</th>
                  <th>Algorithm</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
                <tr onMouseEnter={(id) => { preview(1) }}>
                  <td>1</td>
                  <td>10/01/2023 13:20:20</td>
                  <td>TEM 1.0</td>
                  <td>No description</td>
                  <td className='link'>Download</td>
                </tr>
                <tr onMouseEnter={(id) => { preview(2) }}>
                  <td>2</td>
                  <td>09/01/2023 12:32:45</td>
                  <td>SEM 1.0</td>
                  <td>No description</td>
                  <td className='link'>Download</td>
                </tr>
                <tr onMouseEnter={(id) => { preview(3) }}>
                  <td>3</td>
                  <td>09/01/2023 09:34:12</td>
                  <td>SEM 1.0</td>
                  <td>No description</td>
                  <td className='link'>Download</td>
                </tr>
                <tr onMouseEnter={(id) => { preview(4) }}>
                  <td>4</td>
                  <td>08/01/2023 18:12:57</td>
                  <td>TEM 1.0</td>
                  <td>No description</td>
                  <td className='link'>Download</td>
                </tr>
                <tr onMouseEnter={(id) => { preview(5) }}>
                  <td>5</td>
                  <td>04/01/2023 19:43:41</td>
                  <td>SEM 1.0</td>
                  <td>No description</td>
                  <td className='link'>Download</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='preview-image'>
          <div className='preview-micro' style={{
            border: image ? 'none' : 'black 1px solid'
          }}>
            {image == '' ? (<p>Preview image</p>) : (<img src={'image/micro/' + image + '.jpg'} alt="" />)}
          </div>
          <div className='preview-chart' style={{
            border: image ? 'none' : 'black 1px solid'
          }} >
            {image == '' ? (<p>Preview chart</p>) : (<img src={'image/chart/' + image + '.png'} alt="" />)}
          </div>
        </div>
      </div>
    </>
  )
}
