//SEO
import { attributes, html } from '../config/seo.md';

const Helmet = () => (<>
 
    <title>{attributes.Title}</title>
    <noscript><meta httpEquiv="refresh"/></noscript>

    <meta property="og:site_name" content={attributes.Title}/>
    <meta property="og:url" content={attributes.Url} />
    <meta property="og:image" content=" " />
    <meta property="og:locale" content="en_GB" />
    
    
    <link rel="canonical" href= {attributes.Url} />
    <meta name="referrer" content="origin-when-crossorigin" id="meta_referrer" />

    <meta name="description" content={attributes.MetaDescription} />


</>);
export default Helmet;