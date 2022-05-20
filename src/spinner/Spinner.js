import React, { useEffect, useState } from 'react'
import "./spinner.css";
import { ThreeDots } from "react-loader-spinner";
import { Button } from 'react-bootstrap';

const Spinner = () => {
    const [spinner, setSpinner] = useState(false)
    
    
    useEffect(() => {
        if (spinner) {
            setTimeout(() => {
                setSpinner(false)
            }, 2000);
        }
    }, [spinner])
    


  return (

    <div className="loader">
      <div className="loader_spinner">
      
      <ThreeDots
        ariaLabel='loading'
        color="#ed3a7f"
        height={60}
        width={60}
        visible={spinner}
        />
        </div>

    <div className="loader_button">
    <Button onClick={() => setSpinner(!spinner)}>Toggle Loader</Button>
    </div>
    </div>

  )
}

export default Spinner