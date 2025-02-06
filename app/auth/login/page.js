"use client";
import { useState } from "react";
import { auth, googleProvider, db } from "../../firebase/firebaseConfig";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";
import { doc, setDoc } from "firebase/firestore";

export default function LoginPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleGoogleSignIn = async () => {
    try {
      if (!auth || !googleProvider) {
        throw new Error("Firebase is not properly initialized.");
      }

      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Save user data in Firestore
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, {
        name: user.displayName,
        email: user.email,
        uid: user.uid,
      });

      router.push("/");
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
      setError(error.message);
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      if (!auth) throw new Error("Firebase authentication is not initialized.");

      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (error) {
      console.error("Login Error:", error.message);
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Login</h1>

      {error && <p className="text-red-500">{error}</p>}

      {user ? (
        <p>Already signed in as {user.email}</p>
      ) : (
        <>
          <button
            onClick={handleGoogleSignIn}
            className="bg-red-500 text-white px-4 py-2 mb-4 rounded"
          >
            Sign in with Google
          </button>

          <form onSubmit={handleEmailLogin} className="flex flex-col">
            <input
              type="email"
              placeholder="Email"
              className="border p-2 mb-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="border p-2 mb-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Sign in with Email
            </button>
          </form>

          {/* Sign-Up Link */}
          <p className="mt-4">
            Don't have an account?{" "}
            <a href="/auth/signup" className="text-blue-500">
              Sign Up
            </a>
          </p>
        </>
      )}
    </div>
  );
}
