function findPairsDivisibleBy17() {
  let count = 0

  // Vòng lặp i chạy từ số 1 đến 100
  for (let i = 0; i < 100; i++) {
    // Vòng lặp j bắt đầu từ i đến 100 ,bắt đầu từ i để tránh lặp
    for (let j = i; j < 100; j++) {
      let sum = i + j

      // Kiểm tra tổng có chia hết cho 17
      if (sum % 17 === 0) {
        console.log(`(${i}, ${j}) = ${sum}`)
        count++
      }
    }
  }
  // In ra tổng số lượng cặp tìm được ở cuối cùng
  console.log(`\nTổng cộng: ${count} cặp`)
}

findPairsDivisibleBy17()
