import {sum} from "../sum"

test("Sum function should calculate the sum of two numbers", () => {
    const result = sum(10,5)

    // This line is known as Assertion
    expect(result).toBe(15)
})

// Now it's time to Unit Testing
