import React from 'react'
import { Button, Icon, Menu } from "semantic-ui-react";
import { Container } from "semantic-ui-react";

export default function Navi() {
    return (
        <div>
            <Menu inverted fixed="top" size="middle
">
                <Container>
                    <Menu.Item name="outline">
                        <Icon name="outline" size="middle
" />
            HRMS
          </Menu.Item>
                    <Menu.Item name="Home" />
                    <Menu.Item name="JobAdvert" />
                    <Menu.Item name="Companies" />
                    <Menu.Menu position="right">
                        {/* <Dropdown item text="Language">
              <Dropdown.Menu>
                <Dropdown.Item>Turkish</Dropdown.Item>
                <Dropdown.Item>German</Dropdown.Item>
                <Dropdown.Item>Spanish</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}

                        <Menu.Item>
                            <Button.Group>
                                <Button primary>Sign Up</Button>
                                <Button.Or />
                                <Button positive>Sign In</Button>
                            </Button.Group>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
