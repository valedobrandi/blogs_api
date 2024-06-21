const blogsPostService = require('../services/BlogPost.service');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const deleteById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const getBlogPostById = await blogsPostService.getById(id);
    if (getBlogPostById.status === 'NOT_FOUND') {
      return res.status(mapStatusHTTP(getBlogPostById.status))
        .json(getBlogPostById.data);
    }
    const { userId } = getBlogPostById.data;
    console.log('Ids', userId, req.user);
    console.log('VALID', userId !== req.user);
    if (userId !== req.user) return res.status(401).json({ message: 'Unauthorized user' }); 
    const { data, status } = await blogsPostService.deleteById(id);
    return res.status(mapStatusHTTP(status)).json(data);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = { deleteById };