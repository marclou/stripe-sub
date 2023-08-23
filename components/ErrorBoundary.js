import React from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import ButtonSupport from "./ButtonSupport";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <>
          <div className="h-screen w-full flex flex-col justify-center items-center text-center gap-6 p-6">
            <p className="font-medium">Something went wrong 🥲</p>

            <p className="text-red-500">{this.state.error?.message}</p>

            <ButtonSupport showTextOnSmall={true} />

            <Link href="/" className="btn btn-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                  clipRule="evenodd"
                />
              </svg>
              Home
            </Link>

            <button className="btn btn-sm btn-ghost" onClick={() => signOut()}>
              Logout
            </button>
          </div>
        </>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

export default ErrorBoundary;
