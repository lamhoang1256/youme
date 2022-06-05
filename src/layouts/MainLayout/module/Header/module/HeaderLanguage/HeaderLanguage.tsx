import { useRef, useState } from "react";
import IonIcon from "@reacticons/ionicons";
import { useOnClickOutside } from "hooks/useClickOutside";
import { StyledHeaderLanguage } from "./headerLanguage.style";

const HeaderLanguage = () => {
  const [showLanguage, setShowLanguage] = useState(false);
  const langRef = useRef(null);

  function switchLanguage(lang: string) {
    localStorage.setItem("language", lang);
    window.location.reload();
  }
  useOnClickOutside(langRef, () => setShowLanguage(false));
  return (
    <StyledHeaderLanguage ref={langRef}>
      <button
        type="button"
        className="language-switcher"
        onClick={() => setShowLanguage(!showLanguage)}
      >
        <IonIcon name="globe-outline" />
      </button>
      {showLanguage && (
        <ul className="language-list">
          <li className="language-item">
            <button type="button" onClick={() => switchLanguage("en")}>
              English
            </button>
          </li>
          <li className="language-item">
            <button type="button" onClick={() => switchLanguage("vi")}>
              Vietnam
            </button>
          </li>
        </ul>
      )}
    </StyledHeaderLanguage>
  );
};

export default HeaderLanguage;
