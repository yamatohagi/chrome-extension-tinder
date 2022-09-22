import React from "react";
import ReactDOM from "react-dom";

const Main = (): JSX.Element => {
  let ran = 1;
  const swipe = function (): void {
    ran = Math.random();
    const result = Math.floor(ran * 100);
    if (result > 84) {
      (
        document.querySelector(
          "#s1362659109 > div > div.App__body.H\\(100\\%\\).Pos\\(r\\).Z\\(0\\) > div > main > div.H\\(100\\%\\) > div > div > div.Mt\\(a\\).Px\\(4px\\)--s.Pos\\(r\\).Expand.H\\(--recs-card-height\\)--ml.Maw\\(--recs-card-width\\)--ml > div > div > div.Pos\\(a\\).B\\(0\\).Iso\\(i\\).W\\(100\\%\\).Start\\(0\\).End\\(0\\) > div > div.Mx\\(a\\).Fxs\\(0\\).Sq\\(70px\\).Sq\\(60px\\)--s.Bd.Bdrs\\(50\\%\\).Bdc\\(\\$c-ds-border-gamepad-nope-default\\) > button"
        ) as HTMLElement
      ).click();
    } else {
      (
        document.querySelector(
          "#s1362659109 > div > div.App__body.H\\(100\\%\\).Pos\\(r\\).Z\\(0\\) > div > main > div.H\\(100\\%\\) > div > div > div.Mt\\(a\\).Px\\(4px\\)--s.Pos\\(r\\).Expand.H\\(--recs-card-height\\)--ml.Maw\\(--recs-card-width\\)--ml > div > div > div.Pos\\(a\\).B\\(0\\).Iso\\(i\\).W\\(100\\%\\).Start\\(0\\).End\\(0\\) > div > div.Mx\\(a\\).Fxs\\(0\\).Sq\\(70px\\).Sq\\(60px\\)--s.Bd.Bdrs\\(50\\%\\).Bdc\\(\\$c-ds-border-gamepad-like-default\\) > button > span > span"
        ) as HTMLElement
      ).click();
      //  いいね
    }
  };

  setInterval(swipe, Math.random() * 4000 + 1000);

  return (
    <div
      style={{ backgroundColor: "blue", color: "white", textAlign: "center" }}
    >
      This is React
    </div>
  );
};

const app = document.createElement("div");
document.body.prepend(app);
ReactDOM.render(<Main />, app);
