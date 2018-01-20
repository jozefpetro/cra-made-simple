import { connect } from 'react-redux'
import { fetchAuthorRequest } from './actions'
import { getAuthor } from './reducer'
import Page from 'components/Page'

const mapStateToProps = (state) => ({
  author: getAuthor(state),
  heading: 'page two'
})

export default connect(mapStateToProps, { fetchAuthorRequest })(Page)
