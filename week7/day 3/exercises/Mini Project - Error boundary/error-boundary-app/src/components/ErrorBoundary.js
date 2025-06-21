import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error: error };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ errorInfo });
        console.error("Error caught by ErrorBoundary:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="card my-5 bg-red-100 p-4 rounded shadow">
                    <h2 className="text-lg font-bold text-red-800">Something went wrong!</h2>
                    <p className="text-sm text-red-600">{this.state.error?.toString()}</p>
                    <details className="text-xs mt-2 text-gray-700 whitespace-pre-wrap">
                        {this.state.errorInfo?.componentStack}
                    </details>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-3 bg-red-500 text-white px-3 py-1 rounded"
                    >
                        Reload Page
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
