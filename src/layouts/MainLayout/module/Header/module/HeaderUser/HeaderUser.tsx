import { PUBLIC_IMAGE } from "constants/path";
import { useState } from "react";
import { StyledHeaderUser } from "./headerUser.style";

const avatar = `${PUBLIC_IMAGE}/header-avatar.webp`;
const HeaderUser = () => {
  const [open, setOpen] = useState(false);

  return (
    <StyledHeaderUser>
      <button type="button" className="header-avatar" onClick={() => setOpen(!open)}>
        <img src={avatar} alt="avatar" />
      </button>
      {open && <h1>Dropdown Menu</h1>}
    </StyledHeaderUser>
  );
};

export default HeaderUser;
