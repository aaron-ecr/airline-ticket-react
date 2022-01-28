import React from 'react';
import ReactDOM from 'react-dom';

import { SearchForm } from './search-form';
import { mount } from 'enzyme';

describe('componente Search Form', () => {
  let wrapper;
  beforeEach(() => {
    //creates the store with any initial state or middleware needed  
    //store = mockStore(initialState);
  })
  
  it('Deberia renderizar sin fallar', () => {
    const div = document.createElement('div');
    wrapper = ReactDOM.render(<SearchForm/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Tiene un form', () => {
    wrapper = mount(<SearchForm/>);
    expect(wrapper.find("form").length).toBe(1);
    wrapper.unmount();
  });

  it('Tiene check de ida y regreso', () => {
    wrapper = mount(<SearchForm/>);
    expect(wrapper.find("input[type='radio']").length).toBe(2);
    wrapper.unmount();
  });



  it('Tiene input para fecha de salida', () => {
    wrapper = mount(<SearchForm/>);
    expect(wrapper.find("input[type='date']").length).toBe(1);
    wrapper.unmount();
  });


  it('Selleciona número de pasajeros', () => {
    wrapper = mount(<SearchForm/>);
    expect(wrapper.find("select").length).toBe(1);
    wrapper.unmount();
  });

  it('Tiene input para fecha de regreso', () => {
    wrapper = mount(<SearchForm/>);
    wrapper.find("input[type='radio']").at(1).simulate('change');
    expect(wrapper.find("input[name='dateOfReturn']").length).toBe(1);
    wrapper.unmount();
  });

})


