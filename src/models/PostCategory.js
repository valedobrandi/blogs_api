module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    categoryId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  },
    {
      timestamps: false,
      tableName: 'posts_categories',
      underscored: true,
    });

  PostCategory.associate = (models) => {

    models.BlogPost.belongsToMany(models.Category, {
      as: 'posts',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId'
    });

    models.Category.belongsToMany(models.BlogPost, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId'
    });
  };

  return PostCategory;
};