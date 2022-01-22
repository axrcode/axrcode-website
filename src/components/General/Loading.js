import React from 'react'

const Loading = () => {

    window.onload = function() {
        var contenedor = document.getElementById('loading');

        contenedor.style.visibility = 'hidden';
        contenedor.style.opacity = '0';
    }

    return (
        <div className="z-50 loading-content" id="loading">
            <div className="loader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>  
        </div>
    )
}

export default Loading
