import { INVALID_TIMESTAMP_ERROR } from "../errors";
import { isTimestamp } from "../validators/timestamp.validator";

/**
  * Function to get the position based on the given parameters
  * @param timeStart timestamp in unix time
  * @param timeEnd timestamp in unix time
  * @param timeEvent timestamp in unix time
  @returns timestamps parsed to unix time
 */
  export function tryParseToTimestamp(timeStart: number | Date, timeEnd: number | Date, timeEvent: number | Date): [number, number, number] {
    let isValidTimestamp = true;
  
    if (typeof timeStart === 'number') {
      isValidTimestamp = isValidTimestamp && isTimestamp(timeStart);
    }
  
    if (typeof timeEnd === 'number') {
      isValidTimestamp = isValidTimestamp && isTimestamp(timeEnd);
    }
  
    if (typeof timeEvent === 'number') {
      isValidTimestamp = isValidTimestamp && isTimestamp(timeEvent);
    }
  
    if (!isValidTimestamp) {
      throw new Error(INVALID_TIMESTAMP_ERROR);
    }
    
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
    return [timeStart, timeEnd, timeEvent];
  };
  