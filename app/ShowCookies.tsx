"use client";

export default () => (
    <>
        <h2>Cookies</h2>
        <pre>
            {(document.cookie ?? '').replace(';', ';\n')}
        </pre>
    </>
);
