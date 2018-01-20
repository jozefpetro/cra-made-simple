import React from 'react'
import PropTypes from 'prop-types'
import Button from 'components/Button'
import Paragraph from 'components/Paragraph'
import Loading from 'components/Loading'

const Article = ({ author, onAuthorFetch, children }) =>
  <div>
    {children}
    <Paragraph>
      Author: {author.firstName} {author.lastName}
    </Paragraph>
    {author.isLoading && <Loading />}
    <Button onClick={onAuthorFetch}>fetch author</Button>
  </div>

Article.propTypes = {
  author: PropTypes.shape({
    isLoading: PropTypes.bool.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
  }),
  onAuthorFetch: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

export default Article
