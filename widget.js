import React from "react";
import ReactDOM from "react-dom/client";
import reactToWebComponent from "react-to-webcomponent";
import ChatContainer from "./app/(chat)/page";

const ChatElement = reactToWebComponent(ChatContainer, React, ReactDOM);
customElements.define("chat", ChatElement);

