function howManySeconds(hours) {
    // Write a function that converts hours into seconds.
    let minutes = hours * 60
    let seconds = minutes * 60
    return seconds
}

// Tests run--

// Test.assertEquals(howManySeconds(2), 7200)
// Test.assertEquals(howManySeconds(10), 36000)
// Test.assertEquals(howManySeconds(24), 86400)
// Test.assertEquals(howManySeconds(36), 129600)

// Test results--

// Test Passed: Value == 7200
// Test Passed: Value == 36000
// Test Passed: Value == 86400
// Test Passed: Value == 129600