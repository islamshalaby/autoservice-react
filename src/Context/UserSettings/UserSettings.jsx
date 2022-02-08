import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { UserSettingsContext } from "./context";
import moment from "moment";
import "moment/locale/ar";

const UserSettings = (props = {}) => {
  const { children } = props;
  const [isRtl, setIsRtl] = useState(true);
  const [userId, setUserId] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIwMDIyMjA5OSIsImlhdCI6MTYzNTg5NTg0MSwiZXhwIjoxOTUxMjU1ODQxfQ.eu8D7aUZ_u-U6zoH41Y4XbRq0wfkBu7kYtVNt1m08c8"
  );

  useEffect(() => {
    moment.locale("ar");
    localStorage.setItem("userId", userId);
  }, []);

  return (
    <UserSettingsContext.Provider
      value={{
        isRtl,
        setIsRtl,
        userId,
        setUserId,
      }}
    >
      {children}
    </UserSettingsContext.Provider>
  );
};

UserSettings.propTypes = {
  children: PropTypes.node,
};

UserSettings.defaultProps = {
  children: null,
};

export default UserSettings;
