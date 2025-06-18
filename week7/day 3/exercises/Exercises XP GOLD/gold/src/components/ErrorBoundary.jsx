import React from "react";
import Modal from "./Modal";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            errorInfo: null,
        };
    }

    occurError = () => {
        this.setState({ hasError: true });
    };

    componentDidCatch(error, info) {
        this.setState({ errorInfo: info });
    }

    handleClose = () => {
        this.setState({ hasError: false, errorInfo: null });
    };

    render() {
        if (this.state.hasError) {
            return <Modal onClose={this.handleClose} />;
        }

        return (
            <div>
                <button onClick={this.occurError}>occur an error</button>
            </div>
        );
    }
}

export default ErrorBoundary;
