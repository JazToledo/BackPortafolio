import Project from "../models/project.model.js";

export async function createProject(req, res) {
  try {
    const project = new Project(req.body);
    const savedProject = await project.save();
    res.json(savedProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

export async function getAllProjects(req, res) {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function getProjectById(req, res) {
  try {
    const project = await Project.findById(req.params.id);
    if (project == null) {
      return res.status(404).json({ message: "Infected person not found" });
    }
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function updateProject(req, res) {
  try {
    console.log("Params: " + req.params);
    console.log("Body: " + req.body);
    // const updatedProject = await Project.findByIdAndUpdate(
    //   req.params.id,
    //   req.body,
    //   {
    //     new: true,
    //   }
    // );
    // res.json(updatedProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

export async function deleteProject(req, res) {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "Project deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
