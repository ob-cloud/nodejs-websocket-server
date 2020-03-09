
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
