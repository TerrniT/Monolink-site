import React, { useState } from "react"
import axios from "axios"
import Error from "next/error"
import { local } from "@/utils"

type State = "idle" | "Success" | "Error" | "Loading"

const useSubscribe = () => {
  const [email, setEmail] = useState<string>("")
  const [state, setState] = useState<State>("idle")
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const subscribe = async (e: any) => {
    e.preventDefault()
    setState("Loading")

    try {
      const response = await local.post("/api/subscribe", { email })
      console.log(response)
      setState("Success")
      setEmail("")
    } catch (e: any) {
      console.log("error")
      setErrorMsg(e.response.data.error)
      setState("Error")
    }
  }
  return {
    state,
    subscribe,
    setEmail,
    email,
  }
}

export default useSubscribe
