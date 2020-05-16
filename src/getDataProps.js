export const getDataProps = (utils, props) =>
  Promise.resolve(
    utils.addScript(
      "https://cdn.jsdelivr.net/algoliasearch/3/algoliasearchLite.min.js",
      false, // optional boolean: include the defer attribute
      false // optional boolean:  include the async attribute
    )
  )
