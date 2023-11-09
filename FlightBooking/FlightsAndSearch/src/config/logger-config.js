const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp } ${label} ${level}: ${message}`;
});

const logger = createLogger({

  format: combine(
    label({ label: ':)' }),
    timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
    myFormat,
  ),
  transports: [
    new transports.Console()
]
})


// if (process.env.NODE_ENV !== 'production') {
//   logger.add(new winston.transports.Console({
//     format: winston.format.simple(),
//   }));
// }

module.exports = logger;