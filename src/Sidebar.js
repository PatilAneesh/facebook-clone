import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";

import ChatIcon from "@mui/icons-material/Chat";
import FlagIcon from "@mui/icons-material/Flag";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PeopleIcon from "@mui/icons-material/People";
import StorefrontIcon from "@mui/icons-material/Storefront";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://drive.google.com/file/d/19l2OO1hApPPnwCv4n72MOimZRRnd_HPV/view?usp=sharing"
        title="Aneesh Patil"
      />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="Covid 19 Information Center"
      />
      <SidebarRow Icon={FlagIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="vedios" />
      <SidebarRow Icon={ExpandMoreIcon} title="Marketplace" />
    </div>
  );
}

export default Sidebar;
