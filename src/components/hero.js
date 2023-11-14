import vid from '../assests/Hero_video.mp4'

const Hero = () => {
  return (
    <div className="w-full h-screen bg-[#EDE6D3]">
    <video src={vid} autoPlay loop muted playsInline className="video">
    </video>
    </div>
  )
}

export default Hero