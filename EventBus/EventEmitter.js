module.exports = class EventEmitter {
  constructor() {
    // map 存储事件以及回调函数之间的关系
    this.handllers = {}
  }

  on(eventName, cb) {
    // 先判断其事件名称是否存在 无则新键
    if(!this.handllers.hasOwnProperty(eventName)) {
      this.handllers[eventName] = []
    }

    this.handllers[eventName].push(cb)
  }

  emit(eventName, ...args) {
    if(this.handllers.hasOwnProperty(eventName)) {
      this.handllers[eventName].forEach(cb => {
        cb(...args)
      })
    }
  }

  // 删除某个事件队列内的回调函数
  off(eventName, cb) {
    const callbacks = this.handllers[eventName]
    
    const index = callbacks.indexOf(cb)

    if(index != -1) {
      callbacks.cplice(index, 1)
    }
  }

  // 事件内单次监听
  once(eventName, cb) {
    // 包装回调函数 使其使用过后自己删除
    const wrapper = (...args) => {
      cb(...args)
      this.off(eventName, cb)
    }

    this.on(eventName, wrapper)
  }
}
