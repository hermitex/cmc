import { Container } from '@mui/material'
import React from 'react'
import Models from './Models'

function Results() {
  return (
    <Container sx={{bgcolor:'#fff', minHeight: '100vh', display: 'flex', justifyContent: 'center'}}>
        <Models/>
    </Container>
  )
}

export default Results
