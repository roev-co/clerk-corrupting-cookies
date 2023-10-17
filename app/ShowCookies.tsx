"use client";

export default () => (
    <>
        <h2>Cookies</h2>
        <pre>
            {JSON.stringify(document.cookie,null, 2)}
        </pre>
    </>
);
