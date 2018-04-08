import { connect } from 'react-redux'
import { selectPage } from '../../actions'
import PaginatorList from '../features/PaginatorList/PaginatorList'

const mapStateToProps = (state) => {
  return {
    gnomes: state.gnomes.items,
    page: state.gnomes.page,
    itemsToShow: state.gnomes.itemsToShow
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPageClick: (id) => {
      window.scrollTo(0, 0);
      dispatch(selectPage(id))
    }
  }
}

const PaginatorListListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginatorList)

export default PaginatorListListContainer
