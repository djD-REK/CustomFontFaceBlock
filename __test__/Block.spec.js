import React from "react"
import { mount } from "enzyme"
import {
  mockUtils as utils,
  joinClasses,
} from "@volusion/element-block-utils/test-utils"
import { block as Block, defaultConfig } from "../src"
import { flushToStyleTag } from "aphrodite"

let props
describe("The Block", () => {
  beforeEach(() => {
    props = {
      data: {},
      utils,
      joinClasses,
      queryParams: {},
    }
  })
  it("renders without errors", () => {
    mount(<Block {...props} />)
  })
  describe("when there is no custom data", () => {
    it("should render the block with the default content", () => {
      const wrapper = mount(<Block {...props} />)
      expect(wrapper.text()).toBe(defaultConfig.text)
    })
    it("should use the custom font face to render the content", () => {
      const wrapper = mount(<Block {...props} />)
      // Force Aphrodite to output the CSS-in-JS styles in time to test them:
      flushToStyleTag()
      const h1Element = wrapper.find("h1").at(0)
      // Make sure our CSS-in-JS decorator successfully injected the CSS class:
      expect(h1Element.hasClass(/example_(\w+)/)).toBe(true)
      // Expect the computed CSS style to match the custom font face:
      expect(
        getComputedStyle(h1Element.getDOMNode()).getPropertyValue("font-family")
      ).toBe("'Dancing Script', cursive")
      //.toBe(defaultConfig.headingFontSizeString)
    })
  })
  describe("when given custom data", () => {
    it("should render the block using the custom data", () => {
      const customText = "Custom Block Text"
      const wrapper = mount(<Block {...props} text={customText} />)
      expect(wrapper.text()).toBe(customText)
    })
  })
})
