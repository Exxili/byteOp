/**
 * Returns a Float 32 Number from an Array of 4 Uint8's
 * @param {number} bytes - The Number as Uint8Array of 4 Bytes
 * @param {number} decimalPlaces - How many decimal places
 * @returns {number|Error} returns Float32 Number else returns Failure Error if byte array is incorrect length
 * @example 
 * const arr = new Uint8Array([65,33,153,154]);
 * const number = toFloat32(arr)
 * // number = 10.1
 * 
 */
export function toFloat32 (bytes: Uint8Array, decimalPlaces: number): number | Error {
    if (bytes.buffer.byteLength === 4) {
        const floatArray = new Float32Array(bytes.buffer)
        return Number.parseFloat(floatArray[0].toFixed(decimalPlaces))
    } else {
        return new Error('Incorrect byte length, bytes must be Uint8Array of 4 Bytes')
    }
}

/**
 * Returns an array of Uint8 Values from a Float number
 * @param {number} float - The Number as a Float e.g 10.1
 * @returns {number} returns Uint8Array[4]
 * @example 
 * const number = 10.1
 * const arr = fromFloat32(number)
 * // arr = [65,33,153,154]
 * 
 */
export function fromFloat32 (float: number): Uint8Array {
    const floatArray = new Float32Array([float])
    return new Uint8Array(floatArray.buffer)
}