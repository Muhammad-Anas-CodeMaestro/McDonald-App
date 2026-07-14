export const userValue = [
  {
    name: 'John Smith',
    email: 'admin@mcdonalds.com',
    password: 'admin123',
    role: 'Admin',
    roleId: 1
  },
  {
    name: 'John Snow',
    email: 'sagent@mcdonalds.com',
    password: 'agent123',
    role: 'Support Agent',
    roleId: 2
  },
  {
    name: 'John Smith',
    email: 'user@mcdonalds.com',
    password: 'user123',
    role: 'User',
    roleId: 3
  }
]

export const email = (email) => userValue.find((user) => user.email === email );
export const password = (password) => userValue.find((user) => user.password === password );