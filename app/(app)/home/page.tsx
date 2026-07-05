import React, {useState, useEffect, useCallback} from 'react'
import axios from 'axios'
import VideoCard from '@/components/VideoCard'
import { Video } from '@/types'

function Home() {

  const [videos, setVideos]=useState<Video[]>([])
  const [loading, setLoading]=useState(true)
  const [error, setError]=useState(null)

  const fetchVideos=useCallback(async ()=>{
    try {
      const response=await axios.get("/api/videos")
      if(Array.isArray(response.data)){
        setVideos(response.data)
      }
      else{
        throw new Error("Unexpected response format")
      }

    } catch (error: any) {
      console.log(error)
      setError(error)
    }
    finally{
      setLoading(false)
    }
  },[])

  useEffect(()=>{
    fetchVideos()
  },[fetchVideos])

  const handleDownload=useCallback((url: string, title: string)=>{
    ()=>{
      const link=document.createElement("a")
      link.href=url
      link.setAttribute("download",`${title}.mp4`)
      link.setAttribute("target","_blank")
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  },[])

  if(loading){
    return <div>Loading...</div>
  }

  return (
    <div>Home</div>
  )
}

export default Home