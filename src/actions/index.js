export const selectGnome = (id) => {
  return {
    type: 'SELECT_GNOME',
    id
  }
}

export const selectPage = (number) => {
  return {
    type: 'SELECT_PAGE',
    number
  }
}

export const searchChange = (text, gnomes) => {
  return {
    type: 'SEARCH_CHANGE',
    text,
    gnomes
  }
}

export const filterBy = (y) => {
  return {
    type: 'FILTER_BY'
  }
}

export const changeAge = (age) => {
  return {
    type: 'CHANGE_AGE',
    age
  }
}

export const changeHeight = (height) => {
  return {
    type: 'CHANGE_HEIGHT',
    height
  }
}

export const changeWidth = (width) => {
  return {
    type: 'CHANGE_WIDTH',
    width
  }
}

export const detailBack = () => {
  return {
    type: 'DETAIL_BACK'
  }
}
