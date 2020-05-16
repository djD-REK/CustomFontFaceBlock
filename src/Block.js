import React, { useEffect } from "react"
import { css, StyleSheet } from "aphrodite/no-important"
import { getStyles } from "./getStyles"
import { defaultConfig } from "./configs"

const Block = (props) => {
  // React's Effect Hook (useEffect) runs a function when the Block is rendered
  useEffect(
    () =>
      // Add a link to the font stylesheet
      props.utils.addLink(
        "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap"
      ),
    []
  )
  // The second parameter is an empty array, [], to make useEffect run just once

  // React's Effect Hook (useEffect) runs a function when the Block is rendered
  useEffect(
    () =>
      // Add a link to the third-party script
      props.utils.addScript(
        "https://cdn.jsdelivr.net/algoliasearch/3/algoliasearchLite.min.js",
        false, // optional boolean: include the defer attribute
        false // optional boolean:  include the async attribute,
      ),
    []
  )
  // The second parameter is an empty array, [], to make useEffect run just once

  const classes = StyleSheet.create(getStyles(props))
  return <h1 className={css(classes.example)}>{props.text}</h1>
}

Block.defaultProps = defaultConfig

export default Block
