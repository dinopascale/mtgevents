function viewHome(model) {
  const DOM = {
    input: document.getElementById('sFld'),
    datalist: document.getElementById('comuni')
  }
  function updateDatalist () {
    const optionList = model.getList();
    return `
      ${optionList.map(el => `<option value="${el.Nome}">`).join('')}
    `
  }
  return {
    getDOM: () => {
      return DOM;
    },
    notify: () => {
      const html = updateDatalist();
      DOM.datalist.innerHTML = html;
    }
  }
}

export default viewHome
