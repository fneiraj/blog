const Projects = () => {
  const projects = [
    {
      name: 'Project 1',
      type: 'github',
      description: [
        `React
        Next
        TypeScript
        Webpack
        Egg.js
        TSLint`,
      ],
    },
    {
      name: 'Project 2',
      type: 'Backend Development',
      description: ['React', 'Next', 'TypeScript', 'Webpack', 'Egg.js', 'TSLint'],
    },
    {
      name: 'Project 3',
      type: 'Graduation Project',
      description: ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit'],
    },
  ]

  return (
    <>
      <div>
        {projects.map((project) => (
          <div key={project.name}>
            <h4>
              <div className="font-extrabold">{project.name}</div>
              <div className="text-gray-500">{project.type}</div>
            </h4>
            <ul>
              {project.description.map((description) => (
                <li key={description} className="text-sm">
                  {description}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}

export default Projects
