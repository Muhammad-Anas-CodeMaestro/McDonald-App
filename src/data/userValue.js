export const userValue = [
  {
    id: 'u1',
    name: 'Anas Amir',
    email: 'admin@mcdonalds.com',
    password: 'admin123',
    role: 'user'
  },
  {
    id: 'u2',
    name: 'Shahid hussain',
    email: 'superagnetadmin@mcdonalds.com',
    password: 'superagent123',
    role: 'agent'
  },
  {
    id: 'u3',
    name: 'Ahmed Khan',
    email: 'user@mcdonalds.com',
    password: 'user123',
    role: 'user'
  }
]

export const email = (email) => userValue.find((user) => user.email === email );
export const password = (password) => userValue.find((user) => user.password === password );