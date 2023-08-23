import React from "react";
import { signOut } from "next-auth/react";
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

  goTo = (path) => {
    window.location.href = window.location.origin + path;
  };

  render() {
    if (this.state.errorInfo) {
      return (
        <>
          <div className="h-screen w-full flex flex-col justify-center items-center text-center gap-6 p-6">
            <p className="font-medium text-xl">Something went wrong 🥲</p>

            <p className="text-red-500">{this.state.error?.message}</p>

            <ButtonSupport showTextOnSmall={true} />

            <button
              className="btn btn-sm btn-neutral gap-1"
              onClick={() => this.goTo("/app/dashboard")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
              </svg>
              Dashboard
            </button>

            <button
              className="btn btn-sm btn-ghost gap-1"
              onClick={() => signOut()}
            >
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
