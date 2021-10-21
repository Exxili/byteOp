/**
 * Returns a Uint16 Number from an Array of 4 Uint8's
 * @param {number} bytes - The Number as Uint8Array of 4 Bytes
 * @param {number} decimalPlaces - How many decimal places
 * @returns {number|Error} returns Uint16 Number else returns Failure Error if byte array is incorrect length
 * @example 
 * const arr = new Uint8Array([7,91,205,21]);
 * const number = toUint32(arr)
 * // number = 123456789
 * 
 */
export function toUint16 (bytes: Uint8Array): number | Error {
    if (bytes.buffer.byteLength === 4) {
        const uInt32Array = new Uint32Array(bytes.buffer)
        return uInt32Array[0]
    } else {
        return new Error('Incorrect byte length, bytes must be Uint8Array of 4 Bytes')
    }
}

/**
 * Returns an array of Uint8 Values from a Uint16 number
 * @param {number} int - The Number as a Uint16 e.g 12345
 * @returns {number} returns Uint8Array[4]
 * @example 
 * const number = 123456789
 * const arr = fromUint32(number)
 * // arr = [7,91,205,21]
 * 
 */
export function fromUint16 (int: number): Uint8Array {
    const uInt32Array = new Uint32Array([int])
    return new Uint8Array(uInt32Array.buffer)
}