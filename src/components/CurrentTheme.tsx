"use client";
import ColorThemeContext from "@/contexts/ColorThemeContext";
import Link from "next/link";
import { useContext } from "react";
import {
  Link as MinolithLink,
  Message,
  MessageBody,
  MessageHeader,
  Paragraph,
  Ruby,
  Span,
} from "react-minolith";

export default function CurrentTheme() {
  const colorTheme = useContext(ColorThemeContext);
  const colorThemeName =
    colorTheme === "default" ? (
      <Span>{"Default"}</Span>
    ) : colorTheme === "wairo" ? (
      <Span>
        <Ruby rubyText={"wairo"}>{"和色"}</Ruby>
      </Span>
    ) : colorTheme === "nordic" ? (
      <Span>{"Nordic"}</Span>
    ) : colorTheme === "solar" ? (
      <Span>{"Solar"}</Span>
    ) : colorTheme === "primal" ? (
      <Span>{"Primal"}</Span>
    ) : colorTheme === "vampire" ? (
      <Span>{"Vampire"}</Span>
    ) : (
      "default"
    );

  const colorThemeDescription =
    colorTheme === "default" ? (
      <Paragraph>
        {"Default theme is minolith default color palette."}
      </Paragraph>
    ) : colorTheme === "wairo" ? (
      <Paragraph>
        {"Wairo theme is influenced by japanese traditional color palette."}
      </Paragraph>
    ) : colorTheme === "nordic" ? (
      <Paragraph>
        {"Nordic theme is influenced by "}
        <MinolithLink
          as={Link}
          href="https://www.nordtheme.com/"
          role="link"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          {"Nord"}
        </MinolithLink>
        {"."}
      </Paragraph>
    ) : colorTheme === "solar" ? (
      <Paragraph>
        {"Solar theme is influenced by "}
        <MinolithLink
          as={Link}
          href="https://ethanschoonover.com/solarized/"
          role="link"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          {"Solarized"}
        </MinolithLink>
        {"."}
      </Paragraph>
    ) : colorTheme === "primal" ? (
      <Paragraph>
        {"Primal theme is influenced by "}
        <MinolithLink
          as={Link}
          href="https://primary-theme.github.io/"
          role="link"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          {"Primary"}
        </MinolithLink>
        {"."}
      </Paragraph>
    ) : colorTheme === "vampire" ? (
      <Paragraph>
        {"Vampire theme is influenced by "}
        <MinolithLink
          as={Link}
          href="https://draculatheme.com/"
          role="link"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          {"Dracula"}
        </MinolithLink>
        {"."}
      </Paragraph>
    ) : (
      "default"
    );
  return (
    <Message>
      <MessageHeader>
        {`Color Theme: `}
        {colorThemeName}
      </MessageHeader>
      <MessageBody>{colorThemeDescription}</MessageBody>
    </Message>
  );
}
