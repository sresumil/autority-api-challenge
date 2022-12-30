import db from '@/database';

/**
 * GET /
 * Home page
 */
export const index = (req, res) => res.send('Hello World!');

/**
 * GET /health
 * Health check
 */
export const healthCheck = async (req, res) => {
  const users = await db.models.user.findAll();
  return res.json({ success: true, data: users });
};

/**
 * GET /tasks
 * Get task
 */
export const getTasks = async (req, res) => {
  const tasks = await db.models.task.findAll();
  return res.json({ success: true, data: tasks });
}

/**
 * GET /task/:id
 * Get task
 */
export const getTask = async (req, res) => {
  const {id} = req.params;
  const task = await db.models.task.findOne({where: {id: id}});
  return res.json({ success: true, data: task });
}

/**
 * POST /task/:id
 * Add task
 */
export const createTask = async (req, res) => {
  try {
    const {name, description, author} = req.body;

    if ( name !== undefined && name.length < 1 ) {
      throw new Error(`Name can not be empty`);
    }

    if ( description !== undefined && description.length < 1 ) {
      throw new Error(`Name can not be empty`);
    }

    if ( author !== undefined && author.length < 1 ) {
      throw new Error(`Name can not be empty`);
    }

    const task = await db.models.task.create({
      name,
      description,
      author,
      isComplete: false
    });
    // const tasks = await db.models.task.findOne();
    return res.json({ success: true, data: task });
  }catch (error) {
    return res.status(400).json({success: false, data: null, message: error.message});
  }
}

/**
 * PUT /task/:id
 * Update task
 */
export const updateTask = async (req, res) => {
  try {
    const {id} = req.params;
    const {name, description, author, isComplete} = req.body;

    if ( name !== undefined && name.length < 1 ) {
      throw new Error(`Name can not be empty`);
    }

    if ( description !== undefined && description.length < 1 ) {
      throw new Error(`Name can not be empty`);
    }

    if ( author !== undefined && author.length < 1 ) {
      throw new Error(`Name can not be empty`);
    }

    await db.models.task.update({
      name,
      description,
      author,
      isComplete,
    }, {where: {
      id: id
    }});
    const task = await db.models.task.findOne({where: {id: id}});
    return res.json({ success: true, data: task });
  }catch (error) {
    return res.status(400).json({success: false, data: null, message: error.message});
  }
}

/**
 * DELETE /task/:id
 * Delete task
 */
export const deleteTask = async (req, res) => {
  try {
    const {id} = req.params;
    const task = await db.models.task.destroy({where: {id: id}})
    const tasks = await db.models.task.findAll();
    return res.json({ success: true, data: tasks });
  }catch (error) {
    return res.status(400).json({success: false, data: null, message: error.message});
  }
}
