
import React from 'react';
import "./Sidebar.css"
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ChatIcon from "@material-ui/icons/Chat";
import { ExpandMoreOutlined } from "@material-ui/icons";
import { useStateValue } from './StateProvider';


function Sidebar() {
    const [{ user },dispatch ] = useStateValue();
    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL}  title={user.displayName} />
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information"  />

            <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
            <SidebarRow Icon={PeopleIcon}title="Friends" />
            <SidebarRow Icon={ChatIcon}title="Messages" />
            <SidebarRow Icon={StorefrontIcon}title="Marketplaces" />
            <SidebarRow Icon={VideoLibraryIcon}title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlined}title="Marketplaces" />
        </div>
    )
}

export default Sidebar
