import cat from "../../images/cat.svg";
const template = document.createElement('template');
        template.innerHTML = `
        <style>  import "bootstrap/dist/css/bootstrap.min.css";
        import "./styles/styles.css";
        </style>`;

class NavBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode:"open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        .navbar{
            background-color: #206a5d;
            size:10px;
            
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            padding:0.5rem 1rem;
        }
        @media (min-width: 768px) {
            .nav-bar {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                padding-left:0;
            }
        }
        @media (min-width: 360px) {
            .nav-bar {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                padding-left::0;
            }
        }
    
        .navbar-dark .navbar-brand {
            color: #fff;
        }

        .navbar-brand {
            display: inline-block;
            padding-top: .5rem;
            padding-bottom: .5rem;
            margin-right: 1rem;
            font-size: 1.25rem;
            line-height: inherit;
            white-space: nowrap;
        }
        .navbar-logo {
            padding-right: 1rem;
        }
        .p {
            padding-top: .5rem;
        }
        a {
            color: #fff;
            text-decoration: none;
            background-color: transparent;
        }
        a ::hover{
            box-sizing: border-box;
        }
        </style>

        <div class="navbar navbar-dark">
        <a href="../../index.html" class="navbar-brand d-flex w-100">
        <img class="nav-logo" src="${cat}"> </img>
        <strong>Kucing Kucingan</strong>
        </a>
        </div>
        `
    }
}

customElements.define("nav-bar", NavBar);