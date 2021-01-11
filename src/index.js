import styles from './css/index.scss'
import {ETHCard} from './lib/eth-card'

const plugin = document.getElementById('eth-widget-plugin')
const pluginButton = document.createElement('button')

pluginButton.innerHTML= `
<style>${styles.toString()}</style>
ETH Widget
`
//render button to trigger widget//
plugin.appendChild(pluginButton)

//render widget on click//
pluginButton.onclick = renderWidget

function renderWidget() {
    //define custom HTML element to render//
    customElements.define('eth-card', ETHCard)
    //render the eth-card//
    plugin.innerHTML = `<eth-card></eth-card>`
}