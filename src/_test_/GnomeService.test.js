import GnomeService from '../services/GnomeService.js';

test('Get All Gnomes', () => {

  return GnomeService.getAllGnomes().then(data => {
    expect(data).toBeDefined();
    expect(Array.isArray(data)).toBe(true);
  });

});
