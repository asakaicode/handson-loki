import { LoggerOptions, createLogger, format as winstonFormat } from 'winston'
import LokiTransport from 'winston-loki'

const options: LoggerOptions = {
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  format: winstonFormat.combine(
    winstonFormat.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    winstonFormat.errors({ stack: true }),
    winstonFormat.splat(),
    winstonFormat.json()
  ),
  defaultMeta: { service: 'user-service' },
  transports: [
    new LokiTransport({
      host: 'http://localhost:3100'
    })
  ]
}

const logger = createLogger(options)

export default logger
