'use client'
import axios from "axios"
import { useEffect } from "react"

export default function Home() {

  useEffect(()=>{
    axios.get("http://localhost:8000/")
    .then((response)=>{
      console.log(response.data)
    })
    .catch((err)=>{
      console.log(err)
    })

    return () => {
      console.log('temizlendi!')
    }
  },[])

  return (
    <div className="px-10">HOP</div>
  )
}
