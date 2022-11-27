import { bookmarkletter } from "bookmarkletter"
import fs from "fs-extra"
import { marked } from "marked"

// ファイルパス取得
const filepath = fs.readdirSync("src")

// ソース取得
const srcs = []
for (const item of filepath) {
  const src = fs.readFileSync(`src/${item}/src.js`, "utf-8")
  const res = bookmarkletter(src)
  srcs.push(res)
}

// README.md取得
const docs = []
for (const item of filepath) {
  const src = marked.parse(fs.readFileSync(`src/${item}/README.md`, "utf-8")).replace('<a', '<a class="bookmarklet"')
  docs.push(src)
}

// ドキュメント生成
let doc = ""
docs.forEach((v, i) => {
  doc += '<div class="wrapper">'
  doc += v.replace("TARGET", srcs[i])
  doc += '</div>'
})

let html = fs.readFileSync("docs/index.html", "utf-8")
const res = html.replace("<!-- TARGET -->", doc)

fs.mkdirsSync("dist");
fs.copySync("docs/css/", "dist/css/")
fs.writeFileSync("dist/index.html", res.replace(/\s{2}/g, '').replace(/\n/g, ''))

