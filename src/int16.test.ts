import { toInt16 } from "."

test("toInt16 - Success", () => {
    const uint8TestData = new Uint8Array([48, 57])
    expect(toInt16(uint8TestData)).toBe(14640);
})

test("toInt16 - Failure", () => {
    const uint8TestData = new Uint8Array([10, 11, 12, 13])
    expect(toInt16(uint8TestData)).toBe(Error('Incorrect byte length, bytes must be Uint8Array of 2 Bytes'));
})