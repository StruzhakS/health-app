import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateAuthUser } from 'redux/auth/authSlice';

const GoogleAuth = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = {
    email: searchParams.get('email'),
    token: searchParams.get('token'),
    name: searchParams.get('name'),
    avatarURL: searchParams.get('avatarURL'),
    requirements: JSON.parse(searchParams.get('requirements')),
    goal: searchParams.get('goal'),
    gender: searchParams.get('gender'),
    age: searchParams.get('age'),
    height: searchParams.get('height'),
    weight: searchParams.get('weight'),
    activity: searchParams.get('activity'),
  };

  useEffect(() => {
    dispatch(updateAuthUser({ ...user }));
    navigate('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
};

export default GoogleAuth;
