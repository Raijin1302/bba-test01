console.log("\n━━━━━━━━━━━━━━━ 🎮 BÀI 1 🎮 ━━━━━━━━━━━━━━━\n")

// 1. Khai báo mảng các object nhân vật
const characters = [
  { name: "Mario", level: 10, health: 300 },
  { name: "Luigi", level: 8, health: 350 },
  { name: "Bowser", level: 50, health: 1000 },
  { name: "Peach", level: 12, health: 400 },
  { name: "Toad", level: 5, health: 200 },
  { name: "Yoshi", level: 15, health: 320 },
  { name: "Rosalina", level: 45, health: 500 },
  { name: "Bob-omb", level: 3, health: 150 },
  { name: "Wario", level: 25, health: 1500 },
  { name: "Donkey Kong", level: 30, health: 600 },
  { name: "Waluigi", level: 22, health: 380 },
  { name: "Bowser Jr.", level: 20, health: 350 },
  { name: "Pauline", level: 10, health: 250 },
  { name: "Hammer Bro.", level: 14, health: 280 },
  { name: "Monty Mole", level: 6, health: 180 },
  { name: "Dry Bones", level: 18, health: 220 },
  { name: "Diddy Kong", level: 12, health: 290 },
  { name: "Daisy", level: 14, health: 360 },
]

const createCharacters = (characters) => {
  // 2. Sử dụng hàm map để tạo ra mảng mới: charactersPowerUp
  // - name: viết hoa toàn bộ (UPPERCASE)
  // - level: x2
  // - health: x3

  const charactersPowerUp = characters.map((character) => {
    return {
      name: character.name.toUpperCase(),
      level: character.level * 2,
      health: character.health * 3,
    }
  })

  // 3. Sử dụng hàm filter để lọc ra các phần tử có health > 1000 : possibleWinners

  const possibleWinners = charactersPowerUp.filter(
    (character) => character.health > 1000,
  )
  // 4 . Xài array method sort() xét từ cao đến thấp dựa vào health

  const rankedWinners = possibleWinners.sort((a, b) => b.health - a.health)

  return rankedWinners
}

console.log(createCharacters(characters))

// =============================================================
// =============================================================
console.log("\n━━━━━━━━━━━━━━━ 🎮 BÀI 2 🎮 ━━━━━━━━━━━━━━━\n")
// BÀI 2:

const players = [
  { name: "Mario", score: 1000 },
  { name: "Luigi", score: 900 },
  { name: "Peach", score: 850 },
  { name: "Yoshi", score: 800 },
  { name: "Phong", score: 500 },
]

const printLeaderBoard = (players) => {
  // 1. Tạo bản sao của mảng và sắp xếp score giảm dần (từ cao đến thấp)
  const sortPlayers = players.slice().sort((a, b) => b.score - a.score)

  const formatPlayerboard = sortPlayers.map((player, index) => {
    let rank = index + 1
    let medal = "   "

    if (index === 0) medal = "🥇 "
    if (index === 1) medal = "🥈 "
    if (index === 2) medal = "🥉 "

    // Chuyển đổi số 1000 thành chuỗi có dấu phẩy "1,000"
    let formatScore = player.score.toLocaleString("en-US")

    return `${medal}${rank}. ${player.name} - ${formatScore} pts`
  })

  return formatPlayerboard.join("\n")
}

console.log(printLeaderBoard(players))
