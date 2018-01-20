import React from 'react'
import styled from 'styled-components'

const Heading = styled.h1`
  font-weight: 300;
`

class App extends React.Component {
  render() {
    return (
      <div>
        <Heading>
          It's just React
        </Heading>
      </div>
    )
  }
}

export default App
