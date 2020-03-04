class JsonResult {
  constructor(success, msg, data) {
    this.success = false
    this.msg = ''
    this.data = ''
    return this
  }
  setSuccess(success) {
    this.success = success
  }
  setMsg(msg) {
    this.msg = msg
  }
  setData(data) {
    this.data = data
  }
  success(msg, data) {
    const jsonResult = new this(true, msg, data)
    return jsonResult
  }
  error(msg, data) {
    const jsonResult = new this(false, msg, data)
    return jsonResult
  }
}

module = JsonResult
