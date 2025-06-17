// Input.js
import React from "react";

function Input({ label, value, onChange, error }) {
    return (
        <div style={{ marginBottom: "10px" }}>
            <label>
                {label}
                <br />
                <input
                    value={value}
                    onChange={onChange}
                    style={{ padding: "5px", width: "100%" }}
                />
            </label>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}

export default Input;
