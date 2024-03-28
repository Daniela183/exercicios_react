//aula 406
import React from 'react'

//add no ex.11
function childrenWithProps(children, props) {
    return React.Children.map(children,
            child => React.cloneElement(child, {...props}))
}

export { childrenWithProps }
