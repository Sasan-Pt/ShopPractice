const pictures = [
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
  res.status(200).json({ pictures });
}
