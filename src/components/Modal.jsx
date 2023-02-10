import React from 'react'
export const Modal = ({ componente, setVisible }) => {
    const exit = () => {
        setVisible(false)
    }
    return (
        <div className="modal-container">
            <div className="content-container">
                <button className='button-exit' onClick={exit}>X</button>
                <div className="content">
                    {componente}
                </div>
            </div>
        </div>
    )
}
