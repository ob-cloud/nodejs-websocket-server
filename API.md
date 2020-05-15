
# 无人机操作指令

## 校准陀螺仪

```js
{
  cmd: "cal_gyro",
  data: 0
}
```

## 校准磁力计

```js
{
  cmd: "cal_mag",
  data: 0
}
```

## 锁机

```js
{
  cmd: "lock",
  data: 0
}
```

## 解锁

```js
{
  cmd: "unlock",
  data: 0
}
```

## 起飞

```js
{
  cmd: "takeoff",
  data: 0
}
```

## 降落

```js
{
  cmd: "landing",
  data: 0
}
```

## 上升

```js
{
  cmd: "fly_rise",
  data: 30
}
```

## 下降

```js
{
  cmd: "fly_down",
  data: 30
}
```

## 往左右前后飞

```js
{
  cmd: "fly_left",
  data: 30
}
```

```js
{
  cmd: "fly_right",
  data: 30
}
```

```js
{
  cmd: "fly_forward",
  data: 30
}
```

```js
{
  cmd: "fly_back",
  data: 30
}
```

## 往 左右 转头

```js
{
  cmd: "turn_left",
  data: 30
}
```

```js
{
  cmd: "turn_right",
  data: 30
}
```

## 向 左右 前后 翻转

```js
{
  cmd: "flip_left",
  data: 0
}
```

```js
{
  cmd: "flip_right",
  data: 0
}
```

```js
{
  cmd: "flip_forward",
  data: 0
}
```

```js
{
  cmd: "flip_back",
  data: 0
}
```

# 识别模块

## 人脸解锁

// 发送

```js
{
  cmd: "face_unlock",
  data: ''
}
```

// 接收

```js
{
  cmd: "face_unlock",
  data: true
}
```

## 视觉跟踪

// 发送

```js
{
  cmd: "visual_track",
  data: ''
}
```

// 接收

```js
{
  cmd: "visual_track",
  data: true
}
```

## 姿态识别

// 发送

```js
{
  cmd: "attitude_detect",
  data: ''
}
```

// 接收

```js
{
  cmd: "attitude_detect",
  data: true
}
```

# OB Car

## 行走

### 向左走

```js
{
  cmd: "car_move_left",
  data: 30
}
```

### 向右

```js
{
  cmd: "car_move_right",
  data: 30
}
```

### 向前

```js
{
  cmd: "car_move_forward",
  data: 30
}
```

### 向后

```js
{
  cmd: "car_move_back",
  data: 30
}
```

## 转弯

### 向左转

```js
{
  cmd: "car_turn_left",
  data: 30
}
```

### 向右转

```js
{
  cmd: "car_turn_right",
  data: 30
}
```

## 停止

```js
{
  cmd: "car_stop",
  data: ''
}
```

## 清除动作

```js
{
  cmd: "car_reset_action",
  data: ''
}
```

## 执行动作

```js
{
  cmd: "car_exec_action",
  data: ''
}
```

## 采集环境

```js
{
  cmd: "car_collect_env",
  data: ''
}
```