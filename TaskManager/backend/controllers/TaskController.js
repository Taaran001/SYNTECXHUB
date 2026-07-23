const TaskModel = require("../models/TaskModel")

const createTask = async (req, res) => {
    const data = req.body
    try {
        const model = new TaskModel(data);
        await model.save()
        res.status(201).json({message: "Task is created",success: true})
    } catch (err) {
        res.status(500).json({ message: "Failed to create task", success: false })
    }
}

const fetchAllTask = async (req, res) => {
    try {
        const data = await TaskModel.find({});
        res.status(200).json({message: "All Tasks",success: true, data})
    } catch (err) {
        res.status(500).json({ message: "Failed to get tasks", success: false })
    }
}

module.exports = {
    createTask,
    fetchAllTask
}
