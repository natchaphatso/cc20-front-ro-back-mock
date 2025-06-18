export const listUser = (req, res) => {
  //code body
  res.json({ message: "This is List All User" });
};

export const readUser = (req, res) => {
  res.json({ message: "This is Read User" });
};

export const createUser = (req, res) => {
  res.json({ message: "This is Post(Create) User" });
};

export const updateRoleUser = (req, res) => {
  res.json({ message: "This is Patch(Update) User" });
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  res.json({ message: `This is Delete User ${id}` });
};
