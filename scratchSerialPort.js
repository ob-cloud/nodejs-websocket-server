class ScratchSerialPort {
  constructor() {
    this.serialPort = new require('SerialPort')('COM3', {
      baudRate: 115200
    })
  }
  write(data) {
    this.serialPort.write(data)
  }
  getBuf(data) {
    const buff = [0xFF, 0x55, 0x80, 0x80, 0x80, 0x80, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]
    buff.forEach((item, index) => {
      if (index === 8) {
        buff[index] = data.cmd
      }
      if (index > 8) {
        buff[index] = data[`data${index - 8}`]
      }
    })
    return buff
  }
  getMessageBuf(msg) {
    buff = [0xFE, 0x04 + msg.length, 0x93, 0xCF, 0x7D, 0x5A]

    for (let i = 0; i < msgLen; i++) {
      var s = msg.substr(i, 1)
      var v = parseInt(s, 16)
      buff.push(v)
    }
    buff.push(0xFF)
    return buff
  }
}

module = ScratchSerialPort
