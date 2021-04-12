// USE THIS FILE TO WRITE ANY WEB COMPONENTS, use example for reference

//////////////////////////////////
// Web Components Classes Here
//////////////////////////////////

class TemplateExample extends HTMLElement {
    constructor(){
        super()

        this.innerHTML = `<h1>Hello World</h1>`
    }
}

class PortfolioCard extends HTMLElement {
    constructor() {
        super()
        
      const giturl  = this.getAttribute("giturl")
      const liveurl = this.getAttribute("liveurl")
      const imgurl = this.getAttribute("imgurl")

      console.log(giturl, liveurl, imgurl,)
    }
}



/////////////////////////////////
// Register the HTML Tag here
/////////////////////////////////
customElements.define("portfolio-card", PortfolioCard)

customElements.define("template-example", TemplateExample)