import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../store/userSlice';

import { Link, useLocation, useNavigate, } from 'react-router-dom';
import { LoginContainer, Input, Button } from './Login.styles';
import { userLogin } from '../../api/userApi';

export default function Login() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const userInfo = {
        usernameOrEmail: username,
        password: password
      }
      const result = await userLogin(userInfo);

      if (result) {
        const currentUser = {
          userId: result.userId,
          username: result.username,
          displayName: result.userProfile.displayName,
          profilePicUrl: result.userProfile.profilePicUrl
        }
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        dispatch(setUser(currentUser));

        navigate(from.pathname, { replace: true });
      } else {
        setError('The username or email or password does not match')
      }

    } catch (error) {
      setError(error.message)
    }
  };

  return (
    <LoginContainer>
      {error && <p>{error}</p>}

      <form onSubmit={handleLogin}>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Login</Button>

        <span>If you do not have an account, please
          <Link to="/profile/add"> Click here </Link>
          to add your bio and password.
        </span>
      </form>
    </LoginContainer>
  );
}
