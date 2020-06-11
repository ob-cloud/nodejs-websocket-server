
- [无人机](#无人机)
  - [**校准陀螺仪**](#校准陀螺仪)
    - [校准陀螺仪单项](#校准陀螺仪单项)
    - [校准陀螺仪分组](#校准陀螺仪分组)
  - [**校准磁力计**](#校准磁力计)
    - [校准磁力计单项](#校准磁力计单项)
    - [校准磁力计分组](#校准磁力计分组)
  - [**锁机**](#锁机)
    - [锁机单项](#锁机单项)
    - [锁机分组](#锁机分组)
  - [**解锁**](#解锁)
    - [解锁单项](#解锁单项)
    - [解锁分组](#解锁分组)
  - [**起飞**](#起飞)
    - [起飞单项](#起飞单项)
    - [起飞分组](#起飞分组)
  - [**降落**](#降落)
    - [降落单项](#降落单项)
    - [降落分组](#降落分组)
  - [**上升**](#上升)
    - [上升单项](#上升单项)
    - [上升分组](#上升分组)
  - [**下降**](#下降)
    - [下降单项](#下降单项)
    - [下降分组](#下降分组)
  - [**往左飞**](#往左飞)
    - [左飞单项](#左飞单项)
    - [左飞分组](#左飞分组)
  - [**右飞**](#右飞)
    - [右飞单项](#右飞单项)
    - [右飞分组](#右飞分组)
  - [**前飞**](#前飞)
    - [前飞单项](#前飞单项)
    - [前飞分组](#前飞分组)
  - [**后飞**](#后飞)
    - [后飞单项](#后飞单项)
    - [后飞分组](#后飞分组)
  - [**往左转头**](#往左转头)
    - [左转头单项](#左转头单项)
    - [左转头分组](#左转头分组)
  - [**右转头**](#右转头)
    - [右转头单项](#右转头单项)
    - [右转头分组](#右转头分组)
  - [**向左翻转**](#向左翻转)
    - [左翻转单项](#左翻转单项)
    - [左翻转分组](#左翻转分组)
  - [**右翻转**](#右翻转)
    - [右翻转单项](#右翻转单项)
    - [右翻转分组](#右翻转分组)
  - [**前翻转**](#前翻转)
    - [前翻转单项](#前翻转单项)
    - [前翻转分组](#前翻转分组)
  - [**后翻转**](#后翻转)
    - [后翻转单项](#后翻转单项)
    - [后翻转分组](#后翻转分组)
- [视觉功能](#视觉功能)
  - [人脸解锁](#人脸解锁)
  - [视觉跟踪](#视觉跟踪)
  - [姿态识别](#姿态识别)
- [OB 小车](#ob-小车)
  - [**前进**](#前进)
    - [前进单项](#前进单项)
    - [向前走分组](#向前走分组)
    - [向左转分组](#向左转分组)
  - [**右转弯**](#右转弯)
    - [向右转单项](#向右转单项)
    - [向右转分组](#向右转分组)
  - [**停止**](#停止)
    - [停止单项](#停止单项)
    - [停止分组](#停止分组)
  - [**清除动作**](#清除动作)
    - [清除动作单项](#清除动作单项)
    - [清除动作分组](#清除动作分组)
  - [**执行动作**](#执行动作)
    - [执行动作单项](#执行动作单项)
    - [执行动作分组](#执行动作分组)
  - [**采集环境**](#采集环境)
    - [采集环境单项](#采集环境单项)
    - [采集环境分组](#采集环境分组)
  - [**调头**](#调头)
    - [调头单项](#调头单项)
    - [调头分组](#调头分组)
- [机械臂](#机械臂)
  - [**复位**](#复位)
    - [复位单项](#复位单项)
    - [复位分组](#复位分组)
  - [**夹取**](#夹取)
    - [夹取单项](#夹取单项)
    - [夹取分组](#夹取分组)
  - [**松夹**](#松夹)
    - [松夹单项](#松夹单项)
    - [松夹分组](#松夹分组)
  - [**前移**](#前移)
    - [前移单项](#前移单项)
    - [前移分组](#前移分组)
  - [**后移**](#后移)
    - [后移单项](#后移单项)
    - [后移分组](#后移分组)
  - [**左移**](#左移)
    - [左移单项](#左移单项)
    - [左移分组](#左移分组)
  - [**右移**](#右移)
    - [右移单项](#右移单项)
    - [右移分组](#右移分组)
  - [**机械臂上升**](#机械臂上升)
    - [机械臂上升单项](#机械臂上升单项)
    - [机械臂上升分组](#机械臂上升分组)
  - [**机械臂下降**](#机械臂下降)
    - [机械臂下降单项](#机械臂下降单项)
    - [机械臂下降分组](#机械臂下降分组)
- [多机编队](#多机编队)
  - [**开红灯**](#开红灯)
    - [开红灯单项](#开红灯单项)
    - [开红灯分组](#开红灯分组)
  - [**关红灯**](#关红灯)
    - [关红灯单项](#关红灯单项)
    - [关红灯分组](#关红灯分组)
  - [**请求数据**](#请求数据)
    - [请求数据单项](#请求数据单项)
    - [请求数据分组](#请求数据分组)

# 无人机

## **校准陀螺仪**

### 校准陀螺仪单项

```js
{
  cmd: "cal_gyro",
  data: {
    value: ''
  }
}
```

### 校准陀螺仪分组

```js
{
  cmd: "cal_gyro",
  data: {
    deviceId: "",
    groupId: "",
    devType: '',
    value: ''
  }
}
```

## **校准磁力计**

### 校准磁力计单项

```js
{
  cmd: "cal_mag",
  data: {
    value: ''
  }
}
```

### 校准磁力计分组

```js
{
  cmd: "cal_mag",
  data: {
    deviceId: ""
    groupId: "",
    devType: '',
    value: ''
  }
}
```

## **锁机**

### 锁机单项

```js
{
  cmd: "lock",
  data: {
    value: ''
  }
}
```

### 锁机分组

```js
{
  cmd: "lock",
  data: {
    deviceId: "",
    groupId: "",
    devType: '',
    value: ''
  }
}
```

## **解锁**

### 解锁单项

```js
{
  cmd: "unlock",
  data: {
    value: ''
  }
}
```

### 解锁分组

```js
{
  cmd: "unlock",
  data: {
    deviceId: ""
    groupId: "",
    devType: '',
    value: ''
  }
}
```

## **起飞**

### 起飞单项

```js
{
  cmd: "takeoff",
  data: {
    value: ''
  }
}
```

### 起飞分组

```js
{
  cmd: "takeoff",
  data: {
    deviceId: "",
    groupId: "",
    devType: '',
    value: ''
  }
}

```

## **降落**

### 降落单项

```js
{
  cmd: "landing",
  data: {
    value: ''
  }
}

```

### 降落分组

```js
{
  cmd: "takeoff",
  data: {
    deviceId: "",
    groupId: "",
    devType: '',
    value: ''
  }
}

```

## **上升**

### 上升单项

```js
{
  cmd: "fly_rise",
  data: {
    value: 30
  }
}
```

### 上升分组

```js
{
  cmd: "fly_rise",
  data: {
    deviceId: "",
    groupId: "",
    devType: '',
    value: 30
  }
}

```

## **下降**

### 下降单项

```js
{
  cmd: "fly_down",
  data: {
    value: 30
  }
}
```

### 下降分组

```js
{
  cmd: "fly_down",
  data: {
    deviceId: "",
    groupId: "",
    devType: '',
    value: 30
  }
}

```

## **往左飞**

### 左飞单项

```js
{
  cmd: "fly_left",
  data: {
    value: 30
  }
}
```

### 左飞分组

```js
{
  cmd: "fly_left",
  data: {
    deviceId: "",
    groupId: "",
    devType: '',
    value: 30
  }
}

```

## **右飞**

### 右飞单项

```js
{
  cmd: "fly_right",
  data: {
    value: 30
  }
}
```

### 右飞分组

```js
{
  cmd: "fly_right",
  data: {
    deviceId: "",
    groupId: "",
    devType: '',
    value: 30
  }
}

```

## **前飞**

### 前飞单项

```js
{
  cmd: "fly_forward",
  data: {
    value: 30
  }
}
```

### 前飞分组

```js
{
  cmd: "fly_forward",
  data: {
    deviceId: "",
    groupId: "",
    devType: '',
    value: 30
  }
}

```

## **后飞**

### 后飞单项

```js
{
  cmd: "fly_back",
  data: {
    value: 30
  }
}
```

### 后飞分组

```js
{
  cmd: "fly_back",
  data: {
    deviceId: "",
    groupId: "",
    devType: '',
    value: 30
  }
}

```

## **往左转头**

### 左转头单项

```js
{
  cmd: "turn_left",
  data: {
    value: 30
  }
}
```

### 左转头分组

```js
{
  cmd: "turn_left",
  data: {
    deviceId: "",
    groupId: "",
    devType: '',
    value: 30
  }
}

```

## **右转头**

### 右转头单项

```js
{
  cmd: "turn_right",
  data: {
    value: 30
  }
}
```

### 右转头分组

```js
{
  cmd: "turn_right",
  data: {
    deviceId: "",
    groupId: "",
    devType: '',
    value: 30
  }
}

```

## **向左翻转**

### 左翻转单项

```js
{
  cmd: "flip_left",
  data: {
    value: ''
  }
}
```

### 左翻转分组

```js
{
  cmd: "flip_left",
  data: {
    deviceId: "",
    groupId: "",
    devType: '',
    value: ''
  }
}

```

## **右翻转**

### 右翻转单项

```js
{
  cmd: "flip_right",
  data: {
    value: ''
  }
}
```

### 右翻转分组

```js
{
  cmd: "flip_right",
  data: {
    deviceId: "",
    groupId: "",
    devType: '',
    value: ''
  }
}

```

## **前翻转**

### 前翻转单项

```js
{
  cmd: "flip_forward",
  data: {
    value: ''
  }
}
```

### 前翻转分组

```js
{
  cmd: "flip_forward",
  data: {
    deviceId: "",
    groupId: "",
    devType: '',
    value: ''
  }
}

```

## **后翻转**

### 后翻转单项

```js
{
  cmd: "flip_back",
  data: {
    value: ''
  }
}
```

### 后翻转分组

```js
{
  cmd: "flip_back",
  data: {
    deviceId: "",
    groupId: "",
    devType: '',
    value: ''
  }
}

```

# 视觉功能

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

# OB 小车

~~## **向左走**~~

~~### 向左走单项~~

```js
{
  cmd: "car_move_left",
  data: {
    value: 30
  }
}
```

~~### 向左走分组~~

```js
{
  cmd: "car_move_left",
  data: {
    deviceId: "",
    groupId: "",
    devType: '',
    value: 30
  }
}

```

~~## **向右走**~~

~~### 向右走单项~~

```js
{
  cmd: "car_move_right",
  data: {
    value: 30
  }
}
```

~~### 向右走分组~~

```js
{
  cmd: "car_move_right",
  data: {
    deviceId: "",
    groupId: "",
    devType: '',
    value: 30
  }
}

```

~~## **向前走**~~

~~### 向前~~

```js
{
  cmd: "car_move_forward",
  data: {
    value: 30
  }
}
```

~~### 向前走分组~~

```js
{
  cmd: "car_move_forward",
  data: {
    deviceId: "",
    groupId: "",
    devType: '',
    value: 30
  }
}

```

~~## **向后走**~~

~~### 向后走单项~~

```js
{
  cmd: "car_move_back",
  data: {
    value: 30
  }
}
```

~~### 向后走分组~~

```js
{
  cmd: "car_move_back",
  data: {
    deviceId: "",
    groupId: "",
    devType: '',
    value: 30
  }
}
```

## **前进**

### 前进单项

```js
{
  cmd: "car_move_forward",
  data: {
    value: 30
  }
}
```

### 向前走分组

```js
{
  cmd: "car_move_forward",
  data: {
    deviceId: "",
    groupId: "",
    devType: '',
    value: 30
  }
}



## **左转弯**

### 向左转单项

```js
{
  cmd: "car_turn_left",
  data: {
    value: 30
  }
}
```

### 向左转分组

```js
{
  cmd: "car_turn_left",
  data: {
    deviceId: "",
    groupId: "",
    devType: '',
    value: 30
  }
}
```

## **右转弯**

### 向右转单项

```js
{
  cmd: "car_turn_right",
  data: {
    value: 30
  }
}
```

### 向右转分组

```js
{
  cmd: "car_turn_right",
  data: {
    deviceId: "",
    groupId: "",
    devType: '',
    value: 30
  }
}
```

## **停止**

### 停止单项

```js
{
  cmd: "car_stop",
  data: {
    value: ''
  }
}
```

### 停止分组

```js
{
  cmd: "car_stop",
  data: {
    deviceId: "",
    groupId: "",
    devType: '',
    value: ''
  }
}
```

## **清除动作**

### 清除动作单项

```js
{
  cmd: "car_reset_action",
  data: {
    value: ''
  }
}
```

### 清除动作分组

```js
{
  cmd: "car_reset_action",
  data: {
    deviceId: "",
    groupId: "",
    devType: '',
    value: ''
  }
}
```

## **执行动作**

### 执行动作单项

```js
{
  cmd: "car_exec_action",
  data: {
    value: ''
  }
}
```

### 执行动作分组

```js
{
  cmd: "car_exec_action",
  data: {
    deviceId: "",
    groupId: "",
    devType: '',
    value: ''
  }
}
```

## **采集环境**

### 采集环境单项

```js
{
  cmd: "car_collect_env",
  data: {
    value: ''
  }
}
```

### 采集环境分组

```js
{
  cmd: "car_collect_env",
  data: {
    deviceId: "",
    groupId: "",
    devType: '',
    value: ''
  }
}
```

## **调头**

### 调头单项

```js
{
  cmd: "car_turn_around",
  data: {
    value: ''
  }
}
```

### 调头分组

```js
{
  cmd: "car_turn_around",
  data: {
    deviceId: "",
    groupId: "",
    devType: '',
    value: ''
  }
}
```

# 机械臂

## **复位**

### 复位单项

```js
{
  cmd: "arm_reset",
  data: {
    value: ''
  }
}
```

### 复位分组

```js
{
  cmd: "arm_reset",
  data: {
    deviceId: "",
    groupId: "",
    devType: '',
    value: ''
  }
}
```

## **夹取**

### 夹取单项

```js
{
  cmd: "arm_clamp",
  data: {
    value: ''
  }
}
```

### 夹取分组

```js
{
  cmd: "arm_clamp",
  data: {
    deviceId: "",
    groupId: "",
    devType: '',
    value: ''
  }
}
```

## **松夹**

### 松夹单项

```js
{
  cmd: "arm_unclamp",
  data: {
    value: ''
  }
}
```

### 松夹分组

```js
{
  cmd: "arm_unclamp",
  data: {
    deviceId: "",
    groupId: "",
    devType: '',
    value: ''
  }
}
```

## **前移**

### 前移单项

```js
{
  cmd: "arm_move_forward",
  data: {
    value: 30
  }
}
```

### 前移分组

```js
{
  cmd: "arm_move_forward",
  data: {
    deviceId: "",
    groupId: "",
    devType: '',
    value: 30
  }
}
```

## **后移**

### 后移单项

```js
{
  cmd: "arm_move_back",
  data: {
    value: 30
  }
}
```

### 后移分组

```js
{
  cmd: "arm_move_back",
  data: {
    deviceId: "",
    groupId: "",
    devType: '',
    value: 30
  }
}
```

## **左移**

### 左移单项

```js
{
  cmd: "arm_move_left",
  data: {
    value: 30
  }
}
```

### 左移分组

```js
{
  cmd: "arm_move_left",
  data: {
    deviceId: "",
    groupId: "",
    devType: '',
    value: 30
  }
}
```

## **右移**

### 右移单项

```js
{
  cmd: "arm_move_right",
  data: {
    value: 30
  }
}
```

### 右移分组

```js
{
  cmd: "arm_move_right",
  data: {
    deviceId: "",
    groupId: "",
    devType: '',
    value: 30
  }
}
```

## **机械臂上升**

### 机械臂上升单项

```js
{
  cmd: "arm_rise",
  data: {
    value: 30
  }
}
```

### 机械臂上升分组

```js
{
  cmd: "arm_rise",
  data: {
    deviceId: "",
    groupId: "",
    devType: '',
    value: 30
  }
}
```

## **机械臂下降**

### 机械臂下降单项

```js
{
  cmd: "arm_decline",
  data: {
    value: 30
  }
}
```

### 机械臂下降分组

```js
{
  cmd: "arm_decline",
  data: {
    deviceId: "",
    groupId: "",
    devType: '',
    value: 30
  }
}
```

# 多机编队

> 红灯开关指令： `ms_red_light_on`,  `ms_red_light_off`
>
> 绿灯开关指令： `ms_green_light_on`,  `ms_green_light_off`
>
> 蓝灯开关指令： `ms_blue_light_on`,  `ms_blue_light_off`

**<h4><span style="color:red;">编组区间参数说明:</span></h4>**

`deviceId`: `"deviceId,deviceId..."`

## **开红灯**

### 开红灯单项

```js
{
  cmd: "ms_red_light_on",
  data: {
    value: 1
  }
}
```

### 开红灯分组

```js
{
  cmd: "ms_red_light_on",
  data: {
    deviceId: "",
    groupId: "",
    devType: '',
    value: 1
  }
}
```

## **关红灯**

### 关红灯单项

```js
{
  cmd: "ms_red_light_off",
  data: {
    value: 0
  }
}
```

### 关红灯分组

```js
{
  cmd: "ms_red_light_off",
  data: {
    deviceId: "",
    groupId: "",
    devType: '',
    value: 0
  }
}
```

## **请求数据**

### 请求数据单项

```js
{
  cmd: "ms_req_data",
  data: {
    devType: '',
    value: 0
  }
}
```

### 请求数据分组

```js
{
  cmd: "ms_req_data",
  data: {
    deviceId: "",
    groupId: "",
    devType: '',
    value: 0
  }
}
```
