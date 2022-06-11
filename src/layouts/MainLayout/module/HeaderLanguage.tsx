import { useRef, useState } from "react";
import styled from "styled-components";
import IonIcon from "@reacticons/ionicons";
import { useOnClickOutside } from "hooks/useClickOutside";

const StyledHeaderLanguage = styled.div`
  position: relative;
  .language {
    &-switcher {
      background-color: transparent;
      font-size: 2.4rem;
      color: var(--white);
    }
    &-list {
      position: absolute;
      top: 120%;
      right: 0;
      border-radius: 4px;
      padding: 10px;
      background-color: #0d0d0d;
      z-index: 100;
    }
    &-item {
      button {
        font-weight: 600;
        padding: 8px 10px;
        color: var(--white);
        background-color: transparent;
      }
    }
  }
`;

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
