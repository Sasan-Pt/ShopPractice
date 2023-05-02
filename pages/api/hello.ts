const pictures = [
  { pic: "/carousel/1.jpg", price: 200 },
  { pic: "/carousel/2.webp", price: 300 },
  { pic: "/carousel/wtf.jpg", price: 400 },
  { pic: "/carousel/2.webp", price: 500 },
  { pic: "/carousel/wtf.jpg", price: 600 },
];
/*const pictures={
  pic1:"/carousel/1.jpg",
  pic2:"/carousel/1.jpg",
  pic3:"/carousel/wtf.jpg",
  pic4:"/carousel/wtf.jpg"
}*/

export default function handler(req: any, res: any) {
  res.status(200).json({ pictures });
}
