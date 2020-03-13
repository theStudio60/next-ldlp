import { attributes, html } from '../config/config.md';


const SoundcloudPlayer = () => (<div className="p-0 m-0">
<iframe
width={attributes.SouncloudIframeWidth} 
height={attributes.SouncloudIframeHeight} 
scrolling={attributes.SouncloudIframeScrolling}
frameBorder={attributes.SouncloudIframeFrameBorder}
allow={attributes.SouncloudIframeAllow}
src={attributes.SouncloudIframeURL}
alt={attributes.SouncloudIframeAlt}
>
</iframe>
</div>
);
export default SoundcloudPlayer;
