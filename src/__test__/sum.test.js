import sum from "../components/sum";

test("sum should addition of two numbers", () => {
    const result = sum(3, 2);

    //Asserstion
    expect(result).toBe(5);
});