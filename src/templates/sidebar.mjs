import { defaultStyles } from "../styles/default.mjs";

export const tSidebar = (accentColor) => `
    <style>
        ${defaultStyles(accentColor)}

        article {
            display: grid;
            grid-template-rows: auto 1fr;
            grid-template-columns: 2fr 1fr;
            grid-template-areas: 
                "header meta" 
                "main sidebar";
            grid-column-gap: 50px;
            grid-row-gap: 10px;
        }

        header {
            grid-area: header;
        }

        main {
            grid-area: main;
        }

        aside.meta {
            grid-area: meta;
            align-self: center;
        }

        aside.sidebar {
            grid-area: sidebar;
        }

        aside.meta, aside.sidebar {
            color: #666;
        }

        header p, aside.meta, aside.sidebar {
            font-family: var(--font-sans-serif);
        }

        section > div aside {
            margin-bottom: 10px;
            font-style: italic;
        }

        h1 {
            font-size: 52px;
            margin-bottom: 20px;
        }
        
        h2 {
            font-size: 14px;
            text-transform: uppercase;
            margin-bottom: 20px;
        }
        
        h3, h4 {
            text-transform: capitalize;
            font-family: var(--font-serif);
            margin-bottom: 10px;
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

        h2, h4, a {
            color: ${accentColor};
        }
    </style>
    <p>Current theme: Sidebar</p>
    <button>Switch to Cascade</button>
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
