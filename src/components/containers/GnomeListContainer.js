import { connect } from 'react-redux'
import { selectGnome } from '../../actions'
import GnomeList from '../features/GnomeList/GnomeList'

const mapStateToProps = (state) => {
  return {
    gnomes: state.gnomes.items,
    page: state.gnomes.page,
    itemsToShow: state.gnomes.itemsToShow,
    gnomeDetail: state.gnomes.gnomeDetail
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGnomeClick: (id) => {
      dispatch(selectGnome(id))
    }
  }
}

const GnomeListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GnomeList)

export default GnomeListContainer
