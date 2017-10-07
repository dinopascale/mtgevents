import API from '../lib/api'

class searchingForm {
  constructor (name) {
      this.name = name;
      //this.model = this.model.bind(this);
      this._handleKeyUp = this._handleKeyUp.bind(this);
      this.model(name);
    }

    model(n) {
      let id = n,
          autocompleteList = "",
          cache = {},
          inputValue = "";
      Object.defineProperties(this.model, {
        'id' : {
          get: () => {return id}
        },
        'autocompleteList' : {
          get: () => {
            console.log('get dalla view');
            return autocompleteList
          },
          set: (val) => {
            autocompleteList += val;
            console.log('settata autocompleteList', autocompleteList)
            this.updateView();
          }
        },
        'cache': {
          get: () => {return cache},
          set: (val) => {
            cache = val;
          }
        },
        'inputValue': {
          get: () => {return inputValue},
          set: (val) => {
            inputValue = val;
          }
        }
      })

    }


  _handleKeyUp (e) {
      /*QUI INSERIREMO LA CHIAMATA ALL'AUTOCOMPLETE*/
      const input = e.target.value;
      //this.model.inputValue = input;
      /*let results = [];
      let docFrag = document.createDocumentFragment();
      const listAutoCompleteDOM = document.getElementById('comuni');
      while (listAutoCompleteDOM.firstChild) {
          listAutoCompleteDOM.removeChild(listAutoCompleteDOM.firstChild);
      }*/
      if(input.length >= 3) {
        API.autocomplete(input)
          .then(data => {
            let c = 0;
            Array.prototype.forEach.call(data, el => {
              let elToHtml = '<option value="'+el.Nome+'" />'
              this.model.autocompleteList = elToHtml;
              c += 1;
              /*const value = el.Nome+" ( "+el.Provincia+" )";
              results.push(value);
              const option = document.createElement('option')
              option.value = value
              docFrag.appendChild(option)*/
            })
            //listAutoCompleteDOM.appendChild(docFrag)
            //this.model.inputValue = input;
            //this.model.autoCompleteListCache[input] = results;
          })
      }
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

  updateView() {
    console.log('updatiamo la view')
    const notinit ='not'
    const DOMElement = document.getElementById(this.name);
    DOMElement.innerHTML = this.view(notinit);
  }


  view(i) {
    console.log(i)
    if(i==null) {
    return `
      <div id=${this.name}>
        <input class="searchBox ${this.model.name}" data-event="keyup" type="text" list="comuni" value="${this.model.inputValue}" />
        <button
          data-event="click"
          class="searchBtn ${this.model.name}"
        >Search
        </button>
        <datalist id="comuni">
        ${this.model.autocompleteList}
        </datalist>
      </div>
    `}
    else {
      return `
      <input class="searchBox ${this.model.name}" data-event="keyup" type="text" list="comuni" value="${this.model.inputValue}" />
      <button
        data-event="click"
        class="searchBtn ${this.model.name}"
      >Search
      </button>
      <datalist id="comuni">
      </datalist>`
    }
  }
}

export default searchingForm;
