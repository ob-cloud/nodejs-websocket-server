/**
 * 无人机操作实现类
 */
module.exports = {
  cal_gyro(data, callback) {
    // handle data
    callback(data)
  },
  cal_mag(data, callback) {
    // handle data
    callback(data)
  },
  lock(data, callback) {
    // handle data
    callback(data)
  },
  unlock(data, callback) {
    // handle data
    callback(data)
  },
  takeoff(data, callback) {
    // handle data
    callback(data)
  },
  landing(data, callback) {
    // handle data
    callback(data)
  },
  fly_rise(data, callback) {
    // handle data
    callback(data)
  },
  fly_down(data, callback) {
    // handle data
    callback(data)
  },
  fly_forward(data, callback) {
    // handle data
    callback(data)
  },
  fly_back(data, callback) {
    // handle data
    callback(data)
  },
  fly_left(data, callback) {
    // handle data
    callback(data)
  },
  turn_left(data, callback) {
    // handle data
    callback(data)
  },
  turn_right(data, callback) {
    // handle data
    callback(data)
  },
  face_unlock(data, callback, cmd) {
    // handle data
    callback({cmd, data: true})
  },
  visual_track(data, callback, cmd) {
    callback({cmd, data: parseInt(Math.random(1,4)*10)})
  },
  attitude_detect(data, callback, cmd) {
    callback({cmd, data: parseInt(Math.random(1,4)*10)})
  },
  face_reg(data, callback, cmd) {
    callback({cmd, data: true})
  },
  open_camera(data, callback, cmd) {
    callback({cmd, data: true})
  },
  close_camera(data, callback, cmd) {
    callback({cmd, data: true})
  },
  visual_track_close (data, callback, cmd) {
    callback({cmd, data: true})
  },
  face_unlock_close (data, callback, cmd) {
    callback({cmd, data: true})
  },
  attitude_detect_close (data, callback, cmd) {
    callback({cmd, data: true})
  },
  send_msg(data, callback) {
    // handle data
    callback(data)
  }
}
