export const tSidebar = (accentColor) => `
    <style>
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

        article {
            width: 900px;
            max-width: 100%;
            margin: 0 auto;
            padding: 50px;
            line-height: 1.5;
            letter-spacing: 1.1;
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

        aside.sidebar ul {
            margin-bottom: 30px;
        }

        aside.sidebar ul li {
            margin-bottom: 10px;
        }

        aside.meta, aside.sidebar {
            color: #666;
        }

        header p, aside.meta, aside.sidebar {
            font-family: Helvetica, Arial, sans-serif;
        }

        section {
            color: #353535;
            font-family: Helvetica, Arial, sans-serif;
        }

        ul {
            list-style: none;
        }

        header, section {
            // margin-bottom: 30px;
        }

        section > div {
            margin-bottom: 20px;
        }

        section > div aside {
            margin-bottom: 10px;
            font-style: italic;
        }

        section p, section ul li {
            margin-bottom: 10px;
            color: #666;
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
            font-family: "Time New Roman", serif;
            margin-bottom: 10px;
        }

        h4 {
            font-family: Helvetica, Arial, sans-serif;
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
