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
      
      
        const name = this.getAttribute("name")
      const giturl  = this.getAttribute("git")
      const liveurl = this.getAttribute("live")
      const imgurl = this.getAttribute("img")
     
     
    //   console.log(this.attributes)
      console.log(giturl, liveurl, imgurl, name)

        this.innerHTML =`
        <section>
        <sl-card>
        <h3>${name}</h3>
        <img src='${imgurl}' alt=${name} slot="image"/>
        

        <div slot="footer">
        <a href=${giturl}> <sl-button size="medium" pill>Git</sl-button></a>
        <a href=${liveurl}> <sl-button size="medium" pill>Live</sl-button></a>
      </div>
      
        <sl-card>
        </section>`;
    }
}



/////////////////////////////////
// Register the HTML Tag here
/////////////////////////////////
customElements.define("port-card", PortfolioCard)

customElements.define("template-example", TemplateExample)