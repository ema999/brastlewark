import { connect } from 'react-redux'
import { selectGnome, detailBack } from '../../actions'
import GnomeDetail from '../features/GnomeDetail/GnomeDetail'

const mapStateToProps = (state, ownProps) => {

  return {
    gnome: state.gnomes.itemsBk.filter(gnome => {
      return gnome.id.toString() === ownProps.id;
    })[0],
    gnomeDetail: ownProps.id,
    gnomes: state.gnomes.itemsBk,
    backDetailView: state.gnomes.backDetailView
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGnomeClick: (id) => {
      dispatch(selectGnome(id))
    },
    onBackClick: () => {
      dispatch(detailBack())
    }
  }
}

const GnomeDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GnomeDetail)

export default GnomeDetailContainer
