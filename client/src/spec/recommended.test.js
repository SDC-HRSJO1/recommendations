import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Recommended from '../component/recommended';
import Carousel from '../component/carousel';
import PageButton from '../component/pagebutton';
import SampleData from'./sampleData.js';


Enzyme.configure({ adapter: new Adapter() });


describe('Recommended component', () => {
  test('render the recommendataion page', () => {
    const wrapper = shallow(<Recommended />);
    expect(wrapper).toHaveLength(1);
  });
  test('render the page button', () => {
    const wrapper = shallow(<Recommended />);
    expect(wrapper.find(PageButton)).toHaveLength(1);
  });

/*  test('returns ', async () => {
    axios.get.mockResolvedValue({
      data: SampleData,
    });
    const wrapper = shallow(<Recommended />);
    expect(wrapper.find(Carousel)).toHaveLength(1);
  });
  */
});
