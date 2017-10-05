class API {
  constructor() {
    this.API_URL = "http://dinopascale.altervista.org/testApi/search_pptq.php"
  }
  getPPTQ() {
    return fetch(this.API_URL)
      .then(res => res.json())
  }
}

export default API;
