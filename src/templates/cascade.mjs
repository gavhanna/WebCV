import { defaultStyles } from "../styles/default.mjs";

export const tCascade = (accentColor) => `
    <style>
        ${defaultStyles(accentColor)}

        article {
            display: flex;
            flex-direction: column;
        }

        header {
            order: 2;
            margin-bottom: 30px;
        }
        
        main {
            order: 3;
        }
        
        aside.meta {
            width: 100%;
            order: 1;
            display:  flex;
            justify-content: flex-end;
        }
        
        aside.sidebar {
            order: 4;
            display: grid;
            grid-template-columns: repeat(3, minmax(200px, 1fr));
            grid-column-gap: 20px;
        }

        aside.meta, aside.sidebar {
            color: #666;
        }

        header p, aside.meta, aside.sidebar {
            font-family: var(--font-sans-serif);
        }

        header, section {
            margin-bottom: 30px;
        }

        section {
            border-bottom: 1px solid ${accentColor};
        }

        h1 {
            font-size: 60px;
            margin-top: -60px;
            margin-bottom: 20px;
            border-bottom: 5px solid ${accentColor};
            font-family: var(--font-sans-serif);
        }

        h2 {
            border-bottom: 1px solid inherit;
        }
        
        h2, h3, h4 {
            font-size: 24px;
            text-transform: capitalize;
            margin-bottom: 20px;
        }

        h3, h4 {
            font-size: 18px;
        }

        h4 {
            font-family: var(--font-sans-serif);
        }

        h3 > span {
            font-weight: normal;
            font-style: italic;
        }

        aside {
            font-size: 14px;
        }

        h2, a {
            color: ${accentColor};
        }
    </style>
    <p>Current theme: Cascade</p>
    <button>Switch to Sidebar</button>
    <article>
        <header>
            <h1></h1>
            <p></p>
        </header>
        <main></main>
        <aside class="meta">date here</aside>
        <aside class="sidebar">other shit here</aside>
    </article>
    `;
