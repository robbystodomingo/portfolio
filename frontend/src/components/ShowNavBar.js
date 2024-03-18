import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";

const ShowNavBar = ({children}) => {
    const location = useLocation();
    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
        console.log('Location: ' , location)
        if (location.pathname === '/' || location.pathname === '/signup'){
            setShowNavbar(false)
        } else {
            setShowNavbar(true)
        }
    }, [location])

    return(
        <div>
            {showNavbar && children}
        </div>
    )
}

export default ShowNavBar