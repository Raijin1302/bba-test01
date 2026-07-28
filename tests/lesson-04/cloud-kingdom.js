// 1. Khai báo biến
let powerUp = "mushroom"
let effect = ""

// 2. Câu điều kiện if...else xác định hiệu ứng
if (powerUp == "mushroom") {
  effect = "Mario becomes Super!"
} else if (powerUp === "flower") {
  effect = "Mario can shoot fireballs!"
} else if (powerUp === "star") {
  effect = "Mario is invincible!"
} else if (powerUp === "none") {
  effect = "Mario is normal"
} else {
  effect = "Unknown power-up"
}

// 3. In kết quả ra console
console.log(effect)
