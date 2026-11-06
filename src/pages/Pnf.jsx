import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { routerContext } from '../context/RouterGuardContext';

function Pnf() {
  const { authorizedUser, role } = useContext(routerContext);
  const navigate = useNavigate();

  const backtoHome = () => {
    if (role === 'user') {
      navigate('/');
    } else if (role === 'admin') {
      navigate('/admin-dashboard');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">

      {/* 404 Illustration */}
      <div className="flex justify-center items-center">
        <img
          src="https://i.pinimg.com/originals/79/b3/03/79b30352d4a90ff977bb0eeb5ecfddc5.gif"
          alt="Page not found"
          className="w-72 sm:w-96 h-auto object-contain"
        />
      </div>

      {/* Error Message */}
      <div className="text-center mt-4 max-w-lg">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-800 tracking-tight">
          404
        </h1>

        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-3">
          Oops! This page is missing.
        </h2>

        <p className="text-gray-500 text-sm sm:text-base mt-3 leading-relaxed">
          Looks like this book has been misplaced!
          The page you're looking for doesn't exist or may have been moved.
        </p>
      </div>

      {/* Back Navigation */}
      {authorizedUser ? (
        <button
          onClick={backtoHome}
          className="mt-7 inline-flex items-center gap-2 bg-gray-900 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <span>←</span>
          Back to Home
        </button>
      ) : (
        <Link
          to="/"
          className="mt-7 inline-flex items-center gap-2 bg-gray-900 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <span>←</span>
          Back to Bookstore
        </Link>
      )}

      {/* Footer */}
      <p className="text-xs text-gray-400 mt-10 text-center">
        Lost between the pages? Let's get you back to reading.
      </p>

    </div>
  );
}

export default Pnf;