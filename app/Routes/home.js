import Cell from '../lib/cell'
import searchingForm from '../components/searchingForm'

class Home extends Cell {
  constructor(name) {
    super(name);

    this.listOrganelle = [];
    const form = new searchingForm('position');
    this.listOrganelle.push(form);
  }

  addReceptor() {
    super.active(this.listOrganelle)
  }

  render () {
      return `
      <h1 class="title">Mtg Discovery</h1>
      <h3 class="subtitle">Trovare i pptq non è mai stato così facile</h3>
      `+super.express(this.listOrganelle);
    }
}

export default Home;
