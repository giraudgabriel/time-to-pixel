/**
 * Determine whether string is timestamp
 *
 * @example
 *
 * isTimestamp('1606205966448'); // true
 * isTimestamp(1606205966448); // true
 * isTimestamp('1606205966448qwe'); // false
 * isTimestamp('2020-11-24T08:19:26.448Z'); // false
 *
 * @param {string|number} n
 * @returns {boolean}
 */
 export function isTimestamp(n: number | string): boolean {
  n = n.toString();
  const parsed = parseFloat(n);
  return !Number.isNaN(parsed) && Number.isFinite(parsed) && /^\d+\.?\d+$/.test(n);
}
