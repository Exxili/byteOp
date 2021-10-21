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
export function fromUint8 (int: number): Uint8Array {
    const uInt8Array = new Uint8Array([int])
    return new Uint8Array(uInt8Array.buffer)
}