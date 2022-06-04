import { PUBLIC_IMAGE } from "constants/path";
import { useState } from "react";
import { StyledHeaderDropdown } from "./headerDropdown.style";

const avatar = `${PUBLIC_IMAGE}/header-avatar.webp`;
const HeaderDropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <StyledHeaderDropdown>
      <button type="button" className="header-avatar" onClick={() => setOpen(!open)}>
        <img src={avatar} alt="avatar" />
      </button>
      {open && <h1>Dropdown Menu</h1>}
    </StyledHeaderDropdown>
  );
};

export default HeaderDropdown;
