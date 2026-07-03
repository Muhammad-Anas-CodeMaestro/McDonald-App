export const userValue = [
  {
    email: 'admin@mcdonalds.com',
    password: 'admin123',
  },
  {
    email: 'superagnetadmin@mcdonalds.com',
    password: 'superagent123',
  },
  {
    email: 'user@mcdonalds.com',
    password: 'user123',
  }
]

export const email = (email) => userValue.find((user) => user.email === email );
export const password = (password) => userValue.find((user) => user.password === password );