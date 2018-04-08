import { connect } from 'react-redux'
import { searchChange, changeAge, changeHeight, changeWidth } from '../../actions'
import { filterBy } from '../../actions'
import Search from '../features/Search/Search'
import GnomeService from '../../services/GnomeService'

const mapStateToProps = (state) => {
  return {
    gnomes: state.gnomes.items,
    page: state.gnomes.page,
    itemsToShow: state.gnomes.itemsToShow
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeSearch: (text) => {
      GnomeService.searchGnomesByName(text, gnomes =>{
        dispatch(searchChange(text, gnomes))
      });
    },
    onChangeAge: (age) => {
      dispatch(changeAge(age))
    },
    onChangeHeight: (height) => {
      dispatch(changeHeight(height))
    },
    onChangeWidth: (width) => {
      dispatch(changeWidth(width))
    },
    onClickFilterBy: (by) => {
      dispatch(filterBy())
    }
  }
}

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)

export default SearchContainer
