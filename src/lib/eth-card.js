import styles from '../css/eth-card.scss'

const template = document.createElement('template')

///view for the card//
template.innerHTML = `
    <style>${styles.toString()}</style> 

    <div class='idea-markets-plugin-trade-widget'>
        <p>ETH Balance</p>
    </div>
`

export class ETHCard extends HTMLElement {
    constructor() {
        super()

        // add a shadow DOM//
        const shadowDOM = this.attachShadow({mode:'open'})

        // render the template in the shadow DOM//
        shadowDOM.appendChild(template.content.cloneNode(true))
    }
}