import Gnome from '../components/features/Gnome/Gnome';
import React from 'react';
import { mount } from 'enzyme';

const gnomeData = { id: 1, name: 'Gnome Name', thumbnail:'image' };

test('Gnome component renders body and head', () => {

  const wrapper = mount(
    <Gnome {...gnomeData} />
  );

  const head = wrapper.find('.head');
  const body = wrapper.find('.body');
  const name = wrapper.find('.name');

  expect(head.prop('src')).toBe('image');
  expect(body.prop('src')).toBeDefined();
  expect(typeof name.text()).toBe('string');

});
