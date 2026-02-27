// Vercel Serverless Function to serve checkout mock
export default function handler(req, res) {
    res.status(200).json({ message: "Order processed successfully (Mock Vercel Payment)", orderId: Math.floor(Math.random() * 1000) });
}
