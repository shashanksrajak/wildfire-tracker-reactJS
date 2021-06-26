import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";

const Header = () => {
  return (
    <>
      <header className="header">
        <h1>
          <Icon icon={locationIcon} />
          Wildfire Tracker (powered by NASA API)
        </h1>

        <h6>Created By Shashank Kumar Rajak</h6>
      </header>
    </>
  );
};

export default Header;
