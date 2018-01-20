import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavigationLink = styled(Link)`
  font-weight: 300;
  text-decoration: underline;
  padding: 0 20px;
  color: black;
  text-transform: uppercase;
`

const NavigationWrapper = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Navigation = () =>
  <NavigationWrapper>
    <NavigationLink to="/">home</NavigationLink>
    <NavigationLink to="/pageOne">page one</NavigationLink>
    <NavigationLink to="/pageTwo">page two</NavigationLink>
  </NavigationWrapper>

export default Navigation
