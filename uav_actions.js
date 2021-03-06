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
  'e-stop': function (data, callback, cmd) {
    // handle data
    callback({cmd, data: true})
  },
  send_msg(data, callback) {
    // handle data
    callback(data)
  },
  car_move_left(data, callback, cmd) {
    callback({cmd, data: true})
  },
  car_move_right(data, callback, cmd) {
    callback({cmd, data: true})
  },
  car_move_forward(data, callback, cmd) {
    callback({cmd, data: true})
  },
  car_move_back(data, callback, cmd) {
    callback({cmd, data: true})
  },
  car_turn_left(data, callback, cmd) {
    callback({cmd, data: true})
  },
  car_turn_right(data, callback, cmd) {
    callback({cmd, data: true})
  },
  car_stop(data, callback, cmd) {
    callback({cmd, data: true})
  },
  car_reset_action(data, callback, cmd) {
    callback({cmd, data: true})
  },
  car_exec_action(data, callback, cmd) {
    callback({cmd, data: true})
  },
  car_collect_env(data, callback, cmd) {
    callback({cmd, data: true})
  },
  car_turn_around(data, callback, cmd) {
    callback({cmd, data: true})
  },
  arm_reset(data, callback, cmd) {
    callback({cmd, data})
  },
  arm_clamp(data, callback, cmd) {
    callback({cmd, data})
  },
  arm_unclamp(data, callback, cmd) {
    callback({cmd, data})
  },
  arm_move_forward(data, callback, cmd) {
    callback({cmd, data})
  },
  arm_move_back(data, callback, cmd) {
    callback({cmd, data})
  },
  arm_move_left(data, callback, cmd) {
    callback({cmd, data})
  },
  arm_move_right(data, callback, cmd) {
    callback({cmd, data})
  },
  arm_rise(data, callback, cmd) {
    callback({cmd, data})
  },
  arm_decline(data, callback, cmd) {
    callback({cmd, data})
  },
  ms_red_light_on(data, callback, cmd) {
    callback({cmd, data})
  },
  ms_red_light_off(data, callback, cmd) {
    callback({cmd, data})
  },
  ms_green_light_on(data, callback, cmd) {
    callback({cmd, data})
  },
  ms_green_light_off(data, callback, cmd) {
    callback({cmd, data})
  },
  ms_blue_light_on(data, callback, cmd) {
    callback({cmd, data})
  },
  ms_blue_light_off(data, callback, cmd) {
    callback({cmd, data})
  },
  ms_req_data(data, callback, cmd) {
    callback({cmd, data})
  },
  ms_group(data, callback, cmd) {
    callback({cmd, data})
  },
  scene_control_light(data, callback, cmd) {
    callback({cmd, data})
  },
  scene_control_volume(data, callback, cmd) {
    callback({cmd, data})
  }
}
