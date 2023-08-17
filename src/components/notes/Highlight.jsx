import React, { Fragment } from 'react'

export default function Highlight(props) {
  return (
    <React.Fragment>
        <span className="highlight">{props.text}</span> <Fragment>{" "}</Fragment>
    </React.Fragment>
  )
}