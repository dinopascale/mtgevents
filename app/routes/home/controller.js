import API from '../../lib/api'

function controllerHome(model,view) {
  const DOM = view.getDOM();
  model.register(view)
  //defineEventHandlers
  function handleKeyup (ev) {
    const input = ev.target.value;
    if(input.length <= 2) {
      model.remove();
    }
    if(input.length > 2) {
      model.remove();
      const chached = model.isCached(input);
      if(!chached) {
        console.log('cache ',model.getCache())
        API.autocomplete(input)
         .then(data => {
           console.log('data ', data.length);
           (data.length) ? model.add(input,data) :  false;
         })
      } else {
        model.getFromCache(input)
      }
    }
  }
  //addEventHandlers
  DOM.input.addEventListener('keyup', handleKeyup)
}

export default controllerHome;
