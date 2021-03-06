import {
  serif, sansSerif, script, fraktur,
  monoSpace, doubleStruck, circle, square
} from "../src"

const unTouchStr = "ๆ็ฑไฝ "
const origin = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" + unTouchStr
test("serif", () => {
  expect(serif("hello, world!")).toEqual("hello, world!")
  expect(serif()).toEqual("")
  expect(serif(origin, { fontStyle: "italic" })).toEqual("๐ด๐ต๐ถ๐ท๐ธ๐น๐บ๐ป๐ผ๐ฝ๐พ๐ฟ๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐โ๐๐๐๐๐๐๐๐๐๐๐ ๐ก๐ข๐ฃ๐ค๐ฅ๐ฆ๐ง0123456789ๆ็ฑไฝ ")
})

test("sansSerif", () => {
  expect(sansSerif(origin)).toEqual("๐ ๐ก๐ข๐ฃ๐ค๐ฅ๐ฆ๐ง๐จ๐ฉ๐ช๐ซ๐ฌ๐ญ๐ฎ๐ฏ๐ฐ๐ฑ๐ฒ๐ณ๐ด๐ต๐ถ๐ท๐ธ๐น๐บ๐ป๐ผ๐ฝ๐พ๐ฟ๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐ข๐ฃ๐ค๐ฅ๐ฆ๐ง๐จ๐ฉ๐ช๐ซๆ็ฑไฝ ")
})

test('script', () => {
  expect(script(origin)).toEqual("๐โฌ๐๐โฐโฑ๐ขโโ๐ฅ๐ฆโโณ๐ฉ๐ช๐ซ๐ฌโ๐ฎ๐ฏ๐ฐ๐ฑ๐ฒ๐ณ๐ด๐ต๐ถ๐ท๐ธ๐นโฏ๐ปโ๐ฝ๐พ๐ฟ๐๐๐๐โด๐๐๐๐๐๐๐๐๐๐๐0123456789ๆ็ฑไฝ ")
})

test("fraktur", () => {
  expect(fraktur(origin, { fontStyle: "bold" })).toEqual('๐ฌ๐ญ๐ฎ๐ฏ๐ฐ๐ฑ๐ฒ๐ณ๐ด๐ต๐ถ๐ท๐ธ๐น๐บ๐ป๐ผ๐ฝ๐พ๐ฟ๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐0123456789ๆ็ฑไฝ ')
})

test("monoSpace", () => {
  expect(monoSpace(origin)).toEqual("๐ฐ๐ฑ๐ฒ๐ณ๐ด๐ต๐ถ๐ท๐ธ๐น๐บ๐ป๐ผ๐ฝ๐พ๐ฟ๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐ ๐ก๐ข๐ฃ๐ถ๐ท๐ธ๐น๐บ๐ป๐ผ๐ฝ๐พ๐ฟๆ็ฑไฝ ")
})

test("doubleStruck", () => {
  expect(doubleStruck(origin)).toEqual("๐ธ๐นโ๐ป๐ผ๐ฝ๐พโ๐๐๐๐๐โ๐โโโ๐๐๐๐๐๐๐โค๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐ ๐ก๐ข๐ฃ๐ค๐ฅ๐ฆ๐ง๐จ๐ฉ๐ช๐ซ๐๐๐๐๐๐๐๐๐ ๐กๆ็ฑไฝ ")
})

test("circle", () => {
  expect(circle(origin)).toEqual("โถโทโธโนโบโปโผโฝโพโฟโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ โกโขโฃโคโฅโฆโงโจโฉโชโ โกโขโฃโคโฅโฆโงโจๆ็ฑไฝ ")
})

test("square", () => {
  expect(square(origin)).toEqual("๐ฐ๐ฑ๐ฒ๐ณ๐ด๐ต๐ถ๐ท๐ธ๐น๐บ๐ป๐ผ๐ฝ๐พ๐ฟ๐๐๐๐๐๐๐๐๐๐๐ฐ๐ฑ๐ฒ๐ณ๐ด๐ต๐ถ๐ท๐ธ๐น๐บ๐ป๐ผ๐ฝ๐พ๐ฟ๐๐๐๐๐๐๐๐๐๐0123456789ๆ็ฑไฝ ")  // god
})
