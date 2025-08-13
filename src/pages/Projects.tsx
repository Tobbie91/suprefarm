export default function Projects() {
    const projects = [
      { id: 1, name: 'Cocoa Farm', description: 'Organic cocoa cultivation with carbon offset benefits.' },
      { id: 2, name: 'Rubber Plantation', description: 'Sustainable rubber tapping that protects biodiversity.' },
    ];
  
    return (
      <div className="min-h-screen bg-white p-8">
        <h2 className="text-4xl font-bold text-green-800">Our Projects</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="border rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-green-700">{project.name}</h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }