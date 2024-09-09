import React from 'react'

const Jobs = ({result}) => {
  return (
    <>
      <div>
      <h3 className='mb-2 fond-bold'>{result.length} jobs</h3> 
      {result}
      </div>
    </>
  )
}

export default Jobs