import { fromInt16 } from ".";
import { toInt16 } from "./int16";

/**
 * toInt16 - Test 1 - Convert Uint8Data to Int16 number value
 */
test("should return 14640", () => {
  const uint8TestData = new Uint8Array([48, 57]);
  expect(toInt16(uint8TestData)).toBe(14640);
});

/**
 * toInt16 - Test 2 - Force Error to occur due to incorrect length of argument
 */
test("should throw Error - Incorrect byte length", () => {
  const uint8TestData = new Uint8Array([10, 11, 12, 13]);
  expect(() => {
    toInt16(uint8TestData);
  }).toThrow("Incorrect byte length, bytes must be a Uint8Array of 2 Bytes");
});

/**
 * fromInt16 - Test 3 - Convert int16 Value back to Uint8Array
 */
test("should equal Uint8Array[48, 57]", () => {
  const int16 = 14640;
  expect(fromInt16(int16)).toEqual(new Uint8Array([48, 57]));
});

/**
 * fromInt16 - Test 4 - Force Error to occur due to Int16 Value outside of Int16 Range
 */
test("should throw Error - Outside Range Error", () => {
  const value = 40000;

  expect(() => {
    fromInt16(value);
  }).toThrow("Outside Range Error, int16 must be between -32768 and 32767");
});
