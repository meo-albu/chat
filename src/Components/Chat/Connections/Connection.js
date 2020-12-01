import { useMemo } from "react"
import styled from "styled-components"



const Connection = ({name, imagePath, isOnline}) => {

  const getRandomColor = useMemo(() => {
    return `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
  }, [])

  return (
    <Container isOnline={isOnline}>
      <Image getRandomColor={getRandomColor}>
        {imagePath ? 
          <img src={imagePath} alt={`${name}'s avatar`} />
          : <span>
            {name.substring(0, 1)}
          </span>
        }
      </Image>
      <div>
        <h4>{name}</h4>
        <i>{isOnline ? 'Online' : 'Offline'}</i>
      </div>
    </Container>
  )
}

export default Connection

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  cursor: pointer;

  :hover {
    background: rgba(0, 0, 0, 0.1);
  }

  h4 {
    text-transform: capitalize;
    font-weight: 700;
    font-size: 0.9em;
  }

  i {
    font-style: normal;
    color: ${({isOnline, theme}) => isOnline ? theme.colorTheme.primary : theme.darkTheme ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)'};
    display: block;
    font-size: 0.7em;
  }
`
const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  background: ${({getRandomColor}) => getRandomColor};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 15px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`