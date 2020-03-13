import Link from "next/link" ;
import { attributes, html } from '../../config/config.md';

const Navheader = () => (
  <div className="navbar-header">
    <Link className="navbar-brand text-uppercase" href="/">
    <a>
      <h1>{attributes.AppName}</h1>
    </a>
    </Link>

  </div> 
);

export default Navheader;