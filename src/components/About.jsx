
const About = () => {
  return (
    <section id="about" className="py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">

        {/* Left: Image and Experience Card */}
        <div className="space-y-6">
          <div className="bg-[#003a3a] p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">23+ Years Of Experience</h3>
            <p className="">Decades of expertise, delivering reliable electrical solutions.</p>
          </div>

          <div className="flex gap-4">
            <div className="bg-gray-200 rounded-xl w-1/2 h-40 flex items-center justify-center">
              {/* Video Play Icon */}
              <button className="bg-blue-600 text-white p-4 rounded-full">▶</button>
            </div>
            <div className="bg-gray-200 rounded-xl w-1/2 h-40"></div>
          </div>
        </div>

        {/* Right: Text Content */}
        <div>
          <p className="font-medium mb-2">⚡About Us</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Comprehensive Electrical Services Built on <span className="text-lime-600">23+ Years of Trust</span>
          </h2>
          <p className="mb-6 text-justify">
            Megha Electrical Services is involved with a variety of electrical work, ranging from domestic to industrial installations and electrical contracting. In conjunction with our general electrical work, Megha Electrical Services has successfully completed larger contracts with electrical consultants. We pride ourselves on quality workmanship and service excellence. Megha Electrical Services is an authorized company and registered with all relevant authorities situated in the India region. We have undertaken major projects throughout India.
            Our sound knowledge of the electrical industry allows us to be hands-on in every aspect of the job from the beginning to end.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div>
              <div className="text-blue-600 text-3xl mb-2">🎧</div>
              <h4 className="text-lg font-semibold mb-1">Providing Awesome Service</h4>
              <p className="text-gray-600 text-sm">
                Successfully executed 300+ projects, delivering high-quality solutions.
              </p>
            </div>

            <div>
              <div className="text-blue-600 text-3xl mb-2">🛠️</div>
              <h4 className="text-lg font-semibold mb-1">Providing Awesome Quality</h4>
              <p className="text-gray-600 text-sm">
                Focuses on efficiency, adhering to 150+ checklists for project execution.
              </p>
            </div>
          </div>

          <button className="bg-lime-500 text-white px-6 py-3 rounded-md font-medium hover:bg-lime-600 transition">Know More</button>
        </div>

      </div>
    </section>
  )
}

export default About