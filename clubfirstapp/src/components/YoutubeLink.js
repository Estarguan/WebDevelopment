
const Image = ({image}) => {
    const handleClick = () => {
      window.location.replace("https://www.w3schools.com");
    }
  
    return (
      <div>
        Click this image
        <img 
          src={image} 
          onClick={() => handleClick()}
        />
      </div>
    )
  }
  
  const YoutubeLink = ({ link }) => { 
  
    return(
        <div>
            <div>Estar's youtube linka
            Click <a className="App-link" href={link}> here</a>
            </div>
            <div>
              <Image image="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"/>
            </div>
        </div>
        
    )
  }
  
  export default YoutubeLink;
  
  