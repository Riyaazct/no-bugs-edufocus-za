import "./widget.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import DownloadIcon from '@mui/icons-material/Download';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 10;
  const diff = 2;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <GroupAddIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "enrolled":
      data = {
        title: "Enrolled",
        isMoney: false,
        link: "View all Enrolled",
        icon: (
          <SubscriptionsIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "donate":
      data = {
        title: "Donate",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <BloodtypeIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "download":
      data = {
        title: "Download",
        isMoney: false,
        link: "See details",
        icon: (
          <DownloadIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && ""} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
