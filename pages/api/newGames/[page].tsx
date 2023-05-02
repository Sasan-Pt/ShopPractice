const pictures = [
  { pic: "/carousel/1.jpg", price: 100, name: "Metal Gear Solid" },
  { pic: "/carousel/2.webp", price: 200, name: "cyberpunk" },
  { pic: "/carousel/wtf.jpg", price: 300, name: "squad" },
  { pic: "/carousel/2.webp", price: 400, name: "something" },
  { pic: "/carousel/wtf.jpg", price: 500, name: "Metal Gear Solid" },
  { pic: "/carousel/2.webp", price: 600, name: "cyberpunk" },
  { pic: "/carousel/wtf.jpg", price: 700, name: "squad" },
  { pic: "/carousel/2.webp", price: 800, name: "something" },
  { pic: "/carousel/wtf.jpg", price: 900, name: "Metal Gear Solid" },
  { pic: "/carousel/2.webp", price: 1000, name: "cyberpunk" },
  { pic: "/carousel/wtf.jpg", price: 1100, name: "squad" },
  { pic: "/carousel/2.webp", price: 1200, name: "something" },
  { pic: "/carousel/1.jpg", price: 1300, name: "Metal Gear Solid" },
  { pic: "/carousel/2.webp", price: 1400, name: "cyberpunk" },
  { pic: "/carousel/wtf.jpg", price: 1500, name: "squad" },
  { pic: "/carousel/2.webp", price: 1600, name: "something" },
  { pic: "/carousel/wtf.jpg", price: 1700, name: "Metal Gear Solid" },
  { pic: "/carousel/2.webp", price: 1800, name: "cyberpunk" },
  { pic: "/carousel/wtf.jpg", price: 1900, name: "squad" },
  { pic: "/carousel/2.webp", price: 2000, name: "something" },
  { pic: "/carousel/wtf.jpg", price: 2100, name: "Metal Gear Solid" },
  { pic: "/carousel/2.webp", price: 2200, name: "cyberpunk" },
  { pic: "/carousel/wtf.jpg", price: 2300, name: "squad" },
  { pic: "/carousel/2.webp", price: 2400, name: "something" },
  { pic: "/carousel/1.jpg", price: 2500, name: "Metal Gear Solid" },
  { pic: "/carousel/2.webp", price: 2600, name: "cyberpunk" },
  { pic: "/carousel/wtf.jpg", price: 2700, name: "squad" },
  { pic: "/carousel/2.webp", price: 2800, name: "something" },
  { pic: "/carousel/wtf.jpg", price: 2900, name: "Metal Gear Solid" },
  { pic: "/carousel/2.webp", price: 3000, name: "cyberpunk" },
  { pic: "/carousel/wtf.jpg", price: 400, name: "squad" },
  { pic: "/carousel/2.webp", price: 500, name: "something" },
  { pic: "/carousel/wtf.jpg", price: 600, name: "Metal Gear Solid" },
  { pic: "/carousel/2.webp", price: 300, name: "cyberpunk" },
  { pic: "/carousel/wtf.jpg", price: 400, name: "squad" },
  { pic: "/carousel/2.webp", price: 500, name: "something" },
  { pic: "/carousel/1.jpg", price: 200, name: "Metal Gear Solid" },
  { pic: "/carousel/2.webp", price: 300, name: "cyberpunk" },
  { pic: "/carousel/wtf.jpg", price: 400, name: "squad" },
  { pic: "/carousel/2.webp", price: 500, name: "something" },
  { pic: "/carousel/wtf.jpg", price: 600, name: "Metal Gear Solid" },
  { pic: "/carousel/2.webp", price: 300, name: "cyberpunk" },
  { pic: "/carousel/wtf.jpg", price: 400, name: "squad" },
  { pic: "/carousel/2.webp", price: 500, name: "something" },
  { pic: "/carousel/wtf.jpg", price: 600, name: "Metal Gear Solid" },
  { pic: "/carousel/2.webp", price: 300, name: "cyberpunk" },
  { pic: "/carousel/wtf.jpg", price: 400, name: "squad" },
  { pic: "/carousel/2.webp", price: 500, name: "something" },
  { pic: "/carousel/1.jpg", price: 200, name: "Metal Gear Solid" },
  { pic: "/carousel/2.webp", price: 300, name: "cyberpunk" },
  { pic: "/carousel/wtf.jpg", price: 400, name: "squad" },
  { pic: "/carousel/2.webp", price: 500, name: "something" },
  { pic: "/carousel/wtf.jpg", price: 600, name: "Metal Gear Solid" },
  { pic: "/carousel/2.webp", price: 300, name: "cyberpunk" },
  { pic: "/carousel/wtf.jpg", price: 400, name: "squad" },
  { pic: "/carousel/2.webp", price: 500, name: "something" },
  { pic: "/carousel/wtf.jpg", price: 600, name: "Metal Gear Solid" },
  { pic: "/carousel/2.webp", price: 300, name: "cyberpunk" },
  { pic: "/carousel/wtf.jpg", price: 400, name: "squad" },
  { pic: "/carousel/2.webp", price: 500, name: "something" },
  { pic: "/carousel/1.jpg", price: 200, name: "Metal Gear Solid" },
  { pic: "/carousel/2.webp", price: 300, name: "cyberpunk" },
  { pic: "/carousel/wtf.jpg", price: 400, name: "squad" },
  { pic: "/carousel/2.webp", price: 500, name: "something" },
  { pic: "/carousel/wtf.jpg", price: 600, name: "Metal Gear Solid" },
  { pic: "/carousel/2.webp", price: 300, name: "cyberpunk" },
  { pic: "/carousel/wtf.jpg", price: 400, name: "squad" },
  { pic: "/carousel/2.webp", price: 500, name: "something" },
  { pic: "/carousel/wtf.jpg", price: 600, name: "Metal Gear Solid" },
  { pic: "/carousel/2.webp", price: 300, name: "cyberpunk" },
  { pic: "/carousel/wtf.jpg", price: 400, name: "squad" },
  { pic: "/carousel/2.webp", price: 500, name: "something" },
];

export default function handler(req: any, res: any) {
  const numberPageToString = Math.ceil(pictures.length / 12 - 1);
  const stringNumberPage = numberPageToString.toString();
  const {
    query: { page },
  } = req;
  if (typeof page === "string") {
    console.log("getting page number" + +page);
    const returnTodos = [];
    const nums = parseInt(page) * 12;
    for (let i = nums; i < nums + 12; i += 1) {
      const returnTodo = {
        id: i,
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
