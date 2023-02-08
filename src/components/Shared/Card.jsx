import React from 'react'
import PropTypes  from 'prop-types'
function Card({children,reverse}) {
  // return (
  //    <div className={`card ${reverse && 'reverse'}`}>{children}</div> 
  //   //conditional statementto apply a class : apply css for class but if there is reverse then apply css of reverse [THIS IS AN EXAMPLE OF CONDITIONAL CLASS]
  // )

  return (
    //below is an example of conditional styling for the code same as above
    <div className="card" style={{
      backgroundColor:reverse ?'rgba(0,0,0,0.4)' : '#fff',
      color:reverse ?'#fff' : 'rgba(0,0,0,0.4)'
    }}>{children}</div>
    //if reverse then we want background color to be black else white, same for text color
  )
}
Card.defaultProps={
  reverse:true,
}
Card.propTypes={
children:PropTypes.node.isRequired,
reverse:PropTypes.bool,
}

export default Card