import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Carousel from '../component/carousel';

const sampleData = {
  _id: '5f6ebd0914590aafbcc98430',
  pid: 1,
  name: 'Generic Frozen Chair',
  rating: 2.52,
  reviews_count: 2933,
  price: '$26.00',
  image_url: 'https://fec-lego-recommendation.s3-us-west-1.amazonaws.com/5.jpeg',
  label: 0,
  show_most_like: 'Practical',
  wishlist: false,
  in_cart: false,
  __v: 0,
};

Enzyme.configure({ adapter: new Adapter() });

describe('Carsousl Component', () => {
  test('should render component properly', () => {
    const wrapper = shallow(<Carousel prdts={sampleData}/>);
    expect(wrapper).toHaveLength(1);
  });

  test('should render one image with provided url', () => {
    const wrapper = shallow(<Carousel prdts={sampleData} />);
    expect(wrapper.find('image_url')).toHaveLength(1);
  });

  test('should render one product name', () => {
    const wrapper = shallow(<Carousel prdts={sampleData} />);
    expect(wrapper.find('.name')).toHaveLength(1);
    expect(wrapper.find('.name').text()).toEqual('Generic Frozen Chair');
  });

});
