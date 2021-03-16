import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom";
import { Content } from "../../context/routes-context";
import { FeedContent } from "./Feed-Content";
import { Keybinding } from "../../ui/Keybindings";
import { NavigationItem } from "../../ui/NavigationItem";
import { ShortcutSwitch } from "../Settings/ShortcutSwitch";
import { SelfMenuItem } from "../../ui/Self";

const pathname = "/feed";
const combo = "ctrl+F";

export const Feed: React.FunctionComponent<{}> = () => {
  const history = useHistory();
  const [enabled, setEnabled] = useState(true);
  return (
    <>
      <Keybinding
        combo={combo.toLowerCase()}
        onKeyDown={() => {
          history.push(pathname);
        }}
        disabled={!enabled}
      />
      <Content name="settings/shortcuts">
        <ShortcutSwitch
          label="Feed"
          shortcut={combo}
          defaultChecked={enabled}
          onChange={() => setEnabled(x => !x)}
        />
      </Content>
      <Content name="navigation">
        <NavigationItem
          featherIcon="image"
          text="Feed"
          label={enabled ? combo.replace('ctrl+', '^') : undefined}
          href={pathname}
          onNavigate={(pathname: string) => history.push(pathname)}
        ></NavigationItem>
      </Content>
      <Content name="main">
        <Route path={pathname} exact={true}>
          <FeedContent />
        </Route>
      </Content>
      <Content name="self/menu-options">
        <SelfMenuItem
          text="Feed"
          onClick={() => history.push(pathname)}
        ></SelfMenuItem>
      </Content>
    </>
  );
};
