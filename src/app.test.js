import React from 'react';
import { mount } from 'enzyme';

import App from './app';

test('Test render', () => {
    let app = mount(
        <App />
    );

    expect(app.text()).toEqual("Hello world");
});
