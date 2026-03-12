<!-- This read me file contains all the information I used and learnt while building this project -->

# React Notes

Installation
> npm create vite@latest

Launch your frontend app
> npm run dev

### React structure 

React is written is jsx, which is javascript xml.
It's basically code that allows you to write JS code within HTML.

**main.jsx - Main JS file**

**React components** can only return one element for example a div, but you can have child element within the main element. E.g. p tag with a div.

You can write HTML code within your components

**E.g.**

        function Header() {

            return (
                <header>
                    <h1>Neighbourhood Alerts</h1>
                </header>
            );

        }