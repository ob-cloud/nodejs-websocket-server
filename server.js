const fs = require('fs')
const ws = require("nodejs-websocket")
const uavActions = require('./uav_actions')
const JsonResult = require('./jsonResult')
const ScratchSerialPort = require('./scratchSerialPort')

// wss://127.0.0.1:8001/
// const options = {
//   secure: true,
//   key: fs.readFileSync("ssl-key.pem"),
//   cert: fs.readFileSync("ssl-cert.pem")
// }
const options = {}

console.log('server creating')
ws.createServer(options, function (conn) {

  function response(data = {}) {
    // const scratchSerialPort = new ScratchSerialPort()
    // scratchSerialPort.write(scratchSerialPort.getBuf(data))
    conn.sendText(JSON.stringify(data))
  }

  console.log('server created')
  conn.on("text", function (jsonString) {
    const command = JSON.parse(jsonString)
    if (!command) {
      conn.sendText(JsonResult.error())
    }
    const cmd = command.cmd
    const fn = uavActions[cmd]
    if (typeof fn === 'function') {
      fn(command.data, response, cmd)
    } else {
      conn.sendText(JsonResult.error('无实现方法'))
    }
  })
  conn.on("close", function (code, reason) {
    console.log("Connection closed")
  })
  conn.on("connect", function (code, reason) {
    console.log("Connection connected")
  })
  conn.on("error", function (code, reason) {
    console.log("Connection error")
  })
}).listen(8001, "127.0.0.1")
