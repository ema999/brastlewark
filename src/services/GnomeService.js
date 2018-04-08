
class GnomeService {

  static getInitialState(callback) {

    this.getAllGnomes().then(data => {

      callback({
        gnomes: {
            items: data,
            itemsBk: data,
            page: 1,
            itemsToShow: 20
        }
      });

    })

  }

  static getAllGnomes() {

    const request = new Request('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json', {
      method: 'GET'
    })

    return fetch(request)
    .then(response => {

      return response.json();

    })
    .then(data => {

      return data.Brastlewark

    })
  }

  static searchGnomesByName(text, callback) {

    this.getAllGnomes().then(data => {

      let dataFiltered = data.filter(gnome => {
        return gnome.name.toUpperCase().indexOf(text.toUpperCase()) > -1;
      });

      callback(dataFiltered);
    })

  }

}

export default GnomeService;
