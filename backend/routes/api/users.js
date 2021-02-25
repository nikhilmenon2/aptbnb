const express = require('express');
const { check } = require('express-validator');
const asyncHandler = require('express-async-handler');

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Booking, Review } = require('../../db/models');

const router = express.Router();

const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username').not().isEmail().withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors
];

// Sign up
router.post(
  '/',
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, username, firstName, lastName, profileImg} = req.body;
    const user = await User.signup({
      email,
      username,
      password,
      firstName,
      lastName,
      profileImg,
    });

    await setTokenCookie(res, user);

    return res.json({
      user
    });
  })
);


router.get(
  "/:id", requireAuth,
  asyncHandler(async (req, res) => {
    const id = Number(req.params.id);
    const user = await User.findByPk(id, {
    include: [Booking, Review]
    });
    console.log(user)

   res.json(user)

  })
)

router.delete(
  "/reviews/:id",
  requireAuth,
  asyncHandler(async (req, res) => {
    const id = Number(req.params.id);
    const user = await Review.destroy({
      where: { id: id },
    });

  })
);
 




module.exports = router
