import React from 'react'
import logger from '../src/utils/logger'

export default function Home() {
  logger.info('Hello, World')
  return <h1>Hello, World</h1>
}
