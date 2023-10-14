const MINUTE = 1000 * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const TIME = {
  MINUTE,
  HOUR,
  DAY,
} as const;

export default TIME;
