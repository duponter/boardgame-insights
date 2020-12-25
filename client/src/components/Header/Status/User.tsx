import {Avatar, Badge, Card, Tooltip} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import React, {CSSProperties} from 'react';
import intl from 'react-intl-universal';

interface IUserProps {
    username: string;
    style: CSSProperties;
    url: string;
    tooltip: string;
}

const User = (props: IUserProps) => {
    const {username, style, url, tooltip} = props;
    return (
        <div style={{textAlign: 'right'}}>
            <Badge.Ribbon color={style.backgroundColor} text={username}>
                <Card>
                    <br/>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <Tooltip placement="bottom" title={tooltip} overlayInnerStyle={{textAlign: 'center'}}>
                            <Avatar size={64} style={style} icon={<UserOutlined/>}/>
                        </Tooltip>
                    </a>
                </Card>
            </Badge.Ribbon>
        </div>
    )
}

interface ILoggedInUserProps {
    username: string;
}

export const LoggedInUser = (props: ILoggedInUserProps) => {
    const {username} = props;
    const style = {
        backgroundColor: '#ff5100'
    };
    return (
        <User style={style}
              username={username}
              url={`https://boardgamegeek.com/user/${username}`}
              tooltip={intl.get('status.user.loggedin.link.tooltip')}
        />
    )
}

export const AnonymousUser = () => {
    const style = {
        backgroundColor: '#CCCCCC'
    };
    return (
        <User style={style}
              username={intl.get('status.user.anonymous.ribbon')}
              url={`https://boardgamegeek.com/`}
              tooltip={intl.get('status.user.anonymous.link.tooltip')}
        />
    )
}