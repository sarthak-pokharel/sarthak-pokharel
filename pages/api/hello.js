// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const Delay = (t)=> new Promise(res=>setTimeout(res, t));

export default async function handler(req, res) {
  // await Delay(1000);
  res.end("Hi")
}
