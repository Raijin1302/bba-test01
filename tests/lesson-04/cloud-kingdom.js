// 1. Khai báo biến
let playerName = "Mario"
let currentLives = 3
// 2. Khai báo hằng số lưu coins theo level
const coinsLevel1 = 25
const coinsLevel2 = 30
const coinsLevel3 = 45

// 3. Tính tổng coin của 3 level

const totalCoins = coinsLevel1 + coinsLevel2 + coinsLevel3

// 4. Tính giá trị trung bình (tổng / 3)

const averageCoins = totalCoins / 3

// 5. Tính số coin dư khi chia tổng số coin cho 3

const remainderCoins = totalCoins % 3

// In kết quả ra console

console.log("Tổng coin:", totalCoins)
console.log("Coin trung bình:", Math.round(averageCoins))
console.log("Số coin dư:", remainderCoins)
