import React, { useEffect } from "react"
import { css, StyleSheet } from "aphrodite/no-important"
import { getStyles } from "./getStyles"
import { defaultConfig } from "./configs"

const Block = (props) => {
  // Helper function to add a stylesheet to the <head> element
  const addLink = (href) => {
    const link = document.createElement("link")
    link.setAttribute("type", "text/css")
    link.setAttribute("rel", "stylesheet")
    link.setAttribute("href", href)
    document.head.appendChild(link)
  }

  // React's Effect Hook (useEffect) runs a function once the Block is loaded
  useEffect(
    () =>
      // Add a link to the font stylesheet
      addLink(
        "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap"
      ),
    []
  )
  // The second parameter is an empty array, [], to make useEffect run just once

  const classes = StyleSheet.create(getStyles(props))
  return <h1 className={css(classes.example)}>{props.text}</h1>
}

Block.defaultProps = defaultConfig

export default Block
