import { FontAwesomeIcon } from "fontAwesome";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import Link from "next/link";
import kebabCase from "lodash/kebabCase";
import { usePathname, useRouter } from "next/navigation";
import '@styles/global.css';
import '@styles/dashboard.css';

const NavLink = (props) => {
    const linkUrl = `/dashboard/${kebabCase(props.label)}`;
    console.log(`linkUrl: ${linkUrl}`);


    const pathname = usePathname();
    console.log("path: ", pathname)

    let navHighlight = linkUrl == pathname ? true : false;
    console.log("navHighlight: ", navHighlight);

    const highlightedNav = {
        background: "var(--nav-bg)",
        color: "var(--dark-1)",

    }


    return (
        <Link
            href={linkUrl}
        >

            <div
                className="nav-link"
                style={navHighlight ? highlightedNav : {}}
            >

                <p className={props.tag} style={navHighlight ? { color: "var(--dark-1)", fontWeight: "600" } : {}}>{props.label}</p>

                <FontAwesomeIcon
                    icon={props.icon}
                    className={navHighlight ? "nav-icon-only-highlighted" : "nav-icon-only"}
                    style={props.iconOnlyToggle}
                    onClick={() => console.log(`${props.label} was clicked`)}
                />

                <FontAwesomeIcon
                    icon={props.icon}
                    className={navHighlight ? "nav-icon-highlighted" : "nav-icon"}
                    style={navHighlight ? {} : props.iconToggle}
                    onClick={() => console.log(`${props.label} was clicked`)}
                />
                <p className="link-label"
                    style={props.toggle}
                >
                    {props.label}
                </p>
            </div>
        </Link >

    )
}

export default NavLink