
/**
 * Function to get the position based on the given parameters
 * @param timeStart timestamp in unix time
 * @param timeEnd timestamp in unix time
 * @param timeEvent timestamp in unix time
 * @param width width of the container
 * @returns pixel position of the event
 */
export function time2pixel(timeStart: number | Date, timeEnd: number | Date, timeEvent: number | Date, width: number): number {
  // Convert to unix time
  if (timeStart instanceof Date) {
    timeStart = timeStart.getTime() / 1000;
  }
  if (timeEnd instanceof Date) {
    timeEnd = timeEnd.getTime() / 1000;
  }
  if (timeEvent instanceof Date) {
    timeEvent = timeEvent.getTime() / 1000;
  }
  return Math.round((timeEvent - timeStart) / (timeEnd - timeStart) * width);
};

