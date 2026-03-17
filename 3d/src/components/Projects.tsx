export default function Projects() {
  const projects = [
    { title: "Project Alpha", desc: "Interactive webGL experience." },
    { title: "Project Beta", desc: "E-commerce platform with dynamic 3D." },
    { title: "Project Gamma", desc: "Award-winning portfolio site." },
    { title: "Project Delta", desc: "Immersive narrative scrollytelling." }
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#0a0a0a] text-white py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-sm uppercase tracking-[0.2em] mb-12 text-neutral-400">Selected Work</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div 
              key={i} 
              className="relative group block overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-8 transition-all hover:bg-white/10 hover:border-white/10 backdrop-blur-md cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
              <div className="w-full h-64 bg-black/40 rounded-xl mb-8 overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
                <div className="w-full h-full flex items-center justify-center text-white/20">
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h4 className="text-2xl font-medium mb-2">{p.title}</h4>
              <p className="text-neutral-400 font-light">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
