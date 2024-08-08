import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const Loader = () => {
  return (
    <ClipLoader
    color={"orange"}
    loading={true}
    size={50}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
  )
}

export default Loader