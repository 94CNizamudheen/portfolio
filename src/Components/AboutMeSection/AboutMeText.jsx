import React from 'react'

const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center sm:text-center' >
      <h2 className='text-6xl text-cyan mb-10'>About Me</h2>
      <p className='text-gray-300'>I'm Nizamudheen from Perinthalmanna, Kerala. After completing my Higher Secondary (Plus Two) education, I worked as a self-taught electrician. Over time, I discovered a strong passion for the IT field—especially coding.
        Driven by curiosity and determination, I joined Brototype (Self-Learners Supporting Academy) in Kochi to pursue my dream of becoming a full-stack developer. During this journey, I’ve built several projects and gained hands-on experience in the MERN stack.
        I believe in continuous learning and hard work. My vision is to become a successful IT professional and contribute to building meaningful tech solutions.</p>

      <div className='flex flex-row items-center gap-4 md:self-start sm:self-center mt-10'>
        <button
          onClick={() => window.open("https://github.com/94CNizamudheen?tab=repositories")}
          className='border border-orange rounded-full py-2 px-4 text-lg flex items-center hover:bg-orange transition-all duration-500 cursor-pointer text-white hover:text-cyan'
        >
          My Projects
        </button>

        <a href="/NIzamudheen C_ Resume (3).pdf" download>
          <button
            className='border border-cyan rounded-full py-2 px-4 text-lg flex items-center hover:bg-cyan transition-all duration-500 cursor-pointer text-white hover:text-black'
          >
            Download Resume
          </button>
        </a>
      </div>

    </div>

  )
}

export default AboutMeText
