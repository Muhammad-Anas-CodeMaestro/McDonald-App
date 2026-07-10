export const userValue = [
  {
    id: 'u1',
    name: 'John Smith',
    email: 'admin@mcdonalds.com',
    password: 'admin123',
    role: 'Admin'
  },
  {
    id: 'u2',
    name: 'John Snow',
    email: 'sagent@mcdonalds.com',
    password: 'agent123',
    role: 'Support Agent'
  },
  {
    id: 'u3',
    name: 'John Smith',
    email: 'user@mcdonalds.com',
    password: 'user123',
    role: 'User'
  }
]

export const email = (email) => userValue.find((user) => user.email === email );
export const password = (password) => userValue.find((user) => user.password === password );