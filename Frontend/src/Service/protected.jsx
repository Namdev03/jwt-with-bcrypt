import React from 'react'

function Protected ({children}) {
    const token = localStorage.getItem("token");
   
 const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (!token && !isLoggedIn) {
        alert("Please login to access this page.");
        window.location.href = "/login";
        return;
    }
  return (
    <div>{children}</div>
  )
}

export default Protected