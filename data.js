import randomColor from 'random-color';

export const cards = [
  {
    id: "324",
    name: "Joe Black",
    number: "0000 1111 2222 3333",
    date: "01/01",
    color: randomColor().hexString(),
    balance: 45678
  },
  {
    id: "423",
    name: "John Doe",
    number: "0000 1111 2222 4444",
    date: "02/02",
    color: randomColor(0.99, 0.99).hexString(),
    balance: 100450
  },
  {
    id: "234",
    name: "Jane Doe",
    number: "0000 1111 2222 5555",
    date: "03/03",
    color: randomColor(0.99, 0.99).hexString(),
    balance: 2456320
  },
  {
    id: "467",
    name: "Inger Mark",
    number: "0000 4567 4040 9999",
    date: "05/21",
    color: randomColor(0.99, 0.99).hexString(),
    balance: 2456320
  },
  {
    id: "333",
    name: "Inger Natalya",
    number: "0000 0909 4040 9999",
    date: "05/21",
    color: randomColor(0.2, 0.99).hexString(),
    balance: 34563459
  },
]