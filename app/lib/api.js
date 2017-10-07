import { API_ROOT } from './const'

class API {

  static getPPTQ() {
    const API_SEARCH_PPTQ = API_ROOT+'search_pptq.php'
    return fetch(API_SEARCH_PPTQ)
      .then(res => res.json())
  }

  static autocomplete(str) {
     const API_AUTOCOMPLETE = API_ROOT+'autocomplete.php'
     const i = str;
     return fetch(API_AUTOCOMPLETE+'?i='+i)
       .then(res => res.json())
  }
}

export default API;
