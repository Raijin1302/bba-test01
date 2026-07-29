function createCharacters() {
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
    { name: "Wario", level: 25, health: 450 },
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

  // 2. Sử dụng hàm map để tạo ra mảng mới: charactersPowerUp
  // - name: viết hoa toàn bộ (UPPERCASE)
  // - level: x2
  // - health: x3

  function charactersPowerUp(chars) {
    return chars.map(function (char) {
      return {
        name: char.name.toUpperCase(),
        level: char.level * 2,
        health: char.health * 3,
      }
    })
  }

  // 3. Sử dụng hàm filter để lọc ra các phần tử có health > 1000 : possibleWinners
  function possibleWinners(chars) {
    return chars.filter(function (char) {
      return char.health > 1000
    })
  }

  // 4.Gọi lần lượt các hàm con và trả về kết quả cuối cùng

  const poweredUpList = charactersPowerUp(characters)

  const winnersTierList = possibleWinners(poweredUpList)

  return winnersTierList
}

console.log(createCharacters())

// =============================================================
// =============================================================
// BÀI 2:

// 1. Khai báo mảng các object nhân vật

const players = [
  { name: "Mario", score: 1000 },
  { name: "Luigi", score: 900 },
  { name: "Peach", score: 850 },
  { name: "Yoshi", score: 800 },
  { name: "Phong", score: 500 },
]

function printLeaderBoard(players) {
  //Hai vòng lặp selection sort
  for (let i = 0; i < players.length - 1; i++) {
    for (let j = i + 1; j < players.length; j++) {
      if (players[i].score < players[j].score) {
        // Nếu người đứng trước (i) có điểm NHỎ HƠN người đứng sau (j)
        // Swap vị trí hai người cho nhau (Dùng biến tạm temp)
        let temp = players[i]
        players[i] = players[j]
        players[j] = temp
      }
    }
  }

  const formatPlayerboard = players.map(function (player, index) {
    //index bắt đầu bằng 0
    let rank = index + 1
    let medal = "   "

    if (index === 0) {
      medal = "🥇 "
    } else if (index === 1) {
      medal = "🥈 "
    } else if (index === 2) {
      medal = "🥉 "
    } else {
      medal = "   "
    }

    return `${medal}${rank}. ${player.name} - ${player.score} pts`
  })

  return formatPlayerboard.join("\n")
}

console.log(printLeaderBoard(players))
