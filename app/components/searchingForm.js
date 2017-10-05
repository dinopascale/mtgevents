class searchingForm {
  constructor (name) {
    this.model = {
      "name": name,
      "autoCompleteList": [],
      "inputValue": ""
    }
  }

  _handleKeyUp (e) {
      /*QUI INSERIREMO LA CHIAMATA ALL'AUTOCOMPLETE*/
      console.log(e.target.value);
  }

  _handleClick () {
    console.log('ciao')
      /*QUI INSERIREMO LA VALIDAZIONE E LA CHIAMATA A GOOGLE MAPS E IL CAMBIO DI ROUTE*/
  }

  controller() {
    const self = this;
    let listeners = document.getElementsByClassName(this.model.name);
    Array.prototype.forEach.call(listeners, el => {
      const typeEvent = el.dataset.event;
      (typeEvent === "keyup")
        ? el.addEventListener(typeEvent,self._handleKeyUp)
        : el.addEventListener(typeEvent, self._handleClick)
    })
  }


  view() {
    return `
      <h1 class="title">Mtg Discovery</h1>
      <h3 class="subtitle">Trovare i pptq non è mai stato così facile</h3>
      <input class="searchBox ${this.model.name}" data-event="keyup" type="text"/>
      <button
        data-event="click"
        class="searchBtn ${this.model.name}"
      >Search
      </button>
    `
  }
}

export default searchingForm;
