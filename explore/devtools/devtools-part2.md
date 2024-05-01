1. num1 and num2 are both strings, leading to result being a concatenation of num1 and num2
2. I would fix it by converting the strings to numbers (let result = Number(num1) + Number(num2))