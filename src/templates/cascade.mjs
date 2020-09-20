export const tCascade = (accentColor) => `
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

        section p, section ul li {
            margin-bottom: 10px;
            color: #666;
        }

        h1 {
            font-size: 60px;
            margin-top: -60px;
            margin-bottom: 20px;
            border-bottom: 5px solid ${accentColor};
            font-family: Helvetica, Arial, sans-serif;
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
            font-family: Helvetica, Arial, sans-serif;
        }

        h3 > span {
            font-weight: normal;
            font-style: italic;
        }

        aside {
            font-size: 14px;
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
