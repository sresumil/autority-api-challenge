export const up = (queryInterface, Sequelize) => queryInterface.createTable('tasks', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    isComplete: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
    },
    deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
    },
  });
  
  export const down = (queryInterface) => queryInterface.dropTable('tasks');
  