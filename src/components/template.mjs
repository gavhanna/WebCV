export const templateStr = `
    <style>
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        article {
            width: 900px;
            max-width: 100%;
            margin: 0 auto;
            padding: 50px;
            line-height: 1.5;
            letter-spacing: 1.1;
        }

        header p {
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
            margin-bottom: 30px;
        }

        section > div {
            margin-bottom: 20px;
        }

        section p, section ul li, aside {
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
        
        h3 {
            text-transform: capitalize;
            font-family: "Time New Roman", serif;
            margin-bottom: 10px;
        }

        h3 > span {
            font-weight: normal;
            font-style: italic;
        }

        aside {
            font-size: 14px;
        }
    </style>
    <article>
        <header>
            <h1></h1>
            <p></p>
        </header>
    </article>
    <main></main>
    `;
