import React from 'react'
import ReactDOMServer from 'react-dom/server'

export const createEngine = ({
  doctype = '<!doctype html>'
}: { doctype?: string } = {}) => {
  return (
    path: string,
    options: object,
    callback: (e: any, rendered: string) => void
  ): void => {
    try {
      const Component = require(path).default as React.ComponentType<any>
      const markUp = ReactDOMServer.renderToStaticMarkup(
        React.createElement(Component, options)
      )
      return callback(null, doctype + markUp)
    } catch (error) {
      return callback(error, '')
    }
  }
}
