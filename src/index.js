import styles from '../src/css/index.scss'

const plugin = document.getElementById('eth-widget-plugin')

const pluginButton = document.createElement('button')

pluginButton.innerHTML= `
<style>${styles.toString()}</style>
ETH Widget
`
plugin.appendChild(pluginButton)