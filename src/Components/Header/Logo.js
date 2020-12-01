import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const Logo = () => {
  return (
    <Container initial={{opacity: 1}} exit={{opacity: 0}} transition={{delay: 0.5}} xmlns="http://www.w3.org/2000/svg" width="79.943" height="79.943" viewBox="0 0 79.943 79.943">
      <g id="loader" transform="translate(-347.029 -355.029)">
        <motion.g
          animate={{rotate: 360}}
          transition={{duration: 1.5, delay: 1}}
        >
          <path id="Path_6" data-name="Path 6" d="M39.971,0A39.961,39.961,0,0,1,75.215,58.816c-1.659,3.135,6.64,14.947,4.014,17.688-2.34,2.442-15.549-4.142-18.673-2.243A39.981,39.981,0,1,1,39.971,0Z" transform="translate(347.029 355.029)" fill="#42bbb3"/>
        </motion.g>
        <motion.g
          animate={{rotate: -360}}
          transition={{duration: 1.5, delay: 1}}
        >
        <path id="Path_7" data-name="Path 7" d="M21.431,0a21.425,21.425,0,0,1,18.9,31.534c-.89,1.681,3.56,8.014,2.152,9.483-1.254,1.309-8.336-2.221-10.011-1.2A21.436,21.436,0,1,1,21.431,0Z" transform="translate(408.431 373.569) rotate(90)" fill="#befffb"/>
        </motion.g>
      </g>
    </Container>
  )
}

export default Logo

const Container = styled.svg`
  width: 35px;
  height: 35px;
`
