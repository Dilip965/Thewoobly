import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import "./index.css";


const SocialSidebar = () => {
  return (
    <div className="social-sidebar">
      <a href="https://instagram.com" target="_blank" rel="noreferrer">
       <InstagramIcon/>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <XIcon/>
     
      </a>
      <a href="https://wa.me/your-number" target="_blank" rel="noreferrer">
      <LinkedInIcon/>

      </a>
    </div>
  );
};

export default SocialSidebar;
