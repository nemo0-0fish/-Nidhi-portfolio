const projects = [
  {
    id: '01',
    title: 'Microsoft — Humans & AI Agents',
    description:
      'I designed AI maker tools at Microsoft that help people build automation they can actually trust.',
    tag: '2025 | AI, Product Design, Research',
    image: '/work/01.jpg',
    alt: 'Microsoft Humans & AI Agents Project Screenshot',
  },
  {
    id: '02',
    title: 'Ping — Social Planning App',
    description:
      'I also helped teens move from endless chats to actual plans.',
    tag: '2024 | Mobile Design, Social Media',
    image: '/work/02.jpg',
    alt: 'Ping Social App Project Screenshot',
  },
  {
    id: '03',
    title: 'Spatial Canvas — 3D Workspace',
    description:
      'Crafting an adaptive spatial canvas for multimodal designers and engineers.',
    tag: '2024 | Spatial UI, Product Architecture',
    image: '/work/03.jpg',
    alt: 'Spatial Canvas Project Screenshot',
  },
  {
    id: '04',
    title: 'Aura — Global Wealth Platform',
    description:
      'Simplifying decentralized cross-border wealth management with intuitive design.',
    tag: '2023 | FinTech, Web & Mobile Systems',
    image: '/work/04.jpg',
    alt: 'Aura Wealth Platform Project Screenshot',
  },
]

export default function FeaturedWork() {
  return (
    <section className="w-full bg-black text-white py-20 px-6 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <h2 className="text-xl sm:text-2xl font-mono uppercase tracking-wider font-bold text-white">
              Selected work
            </h2>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
            04 PROJECTS
          </span>
        </div>

        {/* 2x2 Grid on Desktop / 1 Column on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group cursor-pointer rounded-3xl bg-neutral-950/70 border border-neutral-800/90 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-neutral-950 hover:border-neutral-700 active:scale-[0.98] active:translate-y-0"
            >
              {/* Card Image Banner */}
              <div className="w-full aspect-[16/10] overflow-hidden bg-neutral-900 relative">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Card Details */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-neutral-100 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="mt-2.5 text-sm sm:text-base text-neutral-400 font-normal leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-900 flex items-center justify-between text-xs font-mono text-neutral-500">
                  <span>{project.tag}</span>
                  <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-neutral-300 font-bold">
                    →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
