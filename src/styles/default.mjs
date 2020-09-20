export const defaultStyles = accentColor => `

    :host {
        --font-serif: "Time New Roman", serif;
        --font-sans-serif: Helvetica, Arial, sans-serif;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
    }

    button {
        background: ${accentColor};
        color: white;
        padding: 10px;
        border: none;
    }

    ul {
        list-style: none;
    }

    article {
        width: 900px;
        max-width: 100%;
        margin: 0 auto;
        padding: 50px;
        line-height: 1.5;
        letter-spacing: 1.1;
    }

    aside.sidebar ul {
        margin-bottom: 30px;
    }

    aside.sidebar ul li {
        margin-bottom: 10px;
    }

    section {
        color: #353535;
        font-family: var(--font-sans-serif);
    }

    section > div {
        margin-bottom: 20px;
    }

    section p, section ul li {
        margin-bottom: 10px;
        color: #666;
    }
`;