import { useState } from "react";
import { useNavigate } from "react-router-dom";
import McDnaldLogo from '/McDonaldM.png';
import McDonaldFoamPic from '/McDonaldWRB.jpg';
import { userValue } from "../data/userValue.js";
import FormField from '../foam/FormField.jsx';

export default function Foam () {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const loginFields = [
    {
      id: 'email',
      name: 'email',
      type: 'email',
      label: 'Email',
      placeholder: 'user@mcdonalds.com',
      required: true,
    },
    {
      id: 'password',
      name: 'password',
      type: 'password',
      label: 'Password',
      placeholder: '**************',
      required: true,
    },
  ];

  const handleFieldChange = (fieldName) => (e) => {
    if (fieldName === 'email') {
      setEmailInput(e.target.value);
    } else if (fieldName === 'password') {
      setPasswordInput(e.target.value);
    }
  };

  const handleSubmit = (e) =>
  {
    e.preventDefault();
    setLoading(true);

    const matchedUser = userValue.find(
      (user) => user.email === emailInput.trim() && user.password === passwordInput
    );

    if (matchedUser) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('email', JSON.stringify(emailInput.trim()));
      localStorage.setItem('password', JSON.stringify(passwordInput));
      navigate('/Dashboard');
    } else {
      localStorage.removeItem('isLoggedIn');
      alert('Invalid email or password');
    }

    setLoading(false);
  };

  return (
    <div>
      <div className="relative z-10 p-4 flex flex-col items-center w-full justify-center bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-xl gap-5 h-fit">
        <img src={ McDonaldFoamPic } alt="McDonald's" className="h-16" />
        <h1 className="font-medium text-xl">Helpdesk Login</h1>
        <form className="flex flex-col gap-4" onSubmit={ handleSubmit }>
          {loginFields.map((field) => (
            <FormField
              key={field.name}
              field={field}
              value={field.name === 'email' ? emailInput : passwordInput}
              onChange={handleFieldChange(field.name)}
            />
          ))}
          <button type="submit" className='bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-32 rounded'>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
      <div className="absolute top-30 left-0 w-2/5 opacity-50">
        <img src={ McDnaldLogo } alt="McDonald's" className="max-w-full" />
      </div>
    </div>
  );
}