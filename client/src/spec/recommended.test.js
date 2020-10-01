import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Recommended from '../component/recommended.jsx';
import Product from '../component/product.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('Recommended component', () => {
  it('render the recommendataion page', () => {
    const wrapper = shallow(<Recommended />);
    expect(wrapper).toHaveLength(1);
  });
});
