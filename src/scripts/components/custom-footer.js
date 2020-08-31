const template = document.createElement('template');
        template.innerHTML = `
        <style>  import "bootstrap/dist/css/bootstrap.min.css";
        import "./styles/styles.css";
        </style>`;

class CustomFooter extends HTMLElement {

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
        :host {
            font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            text-align: left;
          }

        footer {
            background-color: #206a5d;
            font-size: medium;
            display: flex;
            position: fixed;
            right: 2rem;
            bottom: 1rem;
            flex-wrap: wrap;
            justify-content: center;
            
          }
          
          .container{
            padding-right: 15px;
            padding-left: 15px;
            max-width: 100%;
          }
           p {
           
          }

        a{
            color: #fff;
            text-decoration: none;
            justify-content: center;
            background-color: transparent;
        }
        a ::hover{
            box-sizing: border-box;
        }
          
        </style>
        
      <footer  class="text-muted">
        <div class="container">
        <p>
      <a href="#">Kembali Ke atas</a>
    </p> </div>
    </footer
        `
    }
}

customElements.define("custom-footer", CustomFooter);