/**
 * Returns a Int16 Number from an Array of 4 Uint8's
 * @param {number} bytes - The Number as Uint8Array of 4 Bytes
 * @param {number} decimalPlaces - How many decimal places
 * @returns {number|Error} returns Int16 Number else returns Failure Error if byte array is incorrect length
 * @example 
 * const arr = new Uint8Array([48, 57]);
 * const number = toInt16(arr)
 * // number = 14640
 * 
 */
export function toInt16 (bytes: Uint8Array): number | Error {
    if (bytes.buffer.byteLength === 2) {
        const int16Array = new Int16Array(bytes.buffer)
        return int16Array[0]
    } else {
        return new Error('Incorrect byte length, bytes must be Uint8Array of 2 Bytes')
    }
}

/**
 * Returns an array of Uint8 Values from a Int16 number
 * @param {number} int - The Number as a Int16 e.g 123456789
 * @returns {number} returns Uint8Array[4]
 * @example 
 * const number = 12345
 * const arr = fromInt16(number)
 * // arr = [48, 57]
 * 
 */
export function fromInt16 (int: number): Uint8Array {
    const int16Array = new Int16Array([int])
    return new Uint8Array(int16Array.buffer)
}