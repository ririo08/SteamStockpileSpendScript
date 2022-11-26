import { bookmarkletter } from "bookmarkletter"
import * as fs from "fs"

const src = fs.readFileSync("src/AppleMusicNowplayScript/src.js", "utf-8")
const res = bookmarkletter(src)
console.log(res)
// console.log(fs.readFileSync("docs/index.html", "utf-8"))

