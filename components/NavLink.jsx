import { FontAwesomeIcon } from "fontAwesome";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import Link from "next/link";

const NavLink = (props) => {

    return (
        <Link
            href={`/${props.label}`}
        >

            <div className="nav-link">

                <p className={props.tag} style={props.toggle_label}>{props.label}</p>

                <FontAwesomeIcon
                    icon={props.icon}
                    className="nav-icon-only"
                    style={props.iconOnlyToggle}
                    onClick={() => console.log(`${props.label} was clicked`)}
                />

                <FontAwesomeIcon
                    icon={props.icon}
                    className="nav-icon"
                    style={props.iconToggle}
                    onClick={() => console.log(`${props.label} was clicked`)}
                />
                <p className="link-label" style={props.toggle}>{props.label}</p>
            </div>
        </Link>

    )
}

export default NavLink