const express = require("express");
const app = express();
let cors = require("cors");

app.use(express.json());
app.use(cors());

const port = 5050;

app.post("/calc", async (req, res) => {
  console.log(req.body);
  const { first, second, operator } = req.body;
  const result = calculate(first, second, operator);
  const resultColor = oddOrEven(result);

  res.send({ num: result, color: resultColor });

  console.log(result);
  console.log(resultColor);
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

const calculate = (first, second, operator) => {
  const firstNum = parseInt(first);
  const secondNum = parseInt(second);

  if (operator === "+") {
    return firstNum + secondNum;
  } else if (operator === "-") {
    return firstNum - secondNum;
  } else if (operator === "*") {
    return firstNum * secondNum;
  } else if (operator === "/") {
    return firstNum / secondNum;
  }

  //    else if (operator === "^") {
  //     return Number(firstNum) ** Number(secondNum);
  //   }
};

const oddOrEven = (result) => {
  if (result % 2 === 0) {
    return "green";
  }
  return "red";
};
