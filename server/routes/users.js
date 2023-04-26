const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		const newUser = new User({ ...req.body, password: hashPassword });
		newUser.userType = req.body.userType; // Add the userType field to the new user

		await newUser.save();

		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

  


  router.get("/all", async (req, res) => {
	try {
		const users = await User.find({});
		res.status(200).send(users);
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

//delete user 
router.delete("/del/:id", async (req, res) => {
	try {
		const user = await User.findByIdAndDelete(req.params.id);
		if (!user) {
			return res.status(404).send({ message: "User not found" });
		}
		res.status(200).send({ message: "User deleted successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});



module.exports = router;
