// @desc    get products
// @route   GET /products/
// @access  PUBLIC
export const getAllProducts = async (req, res, next) => {};
// ______________________ADMIN____________________________
// @desc    add product
// @route   POST /products/
// @access  Private (ADMIN)
export const addProduct = async (req, res, next) => {
  // with at least one picture
};

// @desc    update product ( quantity - UnitPrice )
// @route   PATCH /products/:id
// @access  Private (ADMIN)
export const updateProduct = async (req, res, next) => {};

// @desc    delete product
// @route   DELETE /products/:id
// @access  Private (ADMIN)
export const deleteProduct = async (req, res, next) => {};

// ______________________USER____________________________
// @desc    rate product
// @route   PATCH /products/rate/:id
// @access  USER ( AUTHORIZED )
export const rateProduct = async (req, res, next) => {};

// @desc    comment on product
// @route   PATCH /products/comment/:id
// @access  USER ( AUTHORIZED )
export const addComment = async (req, res, next) => {
  // 0..* pics
};
