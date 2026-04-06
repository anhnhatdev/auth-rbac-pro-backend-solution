// Simple Mock DB for persistence in memory
const users = [
  {
    id: 1,
    username: 'admin',
    email: 'admin@auth-pro.com',
    password: '$2b$10$EExFvF/QZ.X6/16G2821be0y.P1/9t/99.t3/9e.1/9t.1/9t.1/9t', // admin123 hashed
    role: 'ADMIN',
    createdAt: new Date().toISOString()
  }
];

module.exports = {
  users
};
