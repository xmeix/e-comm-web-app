// @desc    get categories
// @route   GET /categories/
// @access  PUBLIC
export const getAllCategories = async (req, res, next) => {
  // with at least one picture
};

// @desc    add categorie
// @route   POST /categories/
// @access  Private (ADMIN)
export const addCategorie = async (req, res, next) => {
  try {
    console.log(req.files);

    // const imgPath = `http://localhost:3001/${req.file.path}`;

    // const updatedUser = await User.findByIdAndUpdate(
    //   req.user.id,
    //   {
    //     $set: { profileImage: imgPath, ...req.body },
    //   },
    //   { new: true }
    // );
    // res.status(200).json(updatedUser);
  } catch (error) {
    next(errorHandler(res, error));
  }
};

// @desc    update categorie
// @route   PATCH /categories/:id
// @access  Private (ADMIN)
export const updateCategorie = async (req, res, next) => {};

// @desc    update categorie
// @route   DELETE /categories/:id
// @access  Private (ADMIN)
export const deleteCategorie = async (req, res, next) => {};
