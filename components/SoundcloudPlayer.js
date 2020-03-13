import { attributes, html } from '../config/config.md';



const SoundcloudPlayer = () => (<div>
<iframe
width="100%"
height="120"
scrolling="no"
frameBorder="no"
allow="autoplay"
src={attributes.SouncloudIframeURL}
alt="sc"
>
</iframe>
</div>
);
export default SoundcloudPlayer;
