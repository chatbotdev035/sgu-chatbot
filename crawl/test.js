let _tbody = document.querySelector('#post-1891 > div > div > div > div > section > div > div > div.elementor-column.elementor-col-66.elementor-top-column.elementor-element.elementor-element-66c9 > div > div > div.elementor-element.elementor-element-69f63d9.elementor-widget.elementor-widget-text-editor > div > div > table > tbody')
let nodeList = _tbody.querySelectorAll('tr')

let list = ''

for (let node of nodeList) {
    let id = node.querySelectorAll('td')[1].querySelectorAll('span')[0].textContent
    let name = node.querySelectorAll('td')[2].querySelectorAll('span')[0].textContent
    let data = `"${id}": {"tenganh": "${name}"},`
    list += data

}
console.log(list);

