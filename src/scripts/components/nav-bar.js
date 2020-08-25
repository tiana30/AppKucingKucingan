class NavBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        .navbar{
            background-color: #206a5d;
            font-size: medium;
            position: relative;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 0.5rem 0.5rem 1rem 20rem;
        }
    
        .navbar-dark .navbar-brand {
            color: #fff;
        }
        .align-items-center {
            -ms-flex-align: center !important;
            align-items: center !important;
        }
        .d-flex {
            display: -ms-flexbox !important;
            display: flex !important;
        }
        .navbar-brand {
            display: inline-block;
            padding-top: .3125rem;
            padding-bottom: .3125rem;
            margin-right: 1rem;
            font-size: 1.25rem;
            line-height: inherit;
            white-space: nowrap;
        }
        a {
            color: #fff;
            text-decoration: none;
            background-color: transparent;
        }
        a ::hover{
            box-sizing: border-box;
            color:#black;
            
        }
        </style>

        <div class="navbar navbar-dark shadow-sm">
        <a href="#" class="navbar-brand d-flex align-items-center">
        <strong>Kucing Kucingan</strong>
        </a>
        </div>
        `
    }
}

customElements.define("nav-bar", NavBar);