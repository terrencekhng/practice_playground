function fibonacci_dp(count) {
  let dp = [0, 1];
  let currentIndex = 0;

  for (let i = 0; i < count; ++i) {
    currentIndex = i % 2;
    if (i > 1) {
      dp[currentIndex] = dp[0] + dp[1];
    }
    console.log(dp[currentIndex]);
  }
}

fibonacci_dp(10)
