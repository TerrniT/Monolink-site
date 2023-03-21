import axios from "axios"

export default async function handler(req: any, res: any) {
  const { email } = req.body

  console.log(email)

  if (!email) {
    return res.status(400).json({ error: "Email is required" })
  }

  try {
    const API_KEY = process.env.NEWSLETTER_API
    console.log(API_KEY)

    const response = await axios.post('https://api.buttondown.email/v1/subscribers', {
      email: email,
      headers: {
        Authorization: `Token ${API_KEY}`,
        "Content-Type": "application/json",
      },
    })
    // const response = await fetch('https://api.buttondown.email/v1/subscribers', {
    //   body: JSON.stringify({ email }),
    //   headers: {
    //     Authorization: `Token ${API_KEY}`,
    //     "Content-Type": "application/json",
    //   },
    //   method: "POST",
    // })

    if (response.status >= 400) {
      return res.status(400).json({
        error: `There was an error subscribing to the newsletter.`,
      })
    }
    return res.status(201).json({ error: "" })
  } catch (error: any) {
    return res.status(500).json({ error: error.message || error.toString() })
  }
}
