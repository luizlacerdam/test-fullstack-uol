/* eslint-disable max-lines-per-function */
/**
* @param {import('sequelize').DataTypes} DataTypes
* @param {import('sequelize').Sequelize } Sequelize
* @returns
*/

module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define(
    'user', 
        {
          id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
          name: { allowNull: false, type: DataTypes.STRING },
          email: { allowNull: false, type: DataTypes.STRING },
          cpf: { allowNull: false, type: DataTypes.STRING },
          telephone: { allowNull: false, type: DataTypes.STRING },
          status: { allowNull: false, type: DataTypes.STRING },
        },
    { 
        timestamps: false, 
        tableName: 'users',
        underscored: true,
        createdAt: false,
        updatedAt: false, 
    },
    );
    
      return user;
    };
