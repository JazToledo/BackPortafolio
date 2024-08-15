import Tecnology from "../models/tecnology.model.js";

export async function createTecnology(req, res) {
  try {
    const Tecnology = new Tecnology(req.body);
    const savedTecnology = await Tecnology.save();
    res.json(savedTecnology);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

export async function getAllTecnologies(req, res) {
  try {
    const tecnologies = await Tecnology.find();
    res.json(tecnologies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function getTecnologyById(req, res) {
  try {
    const tecnology = await Tecnology.findById(req.params.id);
    if (tecnology == null) {
      return res.status(404).json({ message: "Infected person not found" });
    }
    res.json(tecnology);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function updateTecnology(req, res) {
  try {
    const updatedTecnology = await Tecnology.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedTecnology);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

export async function deleteTecnology(req, res) {
  try {
    await Tecnology.findByIdAndDelete(req.params.id);
    res.json({ message: "Tecnology deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
