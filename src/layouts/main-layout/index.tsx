import React,{ FC } from 'react'
import { NavLink } from 'react-router-dom'
import { NavComponent } from './styles'

interface Props {
    
}

const MainLayout:FC<Props> = ({children}) => {
    return (
        <>
        <NavComponent>
          <NavLink
            to="/"
          //   activeStyle={{ textDecoration: "underline", color: "red" }}
          >
            QR Menu
          </NavLink>
          <NavLink
            to="/login"
            style={{ textDecoration: "underline", color: "blue" }}
          >
              Login
          </NavLink>
        </NavComponent>
        <div>{children}</div>
      </>
    )
}

export default MainLayout

