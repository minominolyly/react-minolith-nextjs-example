import CommonLayout from "@/layouts/CommonLayout";
import { Metadata } from "next";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Column,
  Columns,
  Container,
  Dialogue,
  DialogueAvatar,
  DialogueAvatarContainer,
  DialogueContentContainer,
  DialogueMessage,
  DialogueMessageInner,
  DialogueName,
  Div,
  Gingham,
  Message,
  MessageBody,
  MessageHeader,
  Ruby,
  Stripe,
} from "react-minolith";

const TITLE = "react-minolith-nextjs-example";
const DESCRIPTION = "react-minolith Next.js example.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    siteName: "react-minolith-nextjs-example",
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@minominolyly",
    site: "@minominolyly",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function Home() {
  return (
    <CommonLayout>
      <Container>
        <Div spacing={{ padding: 1 }}>
          {
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
        </Div>
        <Div spacing={{ padding: 1 }}>
          <Accordion>
            <AccordionSummary>
              <Ruby rubyText="バッジ">{"Badge"}</Ruby>
            </AccordionSummary>
            <AccordionDetails>
              <Div spacing={{ padding: 1 }}>
                <Columns gutter={"1rem"}>
                  <Column>
                    <Badge>{"Badge"}</Badge>
                  </Column>
                  <Column>
                    <Badge colorName="red">{"Badge"}</Badge>
                  </Column>
                  <Column>
                    <Badge colorName="orange">{"Badge"}</Badge>
                  </Column>
                  <Column>
                    <Badge colorName="yellow">{"Badge"}</Badge>
                  </Column>
                  <Column>
                    <Badge colorName="green">{"Badge"}</Badge>
                  </Column>
                  <Column>
                    <Badge colorName="cyan">{"Badge"}</Badge>
                  </Column>
                  <Column>
                    <Badge colorName="blue">{"Badge"}</Badge>
                  </Column>
                  <Column>
                    <Badge colorName="violet">{"Badge"}</Badge>
                  </Column>
                  <Column>
                    <Badge colorName="magenta">{"Badge"}</Badge>
                  </Column>
                </Columns>
              </Div>
            </AccordionDetails>
          </Accordion>
        </Div>
        <Div spacing={{ padding: 1 }}>
          <Accordion>
            <AccordionSummary>
              <Ruby rubyText="ボタン">{"Button"}</Ruby>
            </AccordionSummary>
            <AccordionDetails>
              <Div spacing={{ padding: 1 }}>
                <Columns gutter={"1rem"}>
                  <Column>
                    <Button>{"Button"}</Button>
                  </Column>
                  <Column>
                    <Button colorName="red">{"Button"}</Button>
                  </Column>
                  <Column>
                    <Button colorName="orange">{"Button"}</Button>
                  </Column>
                  <Column>
                    <Button colorName="yellow">{"Button"}</Button>
                  </Column>
                  <Column>
                    <Button colorName="green">{"Button"}</Button>
                  </Column>
                  <Column>
                    <Button colorName="cyan">{"Button"}</Button>
                  </Column>
                  <Column>
                    <Button colorName="blue">{"Button"}</Button>
                  </Column>
                  <Column>
                    <Button colorName="violet">{"Button"}</Button>
                  </Column>
                  <Column>
                    <Button colorName="magenta">{"Button"}</Button>
                  </Column>
                </Columns>
              </Div>
            </AccordionDetails>
          </Accordion>
        </Div>
        <Div spacing={{ padding: 1 }}>
          <Accordion>
            <AccordionSummary>
              <Ruby rubyText="カード">{"Card"}</Ruby>
            </AccordionSummary>
            <AccordionDetails>
              <Div spacing={{ padding: 1 }}>
                <Card>
                  <CardHeader>{"CardHeader"}</CardHeader>
                  <CardBody>
                    {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }
                  </CardBody>
                  <CardFooter>{"CardFooter"}</CardFooter>
                </Card>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Card colorName="red">
                  <CardHeader>{"CardHeader"}</CardHeader>
                  <CardBody>
                    {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }
                  </CardBody>
                  <CardFooter>{"CardFooter"}</CardFooter>
                </Card>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Card colorName="orange">
                  <CardHeader>{"CardHeader"}</CardHeader>
                  <CardBody>
                    {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }
                  </CardBody>
                  <CardFooter>{"CardFooter"}</CardFooter>
                </Card>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Card colorName="yellow">
                  <CardHeader>{"CardHeader"}</CardHeader>
                  <CardBody>
                    {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }
                  </CardBody>
                  <CardFooter>{"CardFooter"}</CardFooter>
                </Card>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Card colorName="green">
                  <CardHeader>{"CardHeader"}</CardHeader>
                  <CardBody>
                    {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }
                  </CardBody>
                  <CardFooter>{"CardFooter"}</CardFooter>
                </Card>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Card colorName="cyan">
                  <CardHeader>{"CardHeader"}</CardHeader>
                  <CardBody>
                    {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }
                  </CardBody>
                  <CardFooter>{"CardFooter"}</CardFooter>
                </Card>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Card colorName="blue">
                  <CardHeader>{"CardHeader"}</CardHeader>
                  <CardBody>
                    {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }
                  </CardBody>
                  <CardFooter>{"CardFooter"}</CardFooter>
                </Card>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Card colorName="violet">
                  <CardHeader>{"CardHeader"}</CardHeader>
                  <CardBody>
                    {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }
                  </CardBody>
                  <CardFooter>{"CardFooter"}</CardFooter>
                </Card>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Card colorName="magenta">
                  <CardHeader>{"CardHeader"}</CardHeader>
                  <CardBody>
                    {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }
                  </CardBody>
                  <CardFooter>{"CardFooter"}</CardFooter>
                </Card>
              </Div>
            </AccordionDetails>
          </Accordion>
        </Div>
        <Div spacing={{ padding: 1 }}>
          <Accordion>
            <AccordionSummary>
              <Ruby rubyText="せりふ">{"Dialogue"}</Ruby>
            </AccordionSummary>
            <AccordionDetails>
              <Div spacing={{ padding: 1 }}>
                <Dialogue>
                  <DialogueAvatarContainer>
                    <DialogueAvatar
                      src="https://minominolyly.github.io/minolith/images/avatar.png"
                      alt="avatar"
                    />
                  </DialogueAvatarContainer>
                  <DialogueContentContainer>
                    <DialogueName>{"DialogueName"}</DialogueName>
                    <DialogueMessage>
                      <DialogueMessageInner>
                        {
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        }
                      </DialogueMessageInner>
                    </DialogueMessage>
                  </DialogueContentContainer>
                </Dialogue>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Dialogue colorName="red">
                  <DialogueAvatarContainer>
                    <DialogueAvatar
                      src="https://minominolyly.github.io/minolith/images/avatar.png"
                      alt="avatar"
                    />
                  </DialogueAvatarContainer>
                  <DialogueContentContainer>
                    <DialogueName>{"DialogueName"}</DialogueName>
                    <DialogueMessage>
                      <DialogueMessageInner>
                        {
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        }
                      </DialogueMessageInner>
                    </DialogueMessage>
                  </DialogueContentContainer>
                </Dialogue>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Dialogue colorName="orange">
                  <DialogueAvatarContainer>
                    <DialogueAvatar
                      src="https://minominolyly.github.io/minolith/images/avatar.png"
                      alt="avatar"
                    />
                  </DialogueAvatarContainer>
                  <DialogueContentContainer>
                    <DialogueName>{"DialogueName"}</DialogueName>
                    <DialogueMessage>
                      <DialogueMessageInner>
                        {
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        }
                      </DialogueMessageInner>
                    </DialogueMessage>
                  </DialogueContentContainer>
                </Dialogue>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Dialogue colorName="yellow">
                  <DialogueAvatarContainer>
                    <DialogueAvatar
                      src="https://minominolyly.github.io/minolith/images/avatar.png"
                      alt="avatar"
                    />
                  </DialogueAvatarContainer>
                  <DialogueContentContainer>
                    <DialogueName>{"DialogueName"}</DialogueName>
                    <DialogueMessage>
                      <DialogueMessageInner>
                        {
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        }
                      </DialogueMessageInner>
                    </DialogueMessage>
                  </DialogueContentContainer>
                </Dialogue>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Dialogue colorName="green">
                  <DialogueAvatarContainer>
                    <DialogueAvatar
                      src="https://minominolyly.github.io/minolith/images/avatar.png"
                      alt="avatar"
                    />
                  </DialogueAvatarContainer>
                  <DialogueContentContainer>
                    <DialogueName>{"DialogueName"}</DialogueName>
                    <DialogueMessage>
                      <DialogueMessageInner>
                        {
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        }
                      </DialogueMessageInner>
                    </DialogueMessage>
                  </DialogueContentContainer>
                </Dialogue>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Dialogue colorName="cyan">
                  <DialogueAvatarContainer>
                    <DialogueAvatar
                      src="https://minominolyly.github.io/minolith/images/avatar.png"
                      alt="avatar"
                    />
                  </DialogueAvatarContainer>
                  <DialogueContentContainer>
                    <DialogueName>{"DialogueName"}</DialogueName>
                    <DialogueMessage>
                      <DialogueMessageInner>
                        {
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        }
                      </DialogueMessageInner>
                    </DialogueMessage>
                  </DialogueContentContainer>
                </Dialogue>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Dialogue colorName="blue">
                  <DialogueAvatarContainer>
                    <DialogueAvatar
                      src="https://minominolyly.github.io/minolith/images/avatar.png"
                      alt="avatar"
                    />
                  </DialogueAvatarContainer>
                  <DialogueContentContainer>
                    <DialogueName>{"DialogueName"}</DialogueName>
                    <DialogueMessage>
                      <DialogueMessageInner>
                        {
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        }
                      </DialogueMessageInner>
                    </DialogueMessage>
                  </DialogueContentContainer>
                </Dialogue>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Dialogue colorName="violet">
                  <DialogueAvatarContainer>
                    <DialogueAvatar
                      src="https://minominolyly.github.io/minolith/images/avatar.png"
                      alt="avatar"
                    />
                  </DialogueAvatarContainer>
                  <DialogueContentContainer>
                    <DialogueName>{"DialogueName"}</DialogueName>
                    <DialogueMessage>
                      <DialogueMessageInner>
                        {
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        }
                      </DialogueMessageInner>
                    </DialogueMessage>
                  </DialogueContentContainer>
                </Dialogue>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Dialogue colorName="magenta">
                  <DialogueAvatarContainer>
                    <DialogueAvatar
                      src="https://minominolyly.github.io/minolith/images/avatar.png"
                      alt="avatar"
                    />
                  </DialogueAvatarContainer>
                  <DialogueContentContainer>
                    <DialogueName>{"DialogueName"}</DialogueName>
                    <DialogueMessage>
                      <DialogueMessageInner>
                        {
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        }
                      </DialogueMessageInner>
                    </DialogueMessage>
                  </DialogueContentContainer>
                </Dialogue>
              </Div>
            </AccordionDetails>
          </Accordion>
        </Div>
        <Div spacing={{ padding: 1 }}>
          <Accordion>
            <AccordionSummary>
              <Ruby rubyText="メッセージ">{"Message"}</Ruby>
            </AccordionSummary>
            <AccordionDetails>
              <Div spacing={{ padding: 1 }}>
                <Message>
                  <MessageHeader>{"Message"}</MessageHeader>
                  <MessageBody>
                    {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }
                  </MessageBody>
                </Message>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Message colorName="red">
                  <MessageHeader>{"Message"}</MessageHeader>
                  <MessageBody>
                    {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }
                  </MessageBody>
                </Message>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Message colorName="orange">
                  <MessageHeader>{"Message"}</MessageHeader>
                  <MessageBody>
                    {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }
                  </MessageBody>
                </Message>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Message colorName="yellow">
                  <MessageHeader>{"Message"}</MessageHeader>
                  <MessageBody>
                    {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }
                  </MessageBody>
                </Message>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Message colorName="green">
                  <MessageHeader>{"Message"}</MessageHeader>
                  <MessageBody>
                    {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }
                  </MessageBody>
                </Message>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Message colorName="cyan">
                  <MessageHeader>{"Message"}</MessageHeader>
                  <MessageBody>
                    {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }
                  </MessageBody>
                </Message>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Message colorName="blue">
                  <MessageHeader>{"Message"}</MessageHeader>
                  <MessageBody>
                    {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }
                  </MessageBody>
                </Message>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Message colorName="violet">
                  <MessageHeader>{"Message"}</MessageHeader>
                  <MessageBody>
                    {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }
                  </MessageBody>
                </Message>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Message colorName="magenta">
                  <MessageHeader>{"Message"}</MessageHeader>
                  <MessageBody>
                    {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }
                  </MessageBody>
                </Message>
              </Div>
            </AccordionDetails>
          </Accordion>
        </Div>
        <Div spacing={{ padding: 1 }}>
          <Accordion>
            <AccordionSummary>
              <Ruby rubyText="ギンガム">{"Gingham"}</Ruby>
            </AccordionSummary>
            <AccordionDetails>
              <Div spacing={{ padding: 1 }}>
                <Gingham colorName="gray" sizing={{ aspectRatio: "16:9" }}>
                  {"Gingham"}
                </Gingham>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Gingham colorName="red" sizing={{ aspectRatio: "16:9" }}>
                  {"Gingham"}
                </Gingham>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Gingham colorName="orange" sizing={{ aspectRatio: "16:9" }}>
                  {"Gingham"}
                </Gingham>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Gingham colorName="yellow" sizing={{ aspectRatio: "16:9" }}>
                  {"Gingham"}
                </Gingham>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Gingham colorName="green" sizing={{ aspectRatio: "16:9" }}>
                  {"Gingham"}
                </Gingham>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Gingham colorName="cyan" sizing={{ aspectRatio: "16:9" }}>
                  {"Gingham"}
                </Gingham>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Gingham colorName="blue" sizing={{ aspectRatio: "16:9" }}>
                  {"Gingham"}
                </Gingham>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Gingham colorName="violet" sizing={{ aspectRatio: "16:9" }}>
                  {"Gingham"}
                </Gingham>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Gingham colorName="magenta" sizing={{ aspectRatio: "16:9" }}>
                  {"Gingham"}
                </Gingham>
              </Div>
            </AccordionDetails>
          </Accordion>
        </Div>
        <Div spacing={{ padding: 1 }}>
          <Accordion>
            <AccordionSummary>
              <Ruby rubyText="ストライプ">{"Stripe"}</Ruby>
            </AccordionSummary>
            <AccordionDetails>
              <Div spacing={{ padding: 1 }}>
                <Stripe colorName="gray" sizing={{ aspectRatio: "16:9" }}>
                  {"Stripe"}
                </Stripe>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Stripe colorName="red" sizing={{ aspectRatio: "16:9" }}>
                  {"Stripe"}
                </Stripe>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Stripe colorName="orange" sizing={{ aspectRatio: "16:9" }}>
                  {"Stripe"}
                </Stripe>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Stripe colorName="yellow" sizing={{ aspectRatio: "16:9" }}>
                  {"Stripe"}
                </Stripe>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Stripe colorName="green" sizing={{ aspectRatio: "16:9" }}>
                  {"Stripe"}
                </Stripe>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Stripe colorName="cyan" sizing={{ aspectRatio: "16:9" }}>
                  {"Stripe"}
                </Stripe>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Stripe colorName="blue" sizing={{ aspectRatio: "16:9" }}>
                  {"Stripe"}
                </Stripe>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Stripe colorName="violet" sizing={{ aspectRatio: "16:9" }}>
                  {"Stripe"}
                </Stripe>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Stripe colorName="magenta" sizing={{ aspectRatio: "16:9" }}>
                  {"Stripe"}
                </Stripe>
              </Div>
            </AccordionDetails>
          </Accordion>
        </Div>
      </Container>
    </CommonLayout>
  );
}
