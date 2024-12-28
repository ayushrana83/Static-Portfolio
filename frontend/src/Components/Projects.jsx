export default function Projects() {
  const array = [
    {
      title: "ClickCart",
      image:
        "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      stack: ["React.js", "Exprees.js", "MongoDb", "Node.js", "Tailwind"],
      description: "",
      github: "",
      isLive: false,
      live: "",
    },
    {
      title: "Tic Tac Toe",
      image:
        "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      stack: ["HTML", "CSS", "JavaScript"],
      description: "",
      github: "",
      isLive: false,
      live: "",
    },
    {
      title: "BookStore",
      image:
        "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      stack: ["React.js", "Exprees.js", "MongoDb", "Node.js", "Tailwind"],
      description: "",
      github: "",
      isLive: false,
      live: "",
    },
  ];
  return (
    <div className="flex-col items-center justify-center mt-10">
      <h1 className="text-3xl m-7 text-center">Projects</h1>
      <div className="flex-col lg:w-[60%] w-[90%] mx-auto">
        {array.map((project, index) => (
          <div className="border-2 mt-5 lg:flex  p-10 gap-5">
            <div className="h-40">
              <img
                className="w-full h-full object-cover"
                src={project.image}
                alt=""
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl underline font-semibold">{project.title}</h2>
              <div className="text-xs gap-2 flex flex-wrap">
                {project.stack.map((stack, index) => (
                  <span className="border rounded-2xl p-2">{stack}</span>
                ))}
              </div>
              <div className="flex justify-between">
                <button className="border rounded-lg p-1">Github</button>
                <button className="border rounded-lg p-1">Live</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
