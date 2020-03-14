import Link from "next/link" ;
import { attributes, html } from '../../config/config.md';

const Navheader = () => (
  <div className="navbar-header">
    <Link href="/">
    <a className="navbar-brand text-uppercase" >
      <h1>{attributes.AppName}</h1>
    </a>
    </Link>

  </div> 
);

export default Navheader;