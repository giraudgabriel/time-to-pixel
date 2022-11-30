import { tryParseToTimestamp } from "./utils/timestamp.parser";

/**
 * Function to get the position based on the given parameters
 * @param timeStart timestamp in unix time
 * @param timeEnd timestamp in unix time
 * @param timeEvent timestamp in unix time
 * @param width width of the container
 * @returns pixel position of the event
 */
export function time2pixel(timeStart: number | Date, timeEnd: number | Date, timeEvent: number | Date, width: number): number {
  [timeStart, timeEnd, timeEvent] = tryParseToTimestamp(timeStart, timeEnd, timeEvent);
  return Math.round((timeEvent - timeStart) / (timeEnd - timeStart) * width);
};

