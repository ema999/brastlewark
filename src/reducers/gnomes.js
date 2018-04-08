const gnomes = (state = [], action) => {

  switch (action.type) {
    case 'SELECT_PAGE':
      return Object.assign({}, state, {page: action.number});
    case 'SELECT_GNOME':
      return Object.assign({}, state, {gnomeDetail: action.id, backDetailView: false});
    case 'SEARCH_CHANGE':
      return Object.assign({}, state, {searchText: action.text, items: action.gnomes, lastSearch: action.gnomes, page: 1});
    case 'CHANGE_AGE':
      return Object.assign({}, state, {age: action.age});
    case 'CHANGE_HEIGHT':
      return Object.assign({}, state, {height: action.height});
    case 'CHANGE_WIDTH':
      return Object.assign({}, state, {width: action.width});
    case 'DETAIL_BACK':
      return Object.assign({}, state, {backDetailView: true, gnomeDetail: undefined});
    case 'FILTER_BY':
      let items = null;
      let itemsFromSearch = state.isFiltered && !state.items.length ? state.itemsBk: state.items;

      if (state.age) {
        let itemsByAge = itemsFromSearch.filter(gnome => {
          return gnome.age.toString() === state.age.toString()
        })

        items = [...itemsByAge];
      }

      if (state.height) {
        let itemsByHeight = itemsFromSearch.filter(gnome => {
          return Math.round(gnome.height).toString() === Math.round(state.height).toString()
        })

        items = [...itemsByHeight];
      }

      if (state.width) {
        let itemsByWidth = itemsFromSearch.filter(gnome => {
          return Math.round(gnome.width).toString() === Math.round(state.width).toString()
        })

        items = [...itemsByWidth];
      }

      return Object.assign({}, state, {items:  items ? items: state.itemsBk, page: 1, isFiltered: true, gnomeDetail: false});
    default:
      return state
  }

}


export default gnomes
