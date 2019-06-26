import React, { Fragment } from 'react'

const Spinner = () => (
  <Fragment>
    <img
      src='https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/0.16.1/images/loader-large.gif'
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt='Loading...'
    />
  </Fragment>
)

export default Spinner
