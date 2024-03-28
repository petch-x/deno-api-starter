import { createLogger, format, transports } from 'https://esm.sh/winston@3.13.0'
export default createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
  ),
  transports: [
    new transports.Console({
      level: 'info',
      format: format.combine(
        format.colorize(),
        format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
      ),
    }),
    new transports.File({ filename: `${import.meta.dirname}/log/logger.log` }),
  ],
})
