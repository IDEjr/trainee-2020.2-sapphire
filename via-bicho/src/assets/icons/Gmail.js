import * as React from "react"

function SvgGmail(props) {
  return (
    <a  href= "gasantos@idejr.com.br">
      <svg viewBox="0 0 512 512" {...props}>
        <path fill="#eceff1" d="M64 64h384v384H64z" />
        <path fill="#cfd8dc" d="M256 296.384L448 448V148.672z" />
        <path
          d="M464 64h-16L256 215.616 64 64H48C21.504 64 0 85.504 0 112v288c0 26.496 21.504 48 48 48h16V148.672l192 147.68L448 148.64V448h16c26.496 0 48-21.504 48-48V112c0-26.496-21.504-48-48-48z"
          fill="#f44336"
        />
      </svg>
    </a>
  )
}

export default SvgGmail