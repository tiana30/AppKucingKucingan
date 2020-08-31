import "regenerator-runtime";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";
import "./scripts/components/nav-bar.js"
import "./scripts/components/custom-footer.js"
import main from "./scripts/view/main";
import mainInfo from "./scripts/view/main-info.js";
document.addEventListener("DOMContentLoaded", main);
document.addEventListener("DOMContentLoaded", mainInfo);