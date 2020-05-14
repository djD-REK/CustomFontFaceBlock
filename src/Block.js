import React from "react"
import { css, StyleSheet } from "aphrodite/no-important"
import { getStyles } from "./getStyles"
import { defaultConfig } from "./configs"

const Block = (props) => {
  function addLink(href) {
    const link = document.createElement("link")
    link.setAttribute("type", "text/css")
    link.setAttribute("rel", "stylesheet")
    link.setAttribute("href", href)
    document.head.appendChild(link)
  }

  addLink(
    "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap"
  )
  const classes = StyleSheet.create(getStyles(props))
  return <h1 className={css(classes.example)}>{props.text}</h1>
}

Block.defaultProps = defaultConfig

export default Block
