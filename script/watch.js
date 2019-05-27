// Author: Max Yi-Hsun Chou <yihsunmaxchou@icloud.com>
// Github: https://github.com/maxchou415

const blocklist = ['韓國瑜', '韓市長', '韓總', '國瑜', '韓流', '韓粉', '韓導']
const templateHtml = '<div><h1 style="padding: 30px; text-align: center;">草包已被隱藏！</h1></div>'

const content = document.querySelector('#contentArea, #pagelet_timeline_main_column')

function hasSensitiveWordInBlocklist (article) {
  return blocklist.some((sensitiveWord) => article.innerHTML.includes(sensitiveWord))
}

function removeElems () {
  const articles = content.querySelectorAll(`div[id][role="article"]`)

  articles.filter(hasSensitiveWordInBlocklist).forEach(function (article) {
    article.innerHTML = templateHtml
  })
}

content.addEventListener('DOMContentLoaded', removeElems)

content.addEventListener('DOMNodeInserted', removeElems)

content.addEventListener('DOMSubtreeModified', removeElems)
