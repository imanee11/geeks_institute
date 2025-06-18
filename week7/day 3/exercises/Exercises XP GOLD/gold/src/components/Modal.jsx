import React from "react";
import './modal.css';

class Modal extends React.Component {
    render() {
        const { onClose } = this.props;

        return (
            <div className="modal-background">
                <div className="modal-body">
                    <h2>Error: Something went wrong!</h2>
                    <details>
                        <summary>Details</summary>
                        <p>in r<br />in div<br />in r<br />in StrictMode</p>
                    </details>
                    <p>Please try it again</p>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        );
    }
}

export default Modal;
