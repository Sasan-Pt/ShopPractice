const pictures = [
  {
    pic: "/carousel/1.jpg",
    oldPrice: 150,
    price: 100,
    name: "Metal Gear Solid",
  },
  { pic: "/carousel/2.webp", oldPrice: 250, price: 200, name: "cyberpunk" },
  { pic: "/carousel/wtf.jpg", oldPrice: 350, price: 300, name: "squad" },
  { pic: "/carousel/2.webp", oldPrice: 450, price: 400, name: "something" },
  {
    pic: "/carousel/wtf.jpg",
    oldPrice: 550,
    price: 500,
    name: "Metal Gear Solid",
  },
  { pic: "/carousel/2.webp", oldPrice: 650, price: 600, name: "cyberpunk" },
  { pic: "/carousel/wtf.jpg", oldPrice: 750, price: 700, name: "squad" },
  { pic: "/carousel/2.webp", oldPrice: 850, price: 800, name: "something" },
  {
    pic: "/carousel/wtf.jpg",
    oldPrice: 950,
    price: 900,
    name: "Metal Gear Solid",
  },
  { pic: "/carousel/2.webp", oldPrice: 1050, price: 1000, name: "cyberpunk" },
  { pic: "/carousel/wtf.jpg", oldPrice: 1150, price: 1100, name: "squad" },
  { pic: "/carousel/2.webp", oldPrice: 1250, price: 1200, name: "something" },
  {
    pic: "/carousel/1.jpg",
    oldPrice: 1350,
    price: 1300,
    name: "Metal Gear Solid",
  },
  { pic: "/carousel/2.webp", oldPrice: 1450, price: 1400, name: "cyberpunk" },
  { pic: "/carousel/wtf.jpg", oldPrice: 1550, price: 1500, name: "squad" },
  { pic: "/carousel/2.webp", oldPrice: 1650, price: 1600, name: "something" },
  {
    pic: "/carousel/wtf.jpg",
    oldPrice: 1750,
    price: 1700,
    name: "Metal Gear Solid",
  },
  { pic: "/carousel/2.webp", oldPrice: 1850, price: 1800, name: "cyberpunk" },
  { pic: "/carousel/wtf.jpg", oldPrice: 1950, price: 1900, name: "squad" },
  { pic: "/carousel/2.webp", oldPrice: 2050, price: 2000, name: "something" },
  {
    pic: "/carousel/wtf.jpg",
    oldPrice: 2150,
    price: 2100,
    name: "Metal Gear Solid",
  },
  { pic: "/carousel/2.webp", oldPrice: 2250, price: 2200, name: "cyberpunk" },
  { pic: "/carousel/wtf.jpg", oldPrice: 2350, price: 2300, name: "squad" },
  {
    pic: "/carousel/1.jpg",
    oldPrice: 150,
    price: 100,
    name: "Metal Gear Solid",
  },
  { pic: "/carousel/2.webp", oldPrice: 250, price: 200, name: "cyberpunk" },
  { pic: "/carousel/wtf.jpg", oldPrice: 350, price: 300, name: "squad" },
  { pic: "/carousel/2.webp", oldPrice: 450, price: 400, name: "something" },
  {
    pic: "/carousel/wtf.jpg",
    oldPrice: 550,
    price: 500,
    name: "Metal Gear Solid",
  },
  { pic: "/carousel/2.webp", oldPrice: 650, price: 600, name: "cyberpunk" },
  { pic: "/carousel/wtf.jpg", oldPrice: 750, price: 700, name: "squad" },
  { pic: "/carousel/2.webp", oldPrice: 850, price: 800, name: "something" },
  {
    pic: "/carousel/wtf.jpg",
    oldPrice: 950,
    price: 900,
    name: "Metal Gear Solid",
  },
  { pic: "/carousel/2.webp", oldPrice: 1050, price: 1000, name: "cyberpunk" },
  { pic: "/carousel/wtf.jpg", oldPrice: 1150, price: 1100, name: "squad" },
  { pic: "/carousel/2.webp", oldPrice: 1250, price: 1200, name: "something" },
  {
    pic: "/carousel/1.jpg",
    oldPrice: 1350,
    price: 1300,
    name: "Metal Gear Solid",
  },
  { pic: "/carousel/2.webp", oldPrice: 1450, price: 1400, name: "cyberpunk" },
  { pic: "/carousel/wtf.jpg", oldPrice: 1550, price: 1500, name: "squad" },
  { pic: "/carousel/2.webp", oldPrice: 1650, price: 1600, name: "something" },
  {
    pic: "/carousel/wtf.jpg",
    oldPrice: 1750,
    price: 1700,
    name: "Metal Gear Solid",
  },
  { pic: "/carousel/2.webp", oldPrice: 1850, price: 1800, name: "cyberpunk" },
  { pic: "/carousel/wtf.jpg", oldPrice: 1950, price: 1900, name: "squad" },
  { pic: "/carousel/2.webp", oldPrice: 2050, price: 2000, name: "something" },
  {
    pic: "/carousel/wtf.jpg",
    oldPrice: 2150,
    price: 2100,
    name: "Metal Gear Solid",
  },
  { pic: "/carousel/2.webp", oldPrice: 2250, price: 2200, name: "cyberpunk" },
  { pic: "/carousel/wtf.jpg", oldPrice: 2350, price: 2300, name: "squad" },
  {
    pic: "/carousel/1.jpg",
    oldPrice: 150,
    price: 100,
    name: "Metal Gear Solid",
  },
  { pic: "/carousel/2.webp", oldPrice: 250, price: 200, name: "cyberpunk" },
  { pic: "/carousel/wtf.jpg", oldPrice: 350, price: 300, name: "squad" },
  { pic: "/carousel/2.webp", oldPrice: 450, price: 400, name: "something" },
  {
    pic: "/carousel/wtf.jpg",
    oldPrice: 550,
    price: 500,
    name: "Metal Gear Solid",
  },
  { pic: "/carousel/2.webp", oldPrice: 650, price: 600, name: "cyberpunk" },
  { pic: "/carousel/wtf.jpg", oldPrice: 750, price: 700, name: "squad" },
  { pic: "/carousel/2.webp", oldPrice: 850, price: 800, name: "something" },
  {
    pic: "/carousel/wtf.jpg",
    oldPrice: 950,
    price: 900,
    name: "Metal Gear Solid",
  },
  { pic: "/carousel/2.webp", oldPrice: 1050, price: 1000, name: "cyberpunk" },
  { pic: "/carousel/wtf.jpg", oldPrice: 1150, price: 1100, name: "squad" },
  { pic: "/carousel/2.webp", oldPrice: 1250, price: 1200, name: "something" },
  {
    pic: "/carousel/1.jpg",
    oldPrice: 1350,
    price: 1300,
    name: "Metal Gear Solid",
  },
  { pic: "/carousel/2.webp", oldPrice: 1450, price: 1400, name: "cyberpunk" },
  { pic: "/carousel/wtf.jpg", oldPrice: 1550, price: 1500, name: "squad" },
  { pic: "/carousel/2.webp", oldPrice: 1650, price: 1600, name: "something" },
  {
    pic: "/carousel/wtf.jpg",
    oldPrice: 1750,
    price: 1700,
    name: "Metal Gear Solid",
  },
  { pic: "/carousel/2.webp", oldPrice: 1850, price: 1800, name: "cyberpunk" },
  { pic: "/carousel/wtf.jpg", oldPrice: 1950, price: 1900, name: "squad" },
  { pic: "/carousel/2.webp", oldPrice: 2050, price: 2000, name: "something" },
  {
    pic: "/carousel/wtf.jpg",
    oldPrice: 2150,
    price: 2100,
    name: "Metal Gear Solid",
  },
  { pic: "/carousel/2.webp", oldPrice: 2250, price: 2200, name: "cyberpunk" },
  { pic: "/carousel/wtf.jpg", oldPrice: 2350, price: 2300, name: "squad" },
  {
    pic: "/carousel/1.jpg",
    oldPrice: 150,
    price: 100,
    name: "Metal Gear Solid",
  },
  { pic: "/carousel/2.webp", oldPrice: 250, price: 200, name: "cyberpunk" },
  { pic: "/carousel/wtf.jpg", oldPrice: 350, price: 300, name: "squad" },
  { pic: "/carousel/2.webp", oldPrice: 450, price: 400, name: "something" },
  {
    pic: "/carousel/wtf.jpg",
    oldPrice: 550,
    price: 500,
    name: "Metal Gear Solid",
  },
  { pic: "/carousel/2.webp", oldPrice: 650, price: 600, name: "cyberpunk" },
  { pic: "/carousel/wtf.jpg", oldPrice: 750, price: 700, name: "squad" },
  { pic: "/carousel/2.webp", oldPrice: 850, price: 800, name: "something" },
  {
    pic: "/carousel/wtf.jpg",
    oldPrice: 950,
    price: 900,
    name: "Metal Gear Solid",
  },
  { pic: "/carousel/2.webp", oldPrice: 1050, price: 1000, name: "cyberpunk" },
  { pic: "/carousel/wtf.jpg", oldPrice: 1150, price: 1100, name: "squad" },
  { pic: "/carousel/2.webp", oldPrice: 1250, price: 1200, name: "something" },
  {
    pic: "/carousel/1.jpg",
    oldPrice: 1350,
    price: 1300,
    name: "Metal Gear Solid",
  },
  { pic: "/carousel/2.webp", oldPrice: 1450, price: 1400, name: "cyberpunk" },
  { pic: "/carousel/wtf.jpg", oldPrice: 1550, price: 1500, name: "squad" },
  { pic: "/carousel/2.webp", oldPrice: 1650, price: 1600, name: "something" },
  {
    pic: "/carousel/wtf.jpg",
    oldPrice: 1750,
    price: 1700,
    name: "Metal Gear Solid",
  },
  { pic: "/carousel/2.webp", oldPrice: 1850, price: 1800, name: "cyberpunk" },
  { pic: "/carousel/wtf.jpg", oldPrice: 1950, price: 1900, name: "squad" },
  { pic: "/carousel/2.webp", oldPrice: 2050, price: 2000, name: "something" },
  {
    pic: "/carousel/wtf.jpg",
    oldPrice: 2150,
    price: 2100,
    name: "Metal Gear Solid",
  },
  { pic: "/carousel/2.webp", oldPrice: 2250, price: 2200, name: "cyberpunk" },
  { pic: "/carousel/wtf.jpg", oldPrice: 2350, price: 2300, name: "squad" },
];

export default function handler(req: any, res: any) {
  const numberPageToString = Math.ceil(pictures.length / 12 - 1);
  const stringNumberPage = numberPageToString.toString();
  console.log(typeof stringNumberPage);
  const {
    query: { page },
  } = req;
  if (typeof page === "string") {
    console.log("getting page number" + +page);
    const returnTodos = [];
    const nums = parseInt(page) * 12;
    for (let i = nums; i < nums + 12; i += 1) {
      const returnTodo = {
        message: pictures[i],
      };
      returnTodos.push(returnTodo);
    }
    res
      .status(200)
      .json({ todos: returnTodos, hasMore: page !== stringNumberPage });
  } else {
    res.status(500).json(new Error("id is not of correct type "));
  }
  /*res.status(200).json({pictures})*/
}
