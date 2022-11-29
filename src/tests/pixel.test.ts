import { time2pixel } from '../index';

const timeStart = 1669701600; // 2022-07-15 00:00:00
const timeEnd = 1669744800; // 2022-07-15 12:00:00
const timeEvent = 1669734000; // 2022-07-15 09:00:00

const timeStartInDate = new Date(timeStart); // 2022-07-15 00:00:00
const timeEndInDate = new Date(timeEnd); // 2022-07-15 12:00:00
const timeEventInDate = new Date(timeEvent); // 2022-07-15 09:00:00

const width = 800; // 800px

// Test 1: timeEvent is in the middle of the time range
test('[UNIX] - width expected to be 600px from width 800px', () => {
  expect(time2pixel(timeStart, timeEnd, timeEvent, width)).toBe(600);
});

// Test 2: timeEvent is at the end of the time range
test('[UNIX] - width expected to be 800px', () => {
  expect(time2pixel(timeStart, timeEnd, timeEnd, width)).toBe(800);
});

// Test 3: timeEvent is at the start of the time range
test('[UNIX] - width expected to be 0px', () => {
  expect(time2pixel(timeStart, timeEnd, timeStart, width)).toBe(0);
});

// Test 4: timeEvent  is in the middle of the time range in Date
test('[DATE] - width expected to be 600 from width 800px', () => {
  expect(time2pixel(timeStartInDate, timeEndInDate, timeEventInDate, width)).toBe(600);
});

// Test 5: timeEvent is at the end of the time range in Date
test('[DATE] - width expected to be 800px', () => {
  expect(time2pixel(timeStartInDate, timeEndInDate, timeEndInDate, width)).toBe(800);
});

// Test 6: timeEvent is at the start of the time range in Date
test('[DATE] - width expected to be 0px', () => {
  expect(time2pixel(timeStartInDate, timeEndInDate, timeStartInDate, width)).toBe(0);
});





