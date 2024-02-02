import React, { useState } from 'react';
import Register from './Register';
import Login from './Login';
import UserProfile from './UserProfile';

const App = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  const handleRegister = (newUser) => {
    const isUserExists = users.some((user) => user.email === newUser.email);

    if (!isUserExists) {
      setUsers([...users, newUser]);
      setCurrentUser(newUser);
    }

    return isUserExists;
  };

  const handleLogin = (loginData) => {
    const user = users.find((u) => u.password === loginData.password && u.email === loginData.email);

    if (user) {
      setCurrentUser(user);
      return true;
    }

    return false;
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setShowLogin(false);
  };

  const handleSwitchToLogin = () => {
    setShowLogin(true);
  };

  const handleSwitchToRegister = () => {
    setShowLogin(false);
  };


  const handleEditProfile = (updatedData) => {
    setUsers((prevUsers) => {
      return prevUsers.map((user) => {
        if (user.email === currentUser.email) {
          return { ...user, ...updatedData };
        }
        return user;
      });
    });
    setCurrentUser((prevUser) => ({ ...prevUser, ...updatedData }));
  };

  const handleUpdateAuthInfo = (updatedData) => {
    setUsers((prevUsers) => {
      return prevUsers.map((user) => {
        if (user.email === currentUser.email) {
          return { ...user, ...updatedData };
        }
        return user;
      });
    });
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      {currentUser ? (
        <UserProfile
          user={currentUser}
          onLogout={handleLogout}
          onEditProfile={handleEditProfile}
          onUpdateAuthInfo={handleUpdateAuthInfo}
        />
      ) : showLogin ? (
        <Login onLogin={handleLogin} onSwitchToRegister={handleSwitchToRegister} />
      ) : (
        <Register onRegister={handleRegister} onSwitchToLogin={handleSwitchToLogin} />
      )}
    </div>
  );
};

export default App;
