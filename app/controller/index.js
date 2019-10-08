import { Controller } from 'egg';

class Index extends Controller {
  async ping() {
    this.ctx.body = this.ctx.request.body;
  }
}


module.exports = Index;
