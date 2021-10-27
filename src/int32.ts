/**
 * Returns a Int32 Number from an Array of 4 Uint8's
 * @param {number} bytes - The Number as Uint8Array of 4 Bytes
 * @param {number} decimalPlaces - How many decimal places
 * @returns {number|Error} returns Int32 Number else returns Failure
 * Error if byte array is incorrect length
 * @example
 * const arr = new Uint8Array([7,91,205,21]);
 * const number = toInt32(arr)
 * number = 123456789
 *
 */
export function toInt32(bytes: Uint8Array): number | Error {
  if (bytes.buffer.byteLength === 4) {
    const int32Array = new Int32Array(bytes.buffer);
    return int32Array[0];
  }
  throw Error("Incorrect byte length, bytes must be a Uint8Array of 4 Bytes");
}

/**
 * Returns an array of Uint8 Values from a Int32 number
 * @param {number} int - The Number as a Int32 e.g 123456789
 * @returns {number} returns Uint8Array[4]
 * @example
 * const number = 123456789
 * const arr = fromInt32(number)
 * // arr = [7,91,205,21]
 *
 */
export function fromInt32(int: number): Uint8Array {
  const int32Array = new Int32Array([int]);
  return new Uint8Array(int32Array.buffer);
}
