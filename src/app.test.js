import React from 'react';
import { mount } from 'enzyme';

import App from './app';

test('Test render', () => {
    let wrapper = mount(
        <App />
    );

    expect(wrapper.text()).toEqual("Hello world");
});
