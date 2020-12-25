import {Col, Row} from 'antd';
import intl from 'react-intl-universal';
import React from 'react';

export const AppHeader = () => {
    return (
        <Row>
            <Col offset={3}>
                {intl.get('header.navigation')}
            </Col>
        </Row>
    );
}