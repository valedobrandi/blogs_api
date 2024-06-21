const blogsPostService = require('../services/BlogPost.service');
const blogsPost2Service = require('../services/BlogPost_2.service');
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

    if (userId !== req.user) return res.status(401).json({ message: 'Unauthorized user' }); 
    const { data, status } = await blogsPostService.deleteById(id);
    return res.status(mapStatusHTTP(status)).json(data);
  } catch (error) {
    next(error);
  }
};

const isQuery = (query) => (query.q && query.q !== '');
const isQueryEmpty = (query) => (query.q && query.q === '');
const findByQuery = async (req, res, next) => {
  try {
    if (isQuery) {
      const { status, data } = await blogsPost2Service
        .findByQuery(req.query.q);
      return res.status(mapStatusHTTP(status)).json(data);
    }
    if (isQueryEmpty(req.query)) {
      const { status, data } = await blogsPostService.getAll();
      return res.status(mapStatusHTTP(status)).json(data);
    }
    return res.status(200).json([]);
  } catch (error) {
    next(error);
  }
};

module.exports = { deleteById, findByQuery };