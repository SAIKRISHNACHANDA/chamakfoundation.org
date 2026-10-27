"use client";

import { useState, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Lock, User, Eye, EyeOff, ShieldCheck, ArrowLeft, RefreshCw, AlertCircle } from "lucide-react";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnTo = searchParams.get("from") || "/admin/gallery";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim() || !password) {
      setError("Please enter both username and password.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setError(data.message || "Invalid credentials. Please try again.");
        setIsLoading(false);
        return;
      }

      // Successful login -> Navigate to admin dashboard
      router.push(returnTo);
      router.refresh();
    } catch (err) {
      setError("Network or server connection failed. Please retry.");
      setIsLoading(false);
    }
  };

  return (
    <div className="admin-login-wrap">
      <div className="admin-login-card">
        {/* Brand Header */}
        <div className="admin-login-header">
          <Link href="/" className="admin-login-logo-link">
            <div className="admin-login-logo-ring">
              <Image
                src="/assets/logo.jpeg"
                alt="Chamak Foundation"
                width={64}
                height={64}
                className="admin-login-logo"
                priority
              />
            </div>
          </Link>
          <div className="admin-login-badge">
            <ShieldCheck size={14} />
            <span>Authorized Access Only</span>
          </div>
          <h1>Admin Portal</h1>
          <p>Chamak Foundation · Chamak Padhai Se</p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="admin-login-error">
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="admin-login-form">
          <div className="admin-input-group">
            <label htmlFor="admin-username">Username or Email</label>
            <div className="admin-input-box">
              <User size={18} className="admin-input-icon" />
              <input
                id="admin-username"
                type="text"
                autoComplete="username"
                placeholder="admin or chamakfoundation23@gmail.com"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  if (error) setError("");
                }}
                disabled={isLoading}
                required
              />
            </div>
          </div>

          <div className="admin-input-group">
            <div className="admin-label-row">
              <label htmlFor="admin-password">Password</label>
            </div>
            <div className="admin-input-box">
              <Lock size={18} className="admin-input-icon" />
              <input
                id="admin-password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError("");
                }}
                disabled={isLoading}
                required
              />
              <button
                type="button"
                className="admin-toggle-pwd"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                tabIndex={-1}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="admin-login-submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <RefreshCw size={18} className="spin" />
                <span>Authenticating...</span>
              </>
            ) : (
              <span>Sign In to Dashboard</span>
            )}
          </button>
        </form>

        {/* Footer Link */}
        <div className="admin-login-footer">
          <Link href="/" className="admin-back-link">
            <ArrowLeft size={16} />
            <span>Back to Public Website</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense
      fallback={
        <div className="admin-login-wrap">
          <div className="admin-login-card" style={{ minHeight: "350px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <RefreshCw size={28} className="spin" style={{ color: "#c99a3a" }} />
          </div>
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}

