const Publisher = require('./Publisher')
const Observer = require('./Observer')
class PrdPublisher extends Publisher {
  constructor() {
    super();

    this.prdState = null;
    console.log("PrdPub created");
  }

  getState() {
    return this.prdState;
  }

  setState(state) {
    this.prdState = state;

    this.notify();
  }
}

class DeveloperObserver extends Observer {
  constructor() {
    super();
    this.prdState = {};
    console.log("DeveloperObserver created");
  }

  update(publisher) {
    this.prdState = publisher.getState();

    this.work();
  }
  
  work() {
    const prd = this.prdState;
    console.log(prd);

    console.log("996");
  }
}
const s = new Observer()

const liLei = new DeveloperObserver()

const A = new DeveloperObserver()

const B = new DeveloperObserver()

const Manager = new PrdPublisher()

const prd = {
  work: '996'
}

Manager.add(liLei)
Manager.add(A)
Manager.add(B)

Manager.setState(prd)

// 每秒发布一次
setInterval(() => {
  Manager.setState({000:111})
}, 1000)