import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Navigation from 'components/Navigation'
import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import Article from 'components/Article'

const PageWrapper = styled.div`
  padding: 20px;
  font-weight: 300;
  color: black;
  background-color: #f4f4f4;
`

const Page = ({ fetchAuthorRequest, author, heading }) =>
  <PageWrapper>
    <Navigation />
    <Heading>{heading}</Heading>
    <Article
      onAuthorFetch={fetchAuthorRequest}
      author={author}
    >
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Cupiditate, atque similique qui repudiandae voluptate, accusamus
        dolore doloribus, recusandae aliquam dolor explicabo at placeat?
        Tenetur ad commodi fugit sit corporis voluptatum.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Cupiditate, atque similique qui repudiandae voluptate, accusamus
        dolore doloribus, recusandae aliquam dolor explicabo at placeat?
        Tenetur ad commodi fugit sit corporis voluptatum.
      </Paragraph>
    </Article>
  </PageWrapper>

Page.propTypes = {
  author: PropTypes.object.isRequired,
  fetchAuthorRequest: PropTypes.func.isRequired
}

export default Page
