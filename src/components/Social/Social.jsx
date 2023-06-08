import InstagramIcon from '@mui/icons-material/Instagram';
import textContent from "./TextContent";
import "./Social.scss";
const Social = () => {
    return (
        <div className="social">
            <div className="left">
                {textContent().title}
            </div>
            <a className="right link" href="https://www.instagram.com/korea_cosmetics_tm/" target='_blank' rel='noreferrer'>
                <InstagramIcon/>
                <span>{textContent().url}</span>
            </a>
        </div>
    )
};

export default Social;
