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
      
      
        const name = this.getAttribute("projectName")
      const giturl  = this.getAttribute("giturl")
      const liveurl = this.getAttribute("liveurl")
      const imgurl = this.getAttribute("imgurl")
     
     
      console.log(this.attributes)
      console.log(giturl, liveurl, imgurl, name)

        this.innerHTML =`
        <sl-card>
        <h3>${name}</h3>
        <img src=${imgurl} alt=${name} slot="image">
        <a href=${giturl}> <sl-button size="medium" pill>Git</sl-button></a>
        <a href=${liveurl}> <sl-button size="medium" pill>Live</sl-button></a>
        <sl-card>`;
    }
}



/////////////////////////////////
// Register the HTML Tag here
/////////////////////////////////
customElements.define("portfolio-card", PortfolioCard)

customElements.define("template-example", TemplateExample)