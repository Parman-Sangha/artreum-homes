"use client";
import { useState } from "react";
import { auth, googleProvider, db } from "../../firebase/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { useRouter } from "next/navigation";
import { doc, setDoc } from "firebase/firestore";

export default function SignUpPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  // 🔹 Handle Email & Password Sign-Up
  const handleEmailSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update user profile with name
      await updateProfile(user, { displayName: name });

      // Save user data in Firestore
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, {
        uid: user.uid,
        name: name,
        email: user.email,
        createdAt: new Date(),
      });

      router.push("/");
    } catch (error) {
      setError(error.message);
    }
  };

  // 🔹 Handle Google Sign-Up
  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Save user data in Firestore
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        createdAt: new Date(),
      });

      router.push("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Sign Up</h1>

      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleEmailSignUp} className="flex flex-col">
        <input
          type="text"
          placeholder="Full Name"
          className="border p-2 mb-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Sign Up with Email
        </button>
      </form>

      <p className="my-4">OR</p>

      <button
        onClick={handleGoogleSignUp}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Sign Up with Google
      </button>

      <p className="mt-4">
        Already have an account? <a href="/auth/login" className="text-blue-500">Login</a>
      </p>
    </div>
  );
}
