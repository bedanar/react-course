import { shallow } from "enzyme"
import { Dropdown } from ".."
import React from 'react'


describe('Dropdown', () => {
    test('should render', () => {
        const wrapper = shallow(<Dropdown children={<li>hello</li>} button={<button />} isOpen={false} />)
        expect(wrapper).toBeDefined()
        expect(wrapper.find('#button')).toBeDefined()
        expect(wrapper.find('#button').isEmptyRender()).toBeFalsy()
    })
})